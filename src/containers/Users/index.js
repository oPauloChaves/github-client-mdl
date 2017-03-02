// Copied from: https://github.com/cloudmu/react-redux-starter-kit/blob/master/src/containers/user/UsersPage.js
import React, { Component, PropTypes } from "react"
import { connect } from "react-redux"

import User from "../../components/User"

import {
  invalidateUsersPage,
  selectUsersPage,
  fetchTopUsersIfNeeded
} from "../../actions/users"

class UsersPage extends Component {
  constructor(props) {
    super(props)
    this.handleNextPageClick = this.handleNextPageClick.bind(this)
    this.handlePreviousPageClick = this.handlePreviousPageClick.bind(this)
    this.handleRefreshClick = this.handleRefreshClick.bind(this)
  }

  componentDidMount() {
    const { dispatch, page } = this.props
    dispatch(fetchTopUsersIfNeeded(page))
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.page !== this.props.page) {
      const { dispatch, page } = nextProps
      dispatch(fetchTopUsersIfNeeded(page))
    }
  }

  handleNextPageClick(e) {
    e.preventDefault()
    const { page, users } = this.props
    if (users.length > 0) {
      // go to next page only if more users may be available
      this.props.dispatch(selectUsersPage(page + 1))
    }
  }

  handlePreviousPageClick(e) {
    e.preventDefault()
    const page = this.props.page
    if (page > 1) {
      this.props.dispatch(selectUsersPage(page - 1))
    }
  }

  handleRefreshClick(e) {
    e.preventDefault()

    const { dispatch, page } = this.props
    dispatch(invalidateUsersPage(page))
    dispatch(fetchTopUsersIfNeeded(page))
  }

  render() {
    const { /*page,*/ error, users, isFetching } = this.props

    return (
      <div style={{ marginTop: '10px' }}>

        {error &&
          <div className="alert alert-danger">
            {error.message || "Unknown errors."}
          </div>}

        {!isFetching &&
          users.length === 0 &&
          <div className="alert alert-warning">Oops, nothing to show.</div>}

        {isFetching &&
          <p>Loading users...</p>}

        {users.length > 0 &&
          <div className="row">
            {users.map(user => (
              <div key={user.login} className="col-md-3" style={{ marginBottom: '10px' }}>
                <User key={user.login} user={user} />
              </div>
            ))}
          </div>}

      </div>
    )
  }
}

UsersPage.propTypes = {
  page: PropTypes.number.isRequired,
  users: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  error: PropTypes.object
}

function mapStateToProps(state) {
  const { selectedUsersPage, usersByPage } = state
  const page = selectedUsersPage || 1

  if (!usersByPage || !usersByPage[page]) {
    return {
      page,
      isFetching: false,
      didInvalidate: false,
      totalCount: 0,
      users: [],
      error: null
    }
  }

  return {
    page,
    error: usersByPage[page].error,
    isFetching: usersByPage[page].isFetching,
    didInvalidate: usersByPage[page].didInvalidate,
    totalCount: usersByPage[page].totalCount,
    users: usersByPage[page].users
  }
}

export default connect(mapStateToProps)(UsersPage)
