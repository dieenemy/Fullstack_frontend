import React, {Component} from 'react';
import axios from '../axios';

import NavBar from '../components/NavBar'
import MainContent from '../components/MainContent';

class HomeScreen extends Component {
    state = {
        posts: [],
        searchString: "",
    
    }
    
    componentDidMount(){
        axios
          .get('api/posts')
          .then(data =>{
            console.log(data.data.data);
            this.setState({
              posts: data.data.data,
            })
          })
          .catch(err => console.log(err));
    }
        
    _onSearchChanged = text =>this.setState({searchString: text});

    render() {
        const displayedPost = this.state.posts.filter(
            pts => 
            pts.title.includes(this.state.searchString) ||
            pts.post.includes(this.state.searchString)
          );
        return (
            <div>
                <NavBar 
                  onSearchChanged={this._onSearchChanged} 
                  onLogin={this.props.onLogin} 
                  username={this.props.username}/>
                <MainContent posts = {displayedPost}/>
            </div>
        )
    }
}


export default HomeScreen;