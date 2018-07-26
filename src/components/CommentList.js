import React, {Component} from 'react'
import Comment from './Comment'

class CommentList extends Component{

    static defaultProps = {
        comments: []
    }

    state = {
        isOpen: false
    }

    render() {

        const btnText = this.state.isOpen ? 'hide comments' : 'show comments'
        
        return (
            <div>
                <button onClick = {this.toggleOpen} >{btnText}</button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        if(!this.state.isOpen) return null

        const {comments} = this.props
        if (!comments.length) return <p>No
            comments yet</p>

        return (
            <ul>
                {comments.map(comment => <li key = {comment.id}><Comment comment = {comment}/></li>)}
            </ul>
        )
    }

    toggleOpen = ev => this.setState({
        isOpen: !this.state.isOpen
    })

}

export default CommentList