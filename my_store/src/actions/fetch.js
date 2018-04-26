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

export let fetchLogIn = (state) => {
    let { email, password } = state;
    return (
        fetch('https://etsetera.herokuapp.com/auth/local', {
            headers: {
                "Content-Type": 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                identifier: email,
                password: password,
            })
        })
            .then( res => res.json())
    )
}

export let fetchRegister = (state) => {
    let { email, password, username } = state;    
    return (
        fetch('https://etsetera.herokuapp.com/auth/local/register', {
            headers: {
                "Content-Type": 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({email, password, username})
        })
            .then( res => res.json())
    )
}