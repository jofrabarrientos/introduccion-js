const person = {
    name : 'tony',
    age : '45',
    codName : 'ironMan',
    power : 'Dinero'
}
const {name, age, codName, power = 'No tiene poder'} = person
console.log(name,age,codName, power)

const createHero = ({name, age, codName, power = 'No tiene poder'}) => {
    return {
        id: 121323412,
        name,
        age,
        codName,
        power
    }
}

console.log(createHero(person))

const crearHeroe = ({name, age, codName, power}) => ({id:12232,name,age,codName,power})
console.log(crearHeroe(person))