function saludar(){
    return 'Hola Mundo'
}
console.log(saludar())

const saluda = function (xyz){
    return `Hola ${xyz}`
}
console.log(saluda('Jose'))

const saluda2 = (xyz) => `Hola ${xyz}`

console.log(saluda2('Francisco'))

const getUser = () => {
    return{
        uid : '123',
        username : 'tony'
    }
}
console.log(getUser());

const obtenerUsuario = () => ({uid: '123', username: 'tony'})
console.log(obtenerUsuario());

const heroes = [
    {
        id : 1,
        nombre : 'naruto'
    },
    {
        id : 2,
        nombre : 'goku'
    }
]

const compruebaHeroe = (idAbuscar) => heroes.some((elementos) => (elementos.id === idAbuscar))
console.log(compruebaHeroe(2));

const heroe =  (idAbuscar) => heroes.find((elementos) => (elementos.id === idAbuscar))
console.log(heroe(1))