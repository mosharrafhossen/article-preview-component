

const shareBtn = document.getElementById("shareBtn");
const sharePopup = document.getElementById("sharePopup");

shareBtn.addEventListener("click", () => {
  sharePopup.classList.toggle("show");
  shareBtn.classList.toggle("active");
});
