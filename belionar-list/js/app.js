function displayInTable(data){
    console.log("c");
    const tbody = document.getElementById("tbody");
    data.forEach(element => {
        const {person, countryOfCitizenship, rank, industries, finalWorth} = element
        const tr = document.createElement("tr");
        tr.innerHTML=`
        <td> ${person.name}</td>
        <td> ${countryOfCitizenship}</td>
        <td> ${industries}</td>
        <td> ${rank}</td>
        <td>$ ${finalWorth}</td>`
        tbody.appendChild(tr)
        console.log(element);
    });
}