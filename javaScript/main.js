"use strict";
const box = document.querySelector(".box");
const review = document.querySelector("#mask-outer");
const can = document.getElementById("mask");
let idList=[];

document.addEventListener("scroll", (e) => {
  if (scrollY > 200) {
    document.querySelector("nav").classList.add("fixed-top", "m-0", "p-0");
  } else {
    document.querySelector("nav").classList.remove("fixed-top", "m-0", "p-0");
  }
});
async function getGames(value) {
  let url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${value}`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "f2ada62d6emsh88abcbc3f2595c7p14f966jsn922203a23f62",
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return await result;
    console.log(result)
  } catch (error) {
    console.error(error);
  }
}
class Category {
  constructor(name) {
    this.name = name;
  }
  async print  (p) {
	const game= await getGames(this.name)
	display(game)
	
  }

   
}

const mmorpg = document.getElementById("mmorpg");
const superhero = document.getElementById("superhero");
const shooter = document.getElementById("shooter");
const sailing = document.getElementById("sailing");
const permadeath = document.getElementById("permadeath");
const pixel = document.getElementById("pixel");

mmorpg.addEventListener("click", (e) => {
  mmorpg.classList.add("active");
  superhero.classList.remove("active");
  shooter.classList.remove("active");

  const c = new Category("mmorpg");
  c.print();
});
shooter.addEventListener("click", (e) => {
  mmorpg.classList.remove("active");
  superhero.classList.remove("active");
  shooter.classList.add("active");

  const x1 = new Category("shooter");
  x1.print();
});

sailing.addEventListener("click", async (e) => {
  mmorpg.classList.remove("active");
  pixel.classList.remove("active");
  permadeath.classList.remove("active");
  superhero.classList.remove("active");
  sailing.classList.add("active");
  shooter.classList.remove("active");
  const y1 = new Category("sailing");
  y1.print()
});
 permadeath.addEventListener("click", async (e) => {
  mmorpg.classList.remove("active");
  sailing.classList.remove("active");
  pixel.classList.remove("active");
  superhero.classList.remove("active");
   permadeath.classList.add("active");
  shooter.classList.remove("active");
  const y1 = new Category("permadeath");
  y1.print()
});
pixel.addEventListener("click", async (e) => {
  mmorpg.classList.remove("active");
  sailing.classList.remove("active");
  permadeath.classList.remove("active");
  superhero.classList.remove("active");
  pixel.classList.add("active");
  shooter.classList.remove("active");
  const y1 = new Category("pixel");
  y1.print()
});
superhero.addEventListener("click", async (e) => {
  mmorpg.classList.remove("active");
  superhero.classList.add("active");
  shooter.classList.remove("active");

  const y1 = new Category("superhero");
  y1.print()
});
//one
const btnClose = document.getElementById("btnClose");
const cover = document.getElementById("mask-outer");
const loader = document.getElementById("preloader");

window.addEventListener("load", function () {
  loader.classList.add("d-none");
});


function display(data) {
   box.innerHTML=""
   
    const row = document.createElement("div");
    row.classList.add("row", "g-3");
    for (const content of data) {
      const col = document.createElement("div");
      col.classList.add("col-lg-3", "col-md-6");
      //card
      const card = document.createElement("div");
      card.classList.add(
        "maincolor",
        "card",
        "rounded-4",
        "p-2",
        "border",
        "border-2",
        "border-dark",
        "cardAction"
      );
      const img = document.createElement("img");

      img.classList.add("rounded-top", "card-img-top");

      img.src = content.thumbnail;
      col.appendChild(card);
      card.appendChild(img);
      //body
      const cardBody = document.createElement("div");
      cardBody.className = "card-body";
      cardBody.className = "p-2";
      const cardTitle = document.createElement("h3");
      cardTitle.classList.add("card-title", "h6");
      const title = document.createTextNode(content.title);
      cardTitle.appendChild(title);
      const c = document.createElement("span");
      let x = document.createTextNode("free");
      c.appendChild(x);
      c.classList.add("badge", "text-bg-primary", "float-end");
      cardBody.appendChild(c);

      const cardText = document.createElement("p");
      cardText.classList.add("card-text", "text-center", "small", "opacity-50");
      let t = content.short_description;
      const text = document.createTextNode(t.split("").splice(0, 60).join(""));
      cardText.appendChild(text);
      card.appendChild(cardBody);
      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardText);
      //footer
      const cardFooter = document.createElement("div");
      cardFooter.classList.add(
        "card-footer",
        "border-top",
        "border-dark",
        "border-2",
        "bg-transparent",
        "py-1"
      );
      const cardBadge1 = document.createElement("span");
      cardBadge1.classList.add(
        "badge",
        "maincolor",
        "border",
        "border-2",
        "border-dark"
      );
      const badge1 = document.createTextNode(content.genre);
      cardBadge1.appendChild(badge1);
      const cardBadge2 = document.createElement("span");
      cardBadge2.classList.add(
        "badge",
        "maincolor",
        "border",
        "border-2",
        "border-dark",
        "float-end"
      );
      const badge2 = document.createTextNode(content.platform);
      cardBadge2.appendChild(badge2);

      cardFooter.appendChild(cardBadge1);
      cardFooter.appendChild(cardBadge2);
      card.appendChild(cardFooter);
	 
      //
   idList.push(content.id)
      row.appendChild(col);
    }
    box.appendChild(row);
    const cardList=document.querySelectorAll(".card")
    
    
 
  for (let i = 0; i < cardList.length; i++) {
    cardList[i].addEventListener('click',function (e) {
      review.classList.remove("d-none")
      console.log(idList[i]);
      const nour = new game(idList[i]);
      nour.postReview()
      
    });
    
  }


	
  }
  
   document.addEventListener("DOMContentLoaded",function () {
	mmorpg.classList.add("active");
  superhero.classList.remove("active");
  shooter.classList.remove("active");

  const c = new Category("mmorpg");
  c.print();

   })

   window.addEventListener("load", function () {
  loader.classList.add("d-none");
});
class game{
  constructor(id) {
    this.id=id
  }
  async postReview(){
    let info= await getReview(this.id)
    printReview(info)
  }
}
  async function getReview(id){
  const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'f2ada62d6emsh88abcbc3f2595c7p14f966jsn922203a23f62',
		'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
  return  result

} catch (error) {
	console.error(error);
}

  }
 
  function printReview(data) {
    can.innerHTML=`
  

        <div class="row g-4" id="detailsContent">
      <div class="col-md-4">
      <img src="${data.thumbnail}" class="w-100" alt="image details">
   </div>
   <div class="col-md-8">
      <h3>Title: Throne And Liberty</h3>
      <p>Category: <span class="badge text-bg-info"> ${data.genre}</span> </p>
      <p>Platform: <span class="badge text-bg-info"> ${data.platform}</span> </p>
      <p>Status: <span class="badge text-bg-info">${data.status}</span> </p>
      <p class="small">${data.description}</p>

      <a class="btn btn-outline-warning" target="_blank" href="${data.freetogame_profile_url}">Show Game</a>
   </div>
      
      </div>
    `
    

    
  }
 btnClose.addEventListener("click",()=>{
 document.getElementById('mask-outer').classList.add('d-none')
 })


 sailing.addEventListener('load',()=>{
  loader.classList.add("d-none");
  console.log('hello')
 })
  
