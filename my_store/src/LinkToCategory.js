import React from 'react';
import {Link} from 'react-router-dom'

let LinkToCategory = ({category}) =>
    <Link className='category-link' to={'/categories/' + category.title}>
        {category.title}
    </Link>

export default LinkToCategory;
