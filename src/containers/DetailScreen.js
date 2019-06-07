import React, {Component} from 'react';
import axios from '../axios';

import NavBar from '../components/NavBar'
import GirlImage from '../components/GirlImage';

class DetailScreen extends Component {
    state = {
    }
    
    componentDidMount(){
        axios
          .put(`api/posts/${this.props.match.params.postId}`)
          .then(data =>{
            console.log(data.data.data);
            this.setState({
              post: data.data.data,
            })
          })
          .catch(err => console.log(err));
    }
        
    render(){
        return (
            <div className="">
                <NavBar 
                    onSearchChanged={this._onSearchChanged} 
                    onLogin={this.props.onLogin}
                    username={this.props.username}
                />
                <div className="main-content container">
                    <div className="row">
                        <div className="col-8 mr-auto ml-auto">
                            {this.state.post ? <GirlImage pts={this.state.post}/> : "" }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DetailScreen;