import React, { Component, PureComponent } from 'react'

export default class PureDemo extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            courseName: 'ReactJS'
        };
    }
    updateCourseName = () => {
        this.setState({ courseName: 'React' })
    }
    render() {
        console.log('rendering...')
        return <>
            <div>PureDemo</div>
            <div>courseName:{this.state.courseName}</div>
            <button className="btn btn-primary" onClick={this.updateCourseName}>update</button>
        </>
    }
}
