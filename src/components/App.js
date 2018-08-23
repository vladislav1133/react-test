import React, { Component } from 'react'
import PropTypes from'prop-types'
import ArticleList from './ArticleList'
import UserForm from './UserForm'
import Select from 'react-select';

class App extends Component {

    state = {
        selection: null
    }

    render() {

        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return (
            <div>
                <Selec options = {options} value = {this.state.selection} onChange = {this.changeSelection}/>
                <ArticleList articles = {this.props.articles}/>
            </div>
        )
    }

    changeSelection  = selection => this.setState({selection})

}

export default App