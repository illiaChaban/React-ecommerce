let getImageUrl = ({item}) => {
    return item && item.images[0] && item.images[0].url
}

export default getImageUrl;