import React from 'react';
import classes from './Codingq.module.css';

const Coding = ()=>{
    return (
        <div className={classes.box}>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <br/>
            <strong>Input</strong>
            <p>2
                <br/>
            3 5 6 7
            <br/>
            6 7 8 1 2</p>
            <strong>Output</strong>
            <p>
                3
                <br/>
                6
            </p>
        </div>
    )
}

export default Coding;