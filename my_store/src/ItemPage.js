import React from 'react';
import NavBar from './NavBar';
import { connect } from 'react-redux';
import { fetchUploadItems } from './actions/fetch';
import ButtonAddToCart from './ButtonAddToCart';
import Images from './Images';




class ItemPageDumb extends React.Component {
    componentDidMount() {
        let { dispatch } = this.props
        fetchUploadItems({dispatch})
    }

    render() {
        let { items, itemId, dispatch } = this.props;
        let item = items.find( item => item.id === itemId)
        return (
            <div>
                <NavBar/>
                <Images item={item}/>
                <ButtonAddToCart item={item} dispatch={dispatch}/>
                <h3>Description:</h3>
                <p>{item && item.description}</p>
            </div>
        )
    }
}

let ItemPage = connect(
    (state, props) => ({
        itemId: props.match.params.id,
        items: state.items,
    }),
)(ItemPageDumb);

export default ItemPage;