const cafeList = document.querySelector("#cafe-list");

function display(response){
    let li = document.createElement("li");
    let name = document.createElement("span");
    let city = document.createElement("span");

    li.setAttribute("data-id" , response.id);
    name.textContent = response.data().name;
    city.textContent = response.data().city;


    li.appendChild(name);
    li.appendChild(city);
    cafeList.appendChild(li);

}

db.collection("cafes").get()
    .then(response => {
        console.log(response)
        response.docs.forEach(doc => {
                display(doc);
        }) 
    })
    