fetch(
  "https://cors-anywhere.herokuapp.com/https://api.unsplash.com/photos/?client_id=UR28OkuLkImEFLT8IXOUqibS2_pNK67T04PGeycyUnw"
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data[0].urls);
    let array = [];
    let credits = [];
    data.forEach((e) => {
      array.push(e.urls.regular);
      credits.push(e.user.instagram_username);
    });
    array.forEach((e, i) => {
      var div = document.createElement("div");
      div.classList.add("photo");
      div.style.backgroundImage = `url('${e}')`;
      var p = document.createElement("a");
      p.setAttribute("href", `https://instagram.com/${credits[i]}`);
      p.innerText = `${credits[i]}`;
      p.classList.add("credits-text");
      document.querySelector(".images").appendChild(div);
      div.appendChild(p);
    });
    allphotos = document.querySelectorAll(".photo");
    allphotos.forEach((photo, photoindex) => {
      photo.addEventListener("mouseover", () => {
        photo.lastChild.classList.add("show-credits");
      });
      photo.addEventListener("mouseout", () => {
        photo.lastChild.classList.remove("show-credits");
      });
      photo.addEventListener("click", () => {
        console.log(array[photoindex]);
        window.open(array[photoindex], "_blank");
      });
    });
  });
