const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const imgArray = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"]

/* Declaring the alternative text for each image file */

const altArray = ["Close up of human eye", "Beige seashell", "Purple and white flowers", "Egyptian flowers", "Brown and yellow butterfly"]

/* Looping through images */

for (let img = 0; img < imgArray.length; img++) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', imgArray[img]);
  newImage.setAttribute('alt', altArray[img]);
  thumbBar.appendChild(newImage);
  newImage.addEventListener("click", e => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
}
/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", () => {
  if (btn.getAttribute("class") == "dark") {
    btn.setAttribute("class", "light");
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)";

  }
  else {
    btn.setAttribute("class", "dark");
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
  }
}); 
