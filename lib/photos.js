import Unsplash, { toJson } from 'unsplash-js'

const Unsplash = require('unsplash-js').default

const accessKey = 'JwUgqeQouUP9bkyUhQDXvBgGiufNdzn0eMOeADIOTD8'

const unsplash = new Unsplash({accessKey: accessKey})

export function getPhotos() {
    unsplash.search.photos("dogs", 1, 10, {orientation: "portrait"})
    .then(toJson)
    .then(json => {

    });
}