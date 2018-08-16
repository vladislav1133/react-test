import React, { Component } from 'react'

export default Component => class Accordion extends Component {

    state = {
        openItemId: null
    }



    toggleOpenItem = (openItemId) => ev => {

        this.setState({
            openItemId: openItemId === this.state.openItemId ? null : openItemId
        })
    }

    render() {
        console.log("---", 'accordion')
        return <Component {...this.props} openItemId = {this.state.openItemId} toggleOpenItem = {this.toggleOpenItem}/>
    }
}
