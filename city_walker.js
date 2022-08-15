// This helps to 
setTimeout(()=>{
    document.getElementById("map-section").style.backgroundImage = 'url("/img/googleMap.png")';
},3000)

/*
    HTML input tag
*/ 

function testInput(){// this function is to test the input tags
    let country = document.getElementById("country").value;
    let city = document.getElementById("city").value;
    let from_location = document.getElementById("from").value;
    let to_location = document.getElementById("to").value;

    if ( typeof country === "string" && typeof city === "string" && typeof from_location === "string" && typeof to_location === "string"){
        
        console.log(country +" "+ city +" "+ from_location.value +" "+ to_location);
    
}else{
        console.log("Please provide your destination")
    }
}



// testing the API 

testApi = async ()=>{
    let url = "https://restcountries.com/v3.1/all";
 
    let request = await fetch(url);
    if (request.status === 200){
        return request.json();
    }throw "Not found"
    // return request.json();
};

testApi().then(response => {
    // console.log(response);
    let result = response.filter(countryList =>{
        console.log(countryList.name.common)

        // if (countryList.name.common == "japan"){
        //     console.log(countryList.name.common)

        // }

    });

    console.log(result);
}).catch(error => console.log(error))



// function to toggle between location details and the find section
let viewLocationButton = document.getElementById("view-location");
let mapDetailsSection = document.getElementById("map-details-section");
let mapSection = document.getElementById("map-section");
let findSectionForm = document.getElementById("find-section-form");
mapDetailsSection.style.display === "none";

let toggleView = ()=>{

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

// validate the form to check if the input value is a string and not an number or empty string

// create a function to filter the Api for the country, city, and set the map location to the longitude and latitude for the country and if possible the user's location pointing to the destination  

// if the condition is true show the view location and call the function that shows the map 