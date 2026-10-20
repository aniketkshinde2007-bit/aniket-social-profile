const shareButton = document.getElementById("shareButton");
const message = document.getElementById("message");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

shareButton.addEventListener("click", async () => {
  const pageUrl = window.location.href;

  try {
    if (navigator.share) {
      await navigator.share({
        title: "Aniket Shinde | Connect With Me",
        text: "Connect with me on Instagram, Snapchat and LinkedIn.",
        url: pageUrl
      });
      message.textContent = "Share window opened.";
    } else {
      await navigator.clipboard.writeText(pageUrl);
      message.textContent = "Website link copied!";
    }
  } catch (error) {
    if (error.name !== "AbortError") {
      message.textContent =
        "Please copy the website URL from your browser.";
    }
  }
});
