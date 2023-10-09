const apiKey = '4ZDVFSgbdafVFqlKwUu9rWK2mZfuvAAf'

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}` )
    .then(resp =>
        resp.json()
    ).then(({data})=>{
        const { url } = data.images.original
        const img = document.createElement('img')
        img.src = url
        document.body.append(img)
    })
    .catch(e => console.log(e))