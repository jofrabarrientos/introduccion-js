const getHeroByIdAsync = () => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(' se resuelve la promesa')
        },1000)
    })
}

const  medirTiempoAsync = async() =>{
    console.log('Inicio')
    await getHeroByIdAsync()
    console.log('Fin')
    return 'hola mundo'
    //throw: para devolver errores
}

medirTiempoAsync().then(valor=>console.log(valor))