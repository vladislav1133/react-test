import React, { Component } from 'react'
import PropTypes from'prop-types'

class ArticleChart extends Component {
    static propTypes = {
        
    }
    
    render() {
        return (
            <div ref = 'container'/>
        )
    }

    componentWillReceiveProps(nextProps) {
        // update chart for new data
    }

    componentDidMount() {
        //draw d3 graphic
    }

    componentWillUnmount() {
        //clean graphic
    }
}

export default ArticleChart