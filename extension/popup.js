document.addEventListener("DOMContentLoaded", function () {
  chrome.storage.local.get(
    ["storeCurrentTabUrl", "storeUrls", "emailData"],
    function (result) {
      console.log("result", result);
      //get the domain name of the current tab
      var url = result.storeCurrentTabUrl;
      var domain = url.split("/")[2];
      console.log(domain);

      document.getElementById("currentTabUrl").innerHTML =
        result.storeCurrentTabUrl;
      const urlsList = document.getElementById("urls");
      if (result.storeUrls) {
        result.storeUrls.forEach((url) => {
          const li = document.createElement("li");
          li.innerHTML = url;
          urlsList.appendChild(li);
        });
      }
      // Establish WebSocket connection and send data
      const socket = new WebSocket("ws://127.0.0.1:8000/ws");

      socket.onopen = () => {
        console.log("WebSocket connection established");

        // Send the result object to the WebSocket server
        socket.send(JSON.stringify(result));
      };

      socket.onmessage = (event) => {
        console.log("Message from server:", event.data);
      };

      socket.onclose = () => {
        console.log("WebSocket connection closed");
      };

      socket.onerror = (error) => {
        console.error("WebSocket error:", error);
      };
    }
  );
});
