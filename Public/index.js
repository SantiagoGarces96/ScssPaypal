//Productos
const producto1 = document.querySelector("#producto1");
const producto2 = document.querySelector("#producto2");
const producto3 = document.querySelector("#producto3");
const producto4 = document.querySelector("#producto4");
const producto5 = document.querySelector("#producto5");
const producto6 = document.querySelector("#producto6");

//Precios
const precios = [310, 123.56, 120, 90, 35, 34.5];

//Evento por cada boton
producto1.addEventListener("click", () => {
  pagar(precios[0]);
});

producto2.addEventListener("click", () => {
  pagar(precios[1]);
});

producto3.addEventListener("click", () => {
  pagar(precios[2]);
});

producto4.addEventListener("click", () => {
  pagar(precios[3]);
});

producto4.addEventListener("click", () => {
  pagar(precios[4]);
});

producto5.addEventListener("click", () => {
  pagar(precios[5]);
});

producto6.addEventListener("click", () => {
  pagar(precios[6]);
});

//peticion
async function pagar(valor) {
  const response = await fetch(`/api/create-payment/${valor}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  console.log(data);
  if (data) {
    window.location.href = data.data.links[1].href;
  } else {
    window.location.href = data.data.links[0].href;
  }
}
