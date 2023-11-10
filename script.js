const btnForm = document.querySelector(".btn-form")
const cpNome = document.querySelector("#cpNome")
const cpEmail = document.querySelector("#cpEmail")
const cpPassword = document.querySelector("#cpPassword")


function info() {
    alert(`INFO:\nVocê está acionando o botão de login \n\n\n${cpNome.value}, \n${cpEmail.value}, \n${cpPassword.value}`)
}

btnForm.addEventListener("click", info)