console.log("Content script running");
// Function to get the current tab URL and store the URLs of the links on the current tab
async function storeData() {
  // Get the current tab URL
  const currentTabUrl = window.location.href;
  // Select the &lt;div&gt; element with class "a3s" containing the email body

  //in case of email
  // if (currentTabUrl.includes("mail.google.com")) {
  //   const email = document.querySelector(".gD").innerText;
  //   const subject = document.querySelector("h2.hP").innerText;
  //   const body = document.querySelector(".a3s").innerText;
  //   var emailData = { email, subject, body };
  // }
  const emailData = getBody();
  // Get the URLs of the links on the current tab
  const urls = Array.from(document.querySelectorAll("a")).map((a) => a.href);

  // Send the data
  chrome.runtime.sendMessage(
    {
      storeCurrentTabUrl: currentTabUrl,
      storeUrls: urls,
      emailData: emailData,
    },
    (response) => {
      console.log(response.status);
    }
  );
}
function getBody() {
  const emailBodyDiv = document.querySelector("div.a3s");

  // Check if the email body &lt;div&gt; exists
  if (emailBodyDiv) {
    // Extract the text content of the email body &lt;div&gt;
    const emailBody = emailBodyDiv.textContent.trim();

    // Log the email body to the console
    return emailBody;
  } else {
    console.error("Email body &lt;div&gt; not found");
  }
}
// Call the function
storeData();
