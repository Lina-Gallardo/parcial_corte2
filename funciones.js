
const historial = [];
let numero = ""
let operacion;
let resultado;
let contenido = document.getElementById("cLista");
// const history=()=>{
//   let oper = "";
//   for(var i=0; i<historial.length; i++){
//     oper +="<li>Operacion: "+historial[i].operacion +" = "+historial[i].resultado+"</li>";
//   }
//   contenido.innerHTML = oper;
// }
function ac(){
  numero="";
  limpiar();
  document.getElementById("txt").value = "";
}
function limpiar(){
  contenido.innerHTML = "";
  historial.length = 0;
}
function setNumber(valor,op){
  numero +=valor;
  if(op!==null){
    operacion = op;
  }
  valor = document.getElementById("txt").value
  document.getElementById("txt").value = numero;

}

function operaciones(operacion){
  datos = document.getElementById("txt").value;
  num= datos.split(/\+|\-|\/|\*/)
  numero=""
  if(resultado==null && num.length==2 && num[0]!=='' &&num[1]!==''){
    num1=parseFloat(num[0]);
    num2=parseFloat(num[1]);
    switch(operacion){
      case 0:
        resultado = num1 + num2;
        document.getElementById("txt").value = (resultado);
        break;
      case 1:
        resultado = num1 - num2;
        document.getElementById("txt").value = (resultado);
        break;
      case 2:
        resultado = num1 * num2;
        document.getElementById("txt").value = (resultado);
        break;
      case 3:
        resultado = num1 / num2;
        document.getElementById("txt").value = (resultado);
        break;
      default:
        document.getElementById("txt").value = ("Error");
    }
    historial.push({operacion: datos, resultado: resultado});
    contenido.innerHTML += "<li>Operacion: "+datos +" = "+resultado+"</li>"
    resultado =null;
  }
}
