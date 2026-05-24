const form = document.querySelector("#request-form");
const output = document.querySelector("#output");

function value(formData, key) {
  return String(formData.get(key) || "").trim();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const requester = value(data, "requester");
  const institution = value(data, "institution");
  const information = value(data, "information");
  const reason = value(data, "reason");

  output.value = `To: ${institution}
Subject: Public information request

Hello,

My name is ${requester}. I am requesting the following public information:

${information}

Public interest:

${reason}

Please send the information in an open, machine-readable format when available. If any part of this request is refused, please cite the legal basis for refusal and explain the appeal path.

This draft must be checked against the local public-information law before sending.`;
});

