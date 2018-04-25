import React from 'react';
import CategoryWindow from './CategoryWindow';

class CategoryMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openMenu: false
        }
    }

    render() {
        let {openMenu} = this.state;

        let toggleMenu = () => {
            this.setState({openMenu: !openMenu})
        }

        return (
            <div>
                <img
                    onClick={toggleMenu} 
                    className='category-img' 
                    src="https://s3.amazonaws.com/images.seroundtable.com/google-my-business-1403701244.png"
                />
                { openMenu ? <CategoryWindow/> : []}
            </div>
        )
    }
}

export default CategoryMenu;