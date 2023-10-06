import React from 'react'
import ReactDOM from 'react-dom/client'

const heading = React.createElement('h1', { id: "heading", axy: 'gag' }, 'Hello World React');

const root = ReactDOM.createRoot(document.getElementById('root'));


const parent = React.createElement('div', { id: 'parent' }, [React.createElement('div', { id: 'child' }, [heading, heading]), React.createElement('div', { id: 'child' }, [heading, heading])])

root.render(parent);
console.log('heading', parent, root)

