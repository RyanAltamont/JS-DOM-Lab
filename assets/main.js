// Let's grab the hero div
const hero = document.querySelector(`.hero`);

// Let's modify the background-image property
hero.style.backgroundImage = `url('./assets/dom.jpg')`;

const name = document.querySelector (`.hero h1 span`);
name.innerHTML = `Ryan Vance`;

const greeting = document.querySelector (`.hero h3`);
greeting.innerHTML = `Welcome to the best profile ever!`;

const profilePic = document.querySelector(`.profile-img`);
profilePic.src = `./assets/RR.jpg`;

// my favorite things array

const favorites = [{
  img: `./assets/sports.jpg`,
  title: `Sports`,
  desc: `I love spending time with my friends while playing sports. Sports are competitive and keep you engaged. They are also good for helping build relationships and teamwork for the future.`

},

{

  img: `./assets/fam.jpg`,
  title: `Spending Time With Friends and Family`,
  desc: `Spending time with friends and family has always been important to me. It's a great time to hang out, relax, and just enjoy life to it's fullest.`

},

{

  img: `./assets/piano.jpg`,
  title: `Piano`,
  desc: `Playing the piano has always been important to me. It's always been a time where i can escape from the real world, and just be in a world of my own.`

}
]


//grab the gallery
const gallery = document.querySelector(`.info-gallery`);

//Map over the favorites array and generate an info-item for each
//then place them in the gallery
favorites.map((favorites)=>{
  //create a new element
  let newEl = document.createElement(`div`);
  //Add the correct class
  newEl.classList.add(`info-item`);
  //Let's generate the HTML for the items
  newEl.innerHTML = `
  <img src="${favorites.img}" alt="${favorites.title}" class="item-img"/>
    <h4>${favorites.title}</h4>
    <p>${favorites.desc}</p>
    `



  //We need to add it to the DOM
  gallery.appendChild(newEl);

})
