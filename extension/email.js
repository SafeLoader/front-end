function getEmailInfo() {
  // Extract the email subject
  const emailBodyDiv = document.querySelector("div.a3s");

  // Check if the email body &lt;div&gt; exists
  if (emailBodyDiv) {
    // Extract the text content of the email body &lt;div&gt;
    const emailBody = emailBodyDiv.textContent.trim();

    // Log the email body to the console
    console.log("Email Body:", emailBody);
  } else {
    console.error("Email body &lt;div&gt; not found");
  }

  // Select the element containing the email subject
  const subjectElement = document.querySelector("h2.hP");

  // Check if the subject element exists
  if (subjectElement) {
    // Extract the subject text
    const subject = subjectElement.textContent.trim();

    // Log the subject to the console
    console.log("Subject:", subject);
  } else {
    console.error("Subject element not found");
  }

  //store the email and subject in an object
  var emailData = { email, subject, body };
  return emailData;
}

// Extract
