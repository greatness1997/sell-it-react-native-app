import client from "./client";

const listingEndpoint = "/listings";

const getListings = () => client.get(listingEndpoint);

const addListings = (listing, onUploadProgress) => {
    const data = new FormData();
    data.append("title", listing.title);
    data.append("price", listing.price);
    data.append("description", listing.description);
    data.append("categoryId", listing.category.value);
    //data.append('_id', listings._id)

    listing.images.forEach((image, index) =>
        data.append("images", {
            name: "image" + index,
            type: "image/jpeg",
            uri: image,
        })
    );

    // if (listings.location)
    //     data.append("location", JSON.stringify(listings.location));

    return client.post(listingEndpoint, data, {
        onUploadProgress: (progress) =>
            onUploadProgress(progress.loaded / progress.total),
    });
};

export default {
    getListings,
    addListings,
};