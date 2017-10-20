function ExpresionRegularEmail(mail){
  var bool=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail);
  alert(bool);
}
