import React, { Component } from 'react'



export default class ImageItem extends Component {
    render() {
        return (
            <div className="imageBox">
                <li>
                    <img src={this.props.src.url} alt="hornCreature"/>
                </li>
            </div>
        )
    }
}
