const focusTypes = ["short-rest", "long-rest", "focus"];
const containerBannerTitle = document.querySelector(
  "[data-container-banner-title]"
);
const bannerImg = document.querySelector("[data-banner-img]");

function showBannerContent(title, img, time) {
  containerBannerTitle.innerHTML = title;
  bannerImg.src = img;
  pomodoroTime.textContent = time;
}

function modifyStyle(selectedFocus) {
  focusTypes.forEach((focus) => {
    root.classList.remove(focus);
  });

  root.classList.add(selectedFocus);
  document
    .getElementById(selectedFocus)
    .classList.add("button-availability-options--selected");
}

export { showBannerContent, modifyStyle };
