import React, { PropTypes } from "react"

class User extends React.Component {
  render() {
    const { login, avatar_url } = this.props.user

    return (
      <div style={{border: '1px solid #ddd', width: '100%'}}>
        <p>login: {login}</p>
        <img src={avatar_url} role='presentation' style={{width: '30%', heigth: '30%'}} />
      </div>
    )

  }
}

User.propTypes = {
  user: PropTypes.shape({
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired
  }).isRequired
};

export default User;
