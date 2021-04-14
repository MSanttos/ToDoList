var logado = false;

if (localStorage.getItem("acesso") == "true") {
    logado = true;
    console.log('entrou');
};

if (logado != true) {
    alert("Você não está LOGADO!");
    window.location.href = "login.html";
};