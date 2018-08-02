import React, {Component} from 'react'
import Article from './Article'

class ArticleList extends Component {

    state = {
        openArticleId: null
    }
    render() {
        const articleElements =  this.props.articles.map(article =>
            <li key = {article.id}>
                <Article
                    article = {article}
                    isOpen = {article.id === this.state.openArticleId}
                    toggleOpen = {this.toggleOpenArticle( article.id)}
                />
            </li>)
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }

    toggleOpenArticle = (openArticleId) => ev => {
        this.setState({ openArticleId })
    }

    test(openArticleId) {

        return function (ev) {
            this.setState({ openArticleId })
        }
    }
}


export default ArticleList