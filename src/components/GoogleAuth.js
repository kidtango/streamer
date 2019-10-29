import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '162956466434-fb3qflikfovk5ckj338f1kmh55ttsk5v.apps.googleusercontent.com',
          scope: 'email'
        })
        .then(() => {
          // console.log(this);
          this.auth = window.gapi.auth2.getAuthInstance();
          // console.log(this.auth);
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button className='ui red google button' onClick={this.onSignOutClick}>
          <i className='google icon' />
          Sign Out
        </button>
      );
    } else {
      return (
        <button className='ui red google button' onClick={this.onSignInClick}>
          <i className='google icon'>Sign In</i>
        </button>
      );
    }
  }

  render() {
    console.log(this.props.userId);
    return <div>{this.renderAuthButton()}</div>;
  }
}

const actions = {
  signIn,
  signOut
};

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn,
    userId: state.auth.userId
  };
};

export default connect(
  mapStateToProps,
  actions
)(GoogleAuth);
