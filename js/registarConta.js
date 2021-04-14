var name, password;

// if (typeof(Storage) != "undefined") {
//     console.log("você está emregistrar conta")

// } else {
//     alert("Não cadastrado")
// }

function criarConta() {
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;

    localStorage.setItem("name", name);
    localStorage.setItem("password", password);

    alert("Cadastro realizado com sucesso!");

    window.location.href = "login.html";

}