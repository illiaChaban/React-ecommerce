import React from 'react';
import LogInBtn from './LogInBtn';
import dummyData from './dummyData';
import {Link} from 'react-router-dom';
import SearchBar from './SearchBar';
// import Header from './Header';
// import CategoryName from './CategoryName';
// import Items from './Items';





let Header = () => 
    <div className='header'>
        <Link 
            style={{ textDecoration: 'none', color: 'white' }} 
            to='/'>My_store
        </Link>
        <SearchBar/>
        <CategoryMenu/>
        <LogInBtn/>
    </div>

let CategoryName = ({category}) => 
    <div className="category-name">
        category name: {category}
    </div>

let CategoryWindow = () => {
    return (
        <div className='category-window'>
            <Link className='category-link' to='/categories/technology'>Technology</Link>
            <Link className='category-link' to='/categories/food_and_beverage'>Food and Beverage</Link>
            <Link className='category-link' to='/categories/educational'>Educational</Link>
            <Link className='category-link' to='/categories/board_games'>Board Games</Link>               
        </div>
    )
}

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

let Item = ({item}) => 
    <div className='item'>
        <img src={item.image}/>
        <h3>{item.name}</h3>        
    </div>

let Items = () => {
    let items = dummyData;
    return (
        <div>
            {items ? items.map( (item, i) => <Item key={i} item={item}/>) : []}
        </div>
    )
}



let CategoryPage = (props) => {
    let category = props.match.params.categoryName;

    return (
        <div>
            <Header/>
            <CategoryName category={category}/>
            <Items/>
        </div>
    )
}

export default CategoryPage;