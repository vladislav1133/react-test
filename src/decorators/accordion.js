import React, { Component } from 'react'
import PropTypes from'prop-types'

export default Component => class Accordion extends Component {

    state = {
        openItemId: null
    }

    render() {
        return <Component {...this.props} {...this.state} toggleOpenItem = {this.toggleOpenItem}/>
    }

    toggleOpenItem = (openItemId) => ev => {

        this.setState({
            openItemId: openItemId === this.state.openItemId ? null : openItemId
        })
    }
}
