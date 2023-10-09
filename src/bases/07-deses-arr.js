const personajes = ['goku','vegeta','trunks']
const [g,v,t, h="goten"] = personajes
console.log(g,v,t,h)

const returnArray = () => (['abc',123])
const [l, n] = returnArray()
console.log(l,n)

const retornaArreglo= ([l,n]) => ([l,n])
const [letras,numeros] = retornaArreglo(['hola',5])
console.log(letras,numeros)