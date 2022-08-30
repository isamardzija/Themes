let toggleButton = document.querySelector("#toggle-button");
let sidebar = document.querySelector("#sidebar");
let pageBody = document.getElementById("page-body");

toggleButton.addEventListener("click", () => {
  // if the viewport is at least tablet-sized
  if (window.innerWidth > 800) {
    if (!sidebar.classList.contains("hide")) {
      // If the sidebar is showing
      sidebar.style.display = "none";
      sidebar.classList.add("hide");
      pageBody.style.gridTemplateColumns = "1fr";
    } else {
      sidebar.style.display = "grid";
      sidebar.classList.remove("hide");
      pageBody.style.gridTemplateColumns = "3fr 1fr";
    }
  }
  // if the viewport is mobile

  if (window.innerWidth <= 800) {
    if (sidebar.classList.contains("hide")) {
      sidebar.classList.remove("hide");
      sidebar.style.display = "grid";
      sidebar.style.position = "fixed";
      sidebar.style.top = "3rem";
      sidebar.style.right = "0";
      sidebar.style.width = "100vw";
    } else {
      sidebar.classList.add("hide");
      sidebar.style.display = "none";
    }
  }
});
