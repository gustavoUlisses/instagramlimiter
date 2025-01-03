function showPopupAndTriggerClose() {
    const popup = document.createElement("div");
    popup.className = "blocker-popup";
    popup.innerText = "Não estrague seu cérebro";
    document.body.appendChild(popup);
  
    setTimeout(() => {
      document.body.removeChild(popup);
      chrome.runtime.sendMessage({ action: "closeInstagramTabs" });
    }, 3000); // 3 seconds after popup appears
  }
  
  setTimeout(showPopupAndTriggerClose, 60000); // Show popup after 1 minute
  