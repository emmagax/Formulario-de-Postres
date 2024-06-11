function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
      return false;
    return true;
  }

function phoneMask() { 
    var num = $(this).val().replace(/\D/g,''); 
    $(this).val(num.substring(0,1) + '(' + num.substring(1,4) + ')' + num.substring(4,7) + '-' + num.substring(7,11)); 
}
$('[type="tel"]').keyup(phoneMask);

function hideShowDiv(val) {
  
  if (val==2) {
    document.getElementById('show-me').style.display='block';
  }
  else {
    document.getElementById('show-me').style.display='none';
  }

  if (val==1) {
    document.getElementById('calle').style.display='block';
  }
  else {
    document.getElementById('calle').style.display='none';
  }

  if (val==3) {
    document.getElementById('contacto').style.display='block';
  }
  else {
    document.getElementById('contacto').style.display='none';
  }
}   
