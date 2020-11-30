
    function cuadrado() {
    let num = document.getElementById("pantalla");
    num.value = num.value * num.value;
  }
 function mod() {
    let num = document.getElementById("pantalla");
    if(num.value>0){
      num.value=num.value;
    }
    else {
      num.value=-num.value;
    }
  }
function fact() {
    let num = document.getElementById("pantalla");
    var total=1;
    for (var i = 1; i <= num.value; i++){
        total = total*i;
    }
    num.value=total;
}
function inv(){
  let num = document.getElementById( "pantalla" );
  num.value = 1 / num.value;
}
  function raiz(){
  let num = document.getElementById( "pantalla" );
  num.value = Math.sqrt(num.value );
}
  function PI(){
  let num = document.getElementById( "pantalla" );
  Math.PI;
}