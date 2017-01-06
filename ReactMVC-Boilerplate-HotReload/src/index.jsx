import React from 'react';
import ReactDom from 'react-dom';

class DefaultComponent extends React.Component
{
    render(){
        return (<h1>Rediger teksten her ... </h1>);
    }
}

ReactDom.render(
    <DefaultComponent />, 
    document.getElementById('root')
);