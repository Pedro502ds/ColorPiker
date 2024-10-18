const salida = document.getElementById("salida");
const color = document.querySelector("#color");
const guardar = document.getElementById("boton");

const storage = localStorage.getItem("color") || "#ffffff";
const storage2 = localStorage.getItem("numero") || 0;


color.value = storage;
suma.textContent = storage2;
var total = Number(storage2);
console.log(storage);

const setcolor = () => {
  const value = color.value;
  salida.textContent = value;
  salida.style.background = value;
  salida.style.color = "#fff";
};

const saveColor = (value) => {
  localStorage.setItem("color", value);
};

const colorAdd = () => {
  total += 1;
  console.log(total);
  suma.textContent = total;
  localStorage.setItem("numero", total);
};

setcolor();

color.addEventListener("input", setcolor);
color.addEventListener("change", () => saveColor(color.value));
guardar.addEventListener("click", colorAdd);

function almacenarColores() {
  const value = color.value;
  let coloresGuardados = JSON.parse(localStorage.getItem("colores")) || [];

  coloresGuardados.push(value);
  localStorage.setItem("colores", JSON.stringify(coloresGuardados));
  mostrarColores();
  console.log("Color almacenado:", value);
}

function mostrarColores() {
  const coloresGuardados = JSON.parse(localStorage.getItem("colores")) || [];
  const coloresDiv = document.getElementById("colores");
  coloresDiv.innerHTML = '';
  coloresGuardados.forEach(color => {
    const colorBox = document.createElement("div");
    colorBox.style.background = color;
    colorBox.textContent = color;
    colorBox.classList.add("color-box");
    coloresDiv.appendChild(colorBox);
  });
  console.log("Colores mostrados:", coloresGuardados);
}

mostrarColores();


