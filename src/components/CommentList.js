import React, {Component} from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'

class CommentList extends Component{

    static defaultProps = {
        comments: []
    }

    render() {
        const {isOpen, toggleOpen} = this.props

        const btnText = isOpen ? 'hide comments' : 'show comments'
        
        return (
            <div>
                <button onClick = {toggleOpen} >{btnText}</button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const {comments, isOpen} = this.props

        if(!isOpen) return null
        if (!comments.length) return <p>No comments yet</p>

        return (
            <ul>
                {comments.map(comment => <li key = {comment.id}><Comment comment = {comment}/></li>)}
            </ul>
        )
    }
}

export default toggleOpen(CommentList)