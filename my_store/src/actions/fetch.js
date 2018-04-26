// import { applyImages } from '../dummyData';
import { loadItems } from './actions';
import { loadCategories } from './actions';


export let fetchUploadItems = ({dispatch}) => {
    return fetch('https://etsetera.herokuapp.com/product')
        .then(res => res.json())
        // .then( items => applyImages(items))
        .then( items => loadItems({dispatch, items}))
}

export let fetchLoadCategories = ({dispatch}) => {
    return fetch('https://etsetera.herokuapp.com/category')
        .then(res => res.json())
        .then( categories => loadCategories({dispatch, categories}))
}