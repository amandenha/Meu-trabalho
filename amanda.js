function equaçaoDoSegundoGrau() {
  var a = parseInt(document.getElementById('a').value)
  var b = parseInt(document.getElementById('b').value)
  var c = parseInt(document.getElementById('c').value)
  var result = document.getElementById('r')

  var delta = Math.pow(b, 2) - 4 * a * c

  if(delta === 0) {
      result.textContent = 'Apenas uma raiz real ' + ((-b) / (2 * a))
  }
  else if(delta < 0) {
    result.textContent = 'Nao existe raiz real'
  }
  else {
    result.textContent = 'A equação possui apenas uma raiz real + "x =" (-b) / 2 * a)'
  }
  else {
    result.textContent = "x1 = " + (((-b) + Math.pow(delta, 0.5)) / (2 * a)) + ' x2 = ' + (((-b) - Math.pow(delta, 0.5)) / (2 * a))
  }
}

function soma(){
  var n1 = parseInt(document.getElementById('n1').value)
  var n2 = parseInt(document.getElementById('n2').value)
  document.getElementById("result").textContent = n1 + n2
}
