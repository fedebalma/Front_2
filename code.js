/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */


let datosPersona = {
  nombre: "",
  edad: "",
  ciudad: "",
  interesPorJs: "",
};

const listado = [
  {
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector("#cambiar-tema");

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);


/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */



function obtenerDatosDelUsuario() {


  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */

  let nombreUsuario = "";
  do {
    nombreUsuario = prompt("Ingrese su nombre");
  } while (
    nombreUsuario === null ||
    nombreUsuario.length < 3 ||
    !isNaN(nombreUsuario)
  );
  console.log(nombreUsuario);

  let añoNac = "";
  let añoActual = 2023;
  do {
    añoNac = prompt("Ingrese año de nacimiento");
  } while (añoNac === null || añoNac.length < 3);
  let edadUsuario = añoActual - añoNac;
  console.log(edadUsuario);
  console.log(añoNac);

  let ciudadUsuario = "";
  do {
    ciudadUsuario = prompt("Ingrese una ciudad");
  } while (
    ciudadUsuario === null ||
    nombre.length < 3 ||
    !isNaN(ciudadUsuario)
  );
  console.log(ciudadUsuario);

  let js = confirm("Te interesa JavaScript?");
  let guardarJs = js ? "Si" : "No";
  console.log(guardarJs);

  datosPersona.nombre = nombreUsuario;
  datosPersona.edad = edadUsuario; 
  datosPersona.ciudad = ciudadUsuario;
  datosPersona.interesPorJs = guardarJs;
  console.log(datosPersona);
  //
}

function renderizarDatosUsuario() {
  
  
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  
  
  obtenerDatosDelUsuario();
  
  
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  
  
  let name = document.querySelector("#nombre");
  const inyectarNombre = `
  <span id= "nombre">${datosPersona.nombre}</span>
  `;
  name.innerHTML += inyectarNombre;
  console.log(name);

  let age = document.querySelector("#edad");
  const inyectarEdad = `
  <span id="edad">${datosPersona.edad}</span> 
  `;
  age.innerHTML += inyectarEdad;
  console.log(age);

  let city = document.querySelector("#ciudad");
  const inyectarCiudad = `
  <span id="ciudad">${datosPersona.ciudad}</span>
  `;
  city.innerHTML += inyectarCiudad;
  console.log(city);

  let loveJs = document.querySelector("#javascript");
  const inyectarJs = `
  <span id="javascript">${datosPersona.interesPorJs}</span>
  `;
  loveJs.innerHTML += inyectarJs;
  console.log(loveJs);
}

function recorrerListadoYRenderizarTarjetas() {


  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */


  let contenedor = document.getElementById('fila');
  
    
    if (contenedor.hasChildNodes()) {
      return;
    }
  
    
    listado.forEach(materias => {
      
     
      let caja = document.createElement('div');
      caja.classList.add('caja');
  
      let imagen = document.createElement('img');
      imagen.src = materias.imgUrl;
      imagen.alt = materias.lenguajes;
  
      let parrafoLenguajes = document.createElement('p');
      parrafoLenguajes.classList.add('lenguajes');
      let textoLenguajes = document.createTextNode(materias.lenguajes);
      parrafoLenguajes.appendChild(textoLenguajes);
  
      let parrafoBimestre = document.createElement('p');
      parrafoBimestre.classList.add('bimestre');
      let textoBimestre = document.createTextNode(materias.bimestre);
      parrafoBimestre.appendChild(textoBimestre);
  
     
      caja.appendChild(imagen);
      caja.appendChild(parrafoLenguajes);
      caja.appendChild(parrafoBimestre);
      contenedor.appendChild(caja);
    });
}



function alternarColorTema() {


  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */


  let modoNocturno = document.querySelector("#sitio");
  modoNocturno.classList.toggle("dark");
}
alternarColorTema();

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */


function eliminarClase() {
  let paragraph = document.querySelector("#sobre-mi");
  window.addEventListener("keypress", function (e) {
    if (e.key === "f") {
      paragraph.classList.remove("oculto");
      console.log(e);
    }
  });
}

eliminarClase();