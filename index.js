// Add your code here

const { Body } = require("node-fetch");

function submitData (){
    fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type":"application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            name:"Steve",
            email:"steve@steve.com"
        })
    })
    .then(function(response){
        return response.json();
    })
    .then(function(object){
        document.body.innerHTML = object["id"]
    })
    .catch(function(error){
         document.body.innerHTML = error.message
    })
}
 
 submitData()