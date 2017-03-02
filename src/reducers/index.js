import { combineReducers } from 'redux'
import { selectedUsersPage, usersByPage } from "./users";

export default combineReducers({
  selectedUsersPage,
  usersByPage
})
