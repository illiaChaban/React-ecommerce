import React from 'react';

let Images = ({item}) => {
    return (
        <div>
            {item && item.images.map( (image, i) => <img key={i} className='item-page' src={image.url} alt='item'/>)}
        </div>
    )
}

export default Images;