
const historial = [];
let numero = ""
let operacion;
let resultado;
let contenido = document.getElementById("cLista");

function ac(){
  numero="";
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
  if((/\.{2}|\+{2}|\-{2}|\/{2}|\*{2}/.test(numero))){
    numero = numero.slice(0, -1)
  }else{
    document.getElementById("txt").value = numero;
  }
}

function operaciones(operacion){
  datos = document.getElementById("txt").value;
  num= datos.split(/\+|\-|\/|\*/)
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
        num2!=0?resultado = num1 / num2 : resultado = "No se puede dividir por 0"
        document.getElementById("txt").value = (resultado);
        break;
      default:
        document.getElementById("txt").value = ("Error");
    }
    historial.push({operacion: datos, resultado: resultado});
    numero=resultado;
    contenido.innerHTML += "<li>Operacion: "+datos +" = "+resultado+"</li>"
    resultado =null;
  }
}
