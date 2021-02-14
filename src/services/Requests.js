export const getUserList =
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())

export const getAlbumList = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
        .then(response => response.json())

}

export const getPhotoList = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
        .then(response => response.json())

}

export const photoLength =
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json()).then(res=>res.length)

export const getPhoto = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/photos?id=${id}`)
        .then(response => response.json())

}