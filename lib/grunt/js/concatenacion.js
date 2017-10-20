
function multiplicarDos(a, b) {
  return a * b;
}


function multiplicarTres(a, b, c) {
  return a * b * c;
}

function sumaDos(a, b) {
  return a + b;
}


function sumaTres(a, b, c) {
  return a + b + c;
}


function ExpresionRegularEmail(mail)
{
    var bool = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail);
    alert(bool);
}
