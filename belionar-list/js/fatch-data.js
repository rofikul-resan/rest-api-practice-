const spinier = (on)=>{
    const spinier = document.getElementById("spinier");
    if(on){ spinier.classList.remove("hidden")}else{spinier.classList.add("hidden")}
}

function topTenRank(){
    // spinier(true)
    fetch("https://forbes400.onrender.com/api/forbes400?limit=10")
    .then(res => res.json())
    .then(data => displayInTable(data))
    
}