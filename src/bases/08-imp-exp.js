import heroes from "../data/heroes.js";



export const getHeroById = (id) => heroes.find((heroe) => heroe.id === id)


export const getHeroesByOwner = (ownerDesc) => heroes.filter((heroe) => heroe.owner === ownerDesc)
