import React from 'react';
import { connect } from 'react-redux';
import PopUpCart from './PopUpCart';
import getTotalItemsNumber from './lib/getTotalItemsNumber';

class CartDumb extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            openMenu: false,
        }
    }

    render() {
        let {openMenu} = this.state;
        let {cart} = this.props;

        let toggleMenu = () => {
            this.setState({openMenu: !openMenu})
        }

        return (
            // <Link to='/cart'>
                <div 
                className='cart'
                onClick={toggleMenu}>
                    <img src="/images/cartIcon.png"/>
                    <p>{getTotalItemsNumber(cart)}</p>
                    {openMenu ? <PopUpCart cart={cart}/> : []}
                </div>
        )
    }
}



// let CartDumb = ({cart}) => {
//     return (
//         <Link to='/cart'>
//             <div 
//             className='cart'>
//                 <img src="/images/cartIcon.png"/>
//                 <p>{cart.length}</p>
//             </div>
//         </Link>
//     )
// }


let Cart = connect(
    state => ({cart: state.cart}),
)(CartDumb)



export default Cart;