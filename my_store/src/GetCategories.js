import React from 'react';
import { connect } from 'react-redux';

class GetCategories extends React.Component {
    componentDidMount(){
        this.getCategories()
    }

    getCategories() {
        fetch('https://etsetera.herokuapp.com/category')
            .then(res => res.json())
            .then( ctgr => this.props.dispatch({
                type: 'GET_CATEGORIES',
                payload: ctgr,
            }))
    }

    render() {
        return <div></div>
    }
}

export default connect()(GetCategories);