// content_scripts/amazon_music.js

// Listen for a message from the background script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.message === "collectAmazonPlaylistData") {
      const playlists = [];
  
      // Logic to collect playlist data from Amazon Music's webpage
      // You'll need to identify elements containing playlist information and extract data
  
      // For example:
      const playlistElements = document.querySelectorAll(".playlist-item");
      playlistElements.forEach(function(element) {
        const title = element.querySelector(".playlist-title").textContent;
        const url = element.querySelector("a").href;
  
        playlists.push({
          title: title,
          url: url
        });
      });
  
      // Send collected playlist data back to the background script
      chrome.runtime.sendMessage({ message: "amazonPlaylistData", playlists: playlists });
    }
  });
  