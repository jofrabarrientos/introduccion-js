import {getHeroById} from "./bases/08-imp-exp.js";
console.log('inicio')

new Promise((resolve,reject)=>{
    console.log('cuerpo de la promesa')
    //resolve('Promesa resuelta')
    reject('promesa resuelta con error')
}).then( (msg) => console.log(msg))
    .catch((err) => console.log(err))

console.log('fin')

const getHeroByIdAsync = (id) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const hero = getHeroById(id)
            if (hero) {
                resolve(hero)
            }else{
                reject('Heroe no existe')
            }
        },1000)
    })
}

getHeroByIdAsync(100)
    .then(h => console.log(h))
    .catch(console.log)