document.getElementById("feedback").addEventListener("submit", function(e) {
  e.preventDefault();

  const fname = document.getElementById("fname").value;
  const email = document.getElementById("email").value;
  const msg = document.getElementById("msg").value;

  const output = `
    <p><strong>Thanks, ${fname}!</strong></p>
    <p>We received your feedback.</p>
  `;

  const resultBox = document.getElementById("form-result");
  resultBox.innerHTML = output;
  resultBox.style.display = "block";

  document.getElementById("feedback").reset();
});
