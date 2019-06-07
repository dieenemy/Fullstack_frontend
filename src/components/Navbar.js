import React, {Component} from 'react';
import SearchField from './SearchField';
import logo from '../img/logo-techkids.png';
import ProfilePanel from './ProfilePanel';

class NavBar extends Component {
    render(){
        return (
            <div className="navbar">
                <div className="container">
                    <SearchField onSearchChanged={this.props.onSearchChanged}/>
                    <img src={logo}/>
                    <ProfilePanel onLogin={this.props.onLogin} username={this.props.username}/>
                </div>
            </div>
        );
    }
}

export default NavBar