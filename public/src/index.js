import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import AddTask from './components/add-task'
import List from './components/task-list'
import { TaskFilter } from './components/task-filter'

const TodoList = () => (
    <Provider store={store}>
      <AddTask />
      <List />
      <TaskFilter />
    </Provider>
  )

ReactDOM.render(<TodoList />, document.getElementsByClassName('container')[0])
