let tblCountries = document.getElementById("tblCountries");

let tableBody = `<tr >
<th class="table-dark">Name</th>
<th class="table-dark">Flag</th>
</tr>`



fetch("https://restcountries.com/v3.1/all").then((res) => res.json())

    .then(data => {
        data.forEach(element => {
            tableBody += `<tr><td class="table-primary">${element.name.common}</td>
    <td class="table-warning">${element.flag}</td></tr>`

console.log(element.name.common);
        });

        tblCountries.innerHTML=tableBody;
    });




    