import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import LinkToCategory from './LinkToCategory';
import { fetchLoadCategories } from './actions/fetch';



class CategoriesList extends React.Component {
    componentDidMount(){
        console.log('getting categories')
        fetchLoadCategories({dispatch: this.props.dispatch})
    }

    render() {
        let { categories, classN} = this.props;
        return (
            <div className={classN}>
                <Link className='category-link' to='/categories/' key={-1}>All</Link>
                {categories.length 
                ?
                categories.map( (ctgr, i) => <LinkToCategory category={ctgr} key={i}/>)
                : []}
            </div>
        )
    }
}

export default connect(
    (state, props) => ({ 
        categories: state.categories,
        classN: props.classN,
    })
)(CategoriesList);