import React, {Component} from 'react';
import GirlImage from './GirlImage';

import {Link} from "react-router-dom";


class MainContent extends Component {
    render() {
        const allPosts = this.props.posts.map(pts => (
            <div key={pts._id} className="col-3">
                <Link to={`posts/${pts._id}`}>
                    <GirlImage pts = {pts}/>
                </Link>
            </div>
        ));
        return (
            <div className="container">
                <div className="row">
                    {allPosts}
                </div>

            </div>
        )
    }
}

export default MainContent