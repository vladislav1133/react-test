import React from 'react'
import {render} from 'react-dom'
import Article from './Article'
import {articles} from "./fixtures";

function HelloWorld() {
    return <h1>Hello World</h1>
}

render(<Article article={articles[0]} />, document.getElementById('container'));
