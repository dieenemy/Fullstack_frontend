import React, {Component} from 'react';

class GirlImage extends Component {
    render() {
        return (
            <div className="bg-light">
                <img className="img-fluid"
                src={this.props.pts.image} 
                alt = {this.props.pts.title} 
                />
                <div className="p-3 border">
                    <h6>{this.props.pts.title}</h6>
                    <small>{this.props.pts.post}</small>
                </div>
            </div>
        )
    }
}


export default GirlImage