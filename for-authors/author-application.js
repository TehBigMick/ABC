const form = document.getElementById("authorApplication");
const submitButton = document.getElementById("submitApplication");
const formStatus = document.getElementById("formStatus");
const bookHook = document.getElementById("bookHook");
const hookCount = document.getElementById("hookCount");

function trackEvent(name, parameters = {}) {
  if (typeof window.gtag === "function") {
    window.gtag("event", name, parameters);
  }
}

function setStatus(message, state = "") {
  formStatus.textContent = message;
  formStatus.classList.toggle("is-error", state === "error");
  formStatus.classList.toggle("is-success", state === "success");
}

function isValidEndpoint(endpoint) {
  return /^https:\/\/formspree\.io\/f\/[a-zA-Z0-9_-]+$/.test(endpoint);
}

function updateHookCount() {
  hookCount.textContent = `${bookHook.value.length}/180`;
}

function markInvalidFields() {
  form.querySelectorAll("input, select, textarea").forEach((field) => {
    field.toggleAttribute("aria-invalid", !field.validity.valid);
  });
}

const endpoint = form.dataset.formEndpoint.trim();

if (isValidEndpoint(endpoint)) {
  submitButton.disabled = false;
  setStatus("Required fields are checked before the application is sent.");
}

bookHook.addEventListener("input", updateHookCount);
form.addEventListener("input", (event) => {
  if (event.target.matches("input, select, textarea")) {
    event.target.removeAttribute("aria-invalid");
  }
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (!isValidEndpoint(endpoint)) {
    setStatus("Online applications are not connected yet. Please check back shortly.", "error");
    return;
  }

  if (!form.checkValidity()) {
    markInvalidFields();
    form.reportValidity();
    setStatus("Please complete the required fields before sending.", "error");
    return;
  }

  submitButton.disabled = true;
  submitButton.textContent = "Sending…";
  setStatus("Sending your application securely…");

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json"
      }
    });

    if (!response.ok) {
      throw new Error(`Submission failed with status ${response.status}`);
    }

    form.reset();
    updateHookCount();
    setStatus("Application received. Thank you—we will review it before getting in touch.", "success");
    trackEvent("author_application_submitted");
  } catch (error) {
    setStatus("The application could not be sent. Please wait a moment and try again.", "error");
    trackEvent("author_application_error");
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = "Send application";
  }
});

document.getElementById("year").textContent = new Date().getFullYear();
updateHookCount();
