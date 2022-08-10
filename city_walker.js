// This helps to 
setTimeout(()=>{
    document.getElementById("map-section").style.backgroundImage = 'url("/img/googleMap.png")';
},3000)

// API Link  https://rapidapi.com/natkapral/api/countries-cities/

// alert("working")

testApi = async ()=>{
    let url = "https://restcountries.com/v3.1/all";
 
    let request = await fetch(url);
    if (request.status === 200){
        return request.json();
    }throw "Not found"
    // return request.json();
};

testApi().then(response => {
    console.log(response)
}).catch(error => console.log(error))