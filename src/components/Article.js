import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CommentList from './CommentList'

class Article extends Component{

    static propTypes = {
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    componentWillMount() {
        console.log("---", 'will mount')
    }

    render() {

        const {article, isOpen, toggleOpen} = this.props

        return (
            <div ref = {this.setContainerRef}>
                <h3>{article.title}</h3>
                <button onClick = {toggleOpen}>
                    { isOpen ? 'close' : 'open' }
                </button>
                {this.getBody()}

            </div>
        )
    }

    setContainerRef() {
        //get tag property from real dom
    }

    componentDidMount() {
        console.log("---", 'did mount')
    }

    getBody() {

        const {article, isOpen} = this.props
        if(!isOpen) return null

        return (
            <section>
                <div>{article.text}</div>
                <CommentList comments = {article.comments}/>
                </section>
        )
    }
}

export default Article