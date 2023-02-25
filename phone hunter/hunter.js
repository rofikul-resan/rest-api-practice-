const showMoreBtn = document.getElementById("show-more-btn");
let apiJson = '';
function foundPhone(e){
    const urlKey = e.target.previousElementSibling.value;
    fetch(`https://openapi.programming-hero.com/api/phones?search=${urlKey}`)
    .then(res => res.json())
    .then(data => lodeCard(data.data))
}
function firstView(urlKey){
    fetch(`https://openapi.programming-hero.com/api/phones?search=${urlKey}`)
    .then(res => res.json())
    .then(data => lodeCard(data.data))
}
firstView("apple")

// display card 
const displayCard= (cardArr)=>{
    const cardContener = document.getElementById("card-contener");
    cardContener.innerHTML= "";
        cardArr.forEach(produce => {
        const card = document.createElement("div");
        card.innerHTML=`<div class="card card-side bg-base-100 shadow-xl h-full">
        <figure><img class="ml-5" src="${produce.image}" alt="Movie"/></figure>
        <div class="card-body">
          <h2 class="card-title">${produce.phone_name}</h2>
          <p>Click the button to view specification.</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Specification</button>
          </div>
        </div>
      </div>`
      cardContener.appendChild(card)
    });
}
const lodeCard = apiData => {
    apiJson = apiData
    if(apiData.length > 9){
        const ninePhone = apiData.slice(0,12);
        displayCard(ninePhone);
    showMoreBtn.classList.remove("hidden");
    }else{
        displayCard(apiData)
    }
}

showMoreBtn.addEventListener("click", ()=>{
    displayCard(apiJson);
    showMoreBtn.classList.add("hidden");
})