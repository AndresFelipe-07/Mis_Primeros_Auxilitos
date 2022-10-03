document.oncontextmenu = function(){return false}
/*$(function(){
    $(document).bind("contextmenu",function(e){
        return false;
    });
});*/

/*
export default function fetchImagen(){
  const url = 
        encodeURI("https://img.freepik.com/vector-gratis/fondo-azul-clasico-estilo-abstracto_23-2148427983.jpg?size=626&ext=jpg");
    const img = new Image();
    img.download = "";

    img.onload = ()=>{
        img.setAttribute("href", img.src);
        URL.revokeObjectURL(img.src);
        document.body.appendChild(img);
    }

    fetch(url, { method: 'GET'})
    .then(res => res.blob())
    .then(blob =>{
        img.src = URL.createObjectURL(blob);
    });
}

//Y no queremos que se vea en nuestro archivo principal llamado: ./Alguna ruta.js

import fetchImagen from "./javaScript.js";

window.onload = ()=>{
  fetchImagen();
}
*/
/*
  El resultado es que en view:source no vas a poder ver el contenido de ese import
  pero vas a poder seguir usando la funcion normalmente desde JS.
*/