// content_scripts/youtube.js

// Listen for a message from the background script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.message === "searchAndAddVideo") {
      const trackTitle = request.trackTitle;
  
      // Search for videos on YouTube using the track title
      // Implement logic to search for videos and select the most relevant one
      const selectedVideoTitle = "Selected Video Title"; // Replace with actual selected video title
  
      // Send back the selected video title to the background script
      chrome.runtime.sendMessage({ message: "videoSelected", selectedVideoTitle: selectedVideoTitle });
    }
  });
  