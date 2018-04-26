import React from 'react';
import NavBar from './NavBar';
import CategoryName from './CategoryName';
import Items from './Items';
import { connect } from 'react-redux';
import { fetchUploadItems } from './actions/fetch';

class CategoryPageDumb extends React.Component {
    componentDidMount(){
        let { dispatch } = this.props
        fetchUploadItems({ dispatch})
    }
    
    render() {
        let {category} = this.props
        return (
            <div>
                <NavBar/>
                <CategoryName category={category}/>
                <Items category={category}/>
            </div>
        )
    }
}

let CategoryPage = connect(
    (state, props) => ({
        items: state.items,
        category: props.match.params.categoryName,
    })
)(CategoryPageDumb)

export default CategoryPage;