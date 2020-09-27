import React from 'react';
import SocialLogin, { Props } from 'react-social-login';
import { GithubLoginButton } from 'react-social-login-buttons';

class GithubButton extends React.Component<Props> {
  render() {
    return (
      <GithubLoginButton onClick={this.props.triggerLogin} {...this.props}>
        {this.props.children}
      </GithubLoginButton>
    );
  }
}
export default SocialLogin(GithubButton);
