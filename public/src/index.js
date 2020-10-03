import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import AddTask from './components/add-task'
import List from './components/task-list'

const TodoList = () => (
    <Provider store={store}>
      <AddTask />
      <List />
    </Provider>
  )

ReactDOM.render(<TodoList />, document.getElementsByClassName('container')[0])
