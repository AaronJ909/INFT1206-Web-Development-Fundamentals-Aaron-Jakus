const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ["pic1", "pic2", "pic3", "pic4", "pic 5"];

/* Declaring the alternative text for each image file */
const alternativeText = {
    "pic1.jpg": "pic1 alt text",
    "pic2.jpg": "pic2 alt text",
    "pic3.jpg": "pic3 alt text",
    "pic4.jpg": "pic4 alt text",
    "pic5.jpg": "pic5 alt text",
};

/* Looping through images */

const newImage = document.createElement('img');
newImage.setAttribute('src', `images/${image}`);
newImage.setAttribute('alt', alternativeText[image]);
thumbBar.appendChild(newImage);

// below was reseached and tested using the following resources:
//https://www.w3schools.com/js/js_htmldom_eventlistener.asp
//https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
newImage.addEventListener("click", () => {
    const displayedImage = document.querySelector(".displayed-image");

    displayedImage.setAttribute("src", newImage.getAttribute("src"));

    displayedImage.setAttribute("alt", newImage.getAttribute("alt"));
});

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    const overlay = document.querySelector('.overlay');
    const isDark = btn.getAttribute('class') === 'dark';
    
    btn.setAttribute('class', isDark ? 'light' : 'dark');
    btn.textContent = isDark ? 'Lighten' : 'Darken';
    overlay.style.backgroundColor = isDark ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0)';
  });
  