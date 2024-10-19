function afficherEmail(nom, message, email) {
    let mailto = `mailto:jeanne.menager@centrale-med.fr?subject=Contact au Sujet de ton voyage avec Interrail de ${nom}&body=${message} %0D%0A Email pour répondre : ${email}`
    location.href = mailto
}

let form = document.querySelector("form")
form.addEventListener("submit", (event) => {
    event.preventDefault()

    let champNomPrenom = document.getElementById("nom")
    let NomPrenom = champNomPrenom.value

    let champMessage = document.getElementById("message")
    let Message = champMessage.value

    let champEmail = document.getElementById("email")
    let Email = champEmail.value

    afficherEmail(NomPrenom, Message, Email)
    champNomPrenom.value = ''
    champMessage.value = ''
    champEmail.value = ''
})