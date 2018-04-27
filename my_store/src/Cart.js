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
        let {cart, user} = this.props;

        let toggleMenu = () => {
            this.setState({openMenu: !openMenu})
        }

        console.log(cart)

        return (
                <div >
                    { user.loggedIn &&
                    <div className='cart' onMouseEnter={toggleMenu} onMouseLeave={toggleMenu}>
                        <img src="/images/cartIcon.png" alt='item pic'/>
                        <p>{cart && cart.length}</p>
                        {/* <p>{getTotalItemsNumber(cart)}</p> */}
                        
                        {openMenu ? <PopUpCart cart={cart}/> : []}
                    </div>
                    }
                </div>
        )
    }
}

let Cart = connect(
    state => ({
        cart: state.cart,
        user: state.user,
    }),
)(CartDumb)



export default Cart;