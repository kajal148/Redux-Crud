import React, { Component } from 'react';
import { connect } from 'react-redux';
import {SignIn, SignOut} from '../actions';

class GoogleAuth extends Component {

    componentDidMount(){
        window.gapi.load('client:auth2',() => {
            // console.log("loaded!");
            window.gapi.client.init({
                clientId : '412933126656-7s2j0uvtjlquvr40a00rrjvipcgddndt.apps.googleusercontent.com',
                scope: 'email',
                plugin_name: "Streams-web-app"
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        })
    }
    
    onAuthChange = (isSignedIn) => {
        if(isSignedIn){
            this.props.SignIn(this.auth.currentUser.get().getId());
        }else{
            this.props.SignOut(this.auth.currentUser.get().getId());
        }
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut(); 
    }


    renderedAuthButton() {
        if(this.props.isSignedIn === null){
            return null;
        }else if(this.props.isSignedIn){
            return (<button className='ui red google button' onClick={this.onSignOutClick}>
                <i className='google icon'></i>
                Sign out
            </button>)
        }else{
            return  (<button className='ui red google button' onClick={this.onSignInClick}>
                <i className='google icon'></i>
                Sign in with Google
            </button>)
        }
    }

    render() {
        return (
        <div>
            {this.renderedAuthButton()}
        </div>
        )
    }
}

const mapStateTopProps = (state, ownProps) => {
    return {isSignedIn : state.auth.isSignedIn}
}

export default connect(mapStateTopProps,{SignIn, SignOut})(GoogleAuth);