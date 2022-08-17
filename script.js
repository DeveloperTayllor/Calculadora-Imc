function calcularImc() {

  let peso = document.getElementById('peso').value;
  let altura = document.getElementById('altura').value;
  
  let resultado = peso / ((altura / 100) ** 2).toFixed(2);
  
  let text =""
  if(resultado < 18.5) {
    text = 'Você está magro'
  } else if (resultado < 24.9) {
    text = 'Normal';
  } else if(resultado < 29.9) {
    text ='Sobrepeso'
  } else if(resultado < 39.9) {
    text = 'Obesidade';
  } else if(resultado > 39.9) {
    text = 'Obesidade Mórbida'
  }
  document.getElementById('resultado').innerText = text
}

