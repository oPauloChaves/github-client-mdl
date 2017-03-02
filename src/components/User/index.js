import React, { PropTypes } from "react"
import {Card, CardHeader, CardActions} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton';

class User extends React.Component {
  render() {
    const { login, avatar_url, type } = this.props.user

    return (
      <Card>
        <CardHeader
          title={login}
          subtitle={type}
          avatar={avatar_url}
        />
        <CardActions>
          <FlatButton label="Action1" />
          <FlatButton label="Action2" />
        </CardActions>
      </Card>
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
