import React from 'react';
import SocialLogin, { Props } from 'react-social-login';
import { LinkedInLoginButton } from 'react-social-login-buttons';

class LinkedInButton extends React.Component<Props> {
  render() {
    return (
      <LinkedInLoginButton onClick={this.props.triggerLogin} {...this.props}>
        {this.props.children}
      </LinkedInLoginButton>
    );
  }
}
export default SocialLogin(LinkedInButton);
