const cafeList = document.querySelector("#cafe-list");
const form = document.querySelector("#add-cafe-form");


//Displaying The Datas
function display(response){
    let li = document.createElement("li");
    let name = document.createElement("span");
    let city = document.createElement("span");
    let cross = document.createElement("div");


    li.setAttribute("data-id" , response.id);
    name.textContent = response.data().name;
    city.textContent = response.data().city;
    cross.textContent = "x";

    li.appendChild(name);
    li.appendChild(city);
    li.appendChild(cross);
    cafeList.appendChild(li);


    //Deleting Data
    cross.addEventListener("click" , (e) => {
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute("data-id");
        db.collection("cafes").doc(id).delete();
    } )

}

//Getting Data
db.collection("cafes").get()
    .then(response => {
        console.log(response.docs)
        response.docs.forEach(doc => {
                display(doc);
        }) 
    })
    


//Saving Data
form.addEventListener("submit" , (e) => {
    e.preventDefault();
    db.collection("cafes").add({
        name : form.name.value,
        city : form.city.value
    })
    form.name.value = "";
    form.city.value = "";
})