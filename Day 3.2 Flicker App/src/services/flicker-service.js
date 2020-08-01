const apiKey = 'e38f1bc56d9486ca37e84667b7a98ba8';
const flickerApi = 'https://api.flickr.com/services/rest';

const format = (img) => {
    return {
        id: img['id'],
        url: `//farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`
    }
};

export const flickerSearch = (term) => {

    const apiUrl = flickerApi
        + `?method=flickr.photos.search&sort=relevance&format=json&nojsoncallback=1&`
        + `api_key=${apiKey}&text=${term}`;

    return fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            return data.photos.photo.map((img) => format(img));
        })
        .catch((err) => {
            console.log('error: ', err);
            return err;
        });
};
