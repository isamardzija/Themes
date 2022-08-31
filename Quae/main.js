const toggleButton = document.getElementById("toggle-button");
const sidebar = document.getElementById("sidebar");
const website = document.getElementById("website");

toggleButton.addEventListener("click", () => {
  let mobilecheck = getComputedStyle(website).getPropertyValue("--mobilecheck");

  // Big screen, sidebar showing
  if (mobilecheck == "big" && getComputedStyle(sidebar).display == "flex") {
    sidebar.style.display = "none";
    website.style.gridTemplateColumns = "1fr";
    // Big screen, sidebar not showing
  } else if (
    mobilecheck == "big" &&
    getComputedStyle(sidebar).display == "none"
  ) {
    sidebar.style.display = "flex";
    website.style.gridTemplateColumns = "3fr 1fr";
  }
  // Small screen, sidebar not showing
  else if (
    mobilecheck == "small" &&
    getComputedStyle(sidebar).display == "none"
  ) {
    sidebar.style.display = "flex";
    sidebar.style.gridRow = "1";
  }
  // Small screen, sidebar showing
  else if (
    mobilecheck == "small" &&
    getComputedStyle(sidebar).display == "flex"
  ) {
    sidebar.style.display = "none";
  }
});
