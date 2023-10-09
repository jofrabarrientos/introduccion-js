import axios from "axios"

const apiKey = '4ZDVFSgbdafVFqlKwUu9rWK2mZfuvAAf'
const url = 'https://api.giphy.com/v1/gifs/random?api_key='

const giphyApi = axios.create({
    baseURL : 'https://api.giphy.com/v1/gifs',
    params :{
        api_key: apiKey
    }
})

export default giphyApi

/*
giphyApi.get('/random')
    .then(resp => resp.data)
    .then(({data})=>{
        const { url } = data.images.original
        const img = document.createElement('img')
        img.src = url
        document.body.append(img)
    })

 */