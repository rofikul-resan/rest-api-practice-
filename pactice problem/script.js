// api 1 ui display 

function api1UI(){
    const {result}= person;
    const cardContenter = document.getElementById("cardContenter");
result.forEach(singlePerson => {
    const card = document.createElement("div");
    card.classList.add("col-sm-6");
    card.innerHTML= `
    <div class = "card shadow-lg">
    <div class="card-header">
        Person name : ${singlePerson.name.common}
        </div>
        <div class="card-body">
            <p class="card-title">age : ${singlePerson.age} </p>
            <p class="card-text">Street : ${singlePerson.address.street}</p>
        </div>
    </div>
    `
    cardContenter.appendChild(card);
})
console.log(person);
}
api1UI()