import client from "./client";

const listingEndpoint = "/product";

const getListings = () => client.get(listingEndpoint);

const postListings = (product) => {
    const data = new FormData();
    data.append('title', product.title)
    data.append('price', product.price)
    data.append('description', product.description)
    data.append('categories', product.categories )
    //data.append('_id', product._id)

    product.images.forEach((image, index) => 
        data.append('images', {
            name: 'image' + index,
            type: 'image/jpeg',
            uri: image
        })
    )

    // if(product.location)
    // data.append('location', JSON.stringify(product.location))

    return client.post(listingEndpoint, data)
}

export default {
    getListings,
    postListings
};