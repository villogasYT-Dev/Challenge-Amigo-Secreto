// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
var amigos = [];

function agregarAmigo() {
  agregar();
  mostrarAmigos();
}

function agregar() {
  const nombre = document.getElementById("amigo").value;
  document.getElementById("amigo").value = "";

  //condicional
  if (nombre) {
    amigos.push(nombre);
    return amigos;
  } else {
    alert("Ingrese un nombre valido");
    return null;
  }
}

function mostrarAmigos() {
  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    console.log(`Amigo ${i + 1}: ${amigos[i]}`);
    const lista = document.createElement("li");
    lista.textContent = `Amigo ${i + 1}: ${amigos[i]}`;
    listaAmigos.appendChild(lista);
  }
}

function sortearAmigo() {
  const sortear = Math.floor(Math.random() * amigos.length);

  const amigoSecreto = document.getElementById("resultado");
  amigoSecreto.textContent = `Los amigos secretos son: ${amigos[sortear]} y ${amigos[sortear === amigos.length - 1 ? 0 : sortear + 1]}`;

  return amigoSecreto;
}
