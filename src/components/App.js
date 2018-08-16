import React, { Component } from 'react'
import PropTypes from'prop-types'
import ArticleList from './ArticleList'
import UserForm from './UserForm'

class App extends Component {
    static propTypes = {

    }

    state = {
        username: ''
    }

    render() {
        return (
            <div>
                <ArticleList articles = {this.props.articles}/>
            </div>
        )
    }


}

export default App