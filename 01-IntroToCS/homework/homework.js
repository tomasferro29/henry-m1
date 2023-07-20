'use strict'

function BinarioADecimal(num) {
  const string = num.toString()
  const splited = string.split('')
  const reversed = splited.reverse()
  const numbers = reversed.map(e => parseInt(e))
  const mapped = numbers.map((n, i) => {
    let elevated = 2**i
    let result = n*elevated
    return result
  })
  const decimal = mapped.reduce((acc, item) => {
    return acc += item
  })
  return decimal
}

console.log('Bin a dec: '+BinarioADecimal(1011100101101))

function binarioADecimalIA(binario) {
  return parseInt(binario, 2);
}
console.log('IA: bin a dec: ' + binarioADecimalIA('0101'))

function DecimalABinario(num) {
  let div = num
  let array = []
  while (div >= 1) {
    let resto = div % 2
    array.push(resto)
    div = div / 2
  }
  let reversed = array.reverse().map( e => {
    let s = e.toString()
    return s[0]
  })
  let binario = reversed.join('')
  return binario
}

console.log('dec a bin: '+DecimalABinario(8))

function decimalABinarioIA(decimal) {
  return decimal.toString(2);
}

console.log('IA dec a bin: '+decimalABinarioIA(99))

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}