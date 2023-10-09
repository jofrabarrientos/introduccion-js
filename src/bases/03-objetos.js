const persona = {
    nombre : 'tony',
    apellido : 'stark',
    edad : 45,
    direccion : {
        ciudad : 'new york',
        calle : 'calle falsa 123'
    }
}

const persona2 = {...persona}
persona2.nombre = 'Peter'

console.log(persona)
console.log(persona2)