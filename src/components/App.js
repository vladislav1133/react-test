import React, { Component } from 'react'
import PropTypes from'prop-types'
import ArticleList from './ArticleList'

class App extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                <ArticleList articles = {this.prop.articles}/>
            </div>
        )
    }
}

export default App