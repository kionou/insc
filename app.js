var nom = document.getElementById("nom");
var prenom = document.getElementById("prenom");
var email = document.getElementById("email");
var password= document.getElementById("password");
console.log("ffhffhhhg");

var button = document.querySelector('bttn');
console.log("button")
button.addEventListener("click", e=>{
    let user={
        nom: 'nom.valeur',
        prenom:'prenom.valeur',
        email: 'email.valeur',
        password:'password.valeur'
    };
    localStorage.setItem("user", user)
})

