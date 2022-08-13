// This helps to 
setTimeout(()=>{
    document.getElementById("map-section").style.backgroundImage = 'url("/img/googleMap.png")';
},3000)

/*
    HTML input tag
*/ 
let country = document.getElementById("country").value;
let city = document.getElementById("city").value;
let from_location = document.getElementById("from").value;
let to_location = document.getElementById("to").value;

function testInput(){// this function is to test the input tags
    
    if(country === "" && city ==="" && from_location ===""&& to_location ===""){
        alert("Please provide your destination")
    }else{
    console.log(country +" "+ city +" "+ from_location +" "+ to_location);
    }
}



// testing the API 

// testApi = async ()=>{
//     let url = "https://restcountries.com/v3.1/all";
 
//     let request = await fetch(url);
//     if (request.status === 200){
//         return request.json();
//     }throw "Not found"
//     // return request.json();
// };

// testApi().then(response => {
//     console.log(response)
// }).catch(error => console.log(error))

// function to toggle between location details and the find section
let viewLocationButton = document.getElementById("view-location");
let mapDetailsSection = document.getElementById("map-details-section");
let mapSection = document.getElementById("map-section");
let findSectionForm = document.getElementById("find-section-form");
mapDetailsSection.style.display === "none";

let toggleView = ()=>{

        // console.log(viewLocationButton.name)
        if(mapDetailsSection.style.display === "none" ){
            findSectionForm.style.display = "none";
            // mapDetailsSection.classList.add("place-center");
            mapDetailsSection.style.display = "flex";
            mapSection.style.display = "flex";
            // viewLocationButton.name = false;
            console.log(true);
        }else{
            mapDetailsSection.style.display = "none";
            mapSection.style.display = "flex";
            findSectionForm.style.display = "flex";
            console.log(false);
        }
    

}

toggleView();

