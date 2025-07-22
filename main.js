// PREENTREGA #1

const iphones = [
  { modelo: "Iphone 14", valor: 650 },
  { modelo: "Iphone 15", valor: 850 },
  { modelo: "Iphone 16", valor: 1000 },
];

function verProducto() {
  let = listaProductos = "Estos son nuestros productos\n";
  for (let i = 0; i < iphones.length; i++) {
    const iphoneActual = iphones[i];

    listaProductos += `Modelo: ${iphoneActual.modelo}\n`;
    listaProductos += `---\n`;
  }
  alert(listaProductos);
}

function menu() {
  alert("Bienvenido a apple store");
  let bandera = true;
  while (bandera) {
    opciones = Number(
      prompt(
        "Seleccione una opcion: \n1)Ver nuestros productos \n2)Comprar producto "
      )
    );

    switch (opciones) {
      case 1:
        verProducto();

        break;
      case 2:
        comprar();
        break;

      default:
        alert("No tenemos esta opcion");
        break;
    }
    let quieroSalir = confirm("Usted quiere irse ?");
    if (quieroSalir) {
      bandera = false;
    }
  }
}

function comprar() {
  let Iphone14 = 650;
  let Iphone15 = 850;
  let Iphone16 = 1000;

  const arrayComprar = [];
  for (let i = 0; i < iphones.length; i++) {
    arrayComprar.push(iphones[i].modelo);
  }
  IphoneAComprar = prompt("Ingrese el iphone que desea comprar");

  let index = arrayComprar.indexOf(IphoneAComprar);
  if (index == -1) {
    alert("Este Iphone no lo tenemos ");
  } else {
    const valores = [];
    alert("El iphone que ud quiere es " + iphones[index].modelo);
    for (let e = 0; e < arrayComprar.length; e++) {
      valores.push(arrayComprar[e].modelo);
    }

    if (index == 0) {
      alert(`El importe es ${Iphone14}`);
    } else if (index == 1) {
      alert(`El importe es ${Iphone15}`);
    } else if (index == 2) {
      alert(`El importe es ${Iphone16}`);
    }
  }
}

menu();
