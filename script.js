const shareBtn = document.getElementById("shareBtn");
const mobileShare = document.getElementById("mobileShare");
const sharePopup = document.getElementById("sharePopup");

function toggleShare() {
  sharePopup.classList.toggle("show");
  shareBtn.classList.toggle("active");
}

shareBtn.addEventListener("click", toggleShare);
mobileShare.addEventListener("click", toggleShare);
