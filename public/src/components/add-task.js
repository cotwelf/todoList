import React, {useRef} from 'react'
import store from '../store'
import {connect} from 'react-redux'

const mapStateToProps = state => {
  return {
    addTaskValue: state.addTaskValue
  }
}
const AddTask = (props) => {
  const addInputRef = useRef()
  const editingAddValue = () => {
    const changeAddValue = {
      type: 'CHANGE_ADD_VALUE',
      addTaskValue: addInputRef.current.value
    }
    store.dispatch(changeAddValue)
  }
  const addTaskAction = () => {

    const postTask = {
      type: 'ADD_TASK',
      addTaskValue: props.addTaskValue
    }
    store.dispatch(postTask)
  }
  return (
    <div className='add-task'>
      <input className='name' onChange={editingAddValue} value={props.addTaskValue} ref={addInputRef}/>
      <div onClick={addTaskAction}></div>
    </div>
  )
}

export default connect(mapStateToProps,null)(AddTask)
