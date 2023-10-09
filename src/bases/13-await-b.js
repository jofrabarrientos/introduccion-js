import giphyApi from "./bases/11-axios.js";

const getImage = async () => {
    try {
        const respuesta = await giphyApi.get('/random')
        const {data} = respuesta.data
        const {url} = data.images.original
        const img = document.createElement('img')
        img.src = url
        document.body.append(img)
    }catch (e){
        console.log(e)
        throw e
    }
}

getImage()