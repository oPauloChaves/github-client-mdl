import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div
    style={{
      width: '968px',
      margin: '0 auto'
    }}
  >
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
