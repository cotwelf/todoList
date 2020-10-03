import React, {useRef} from 'react'
import store from '../store'
import {connect} from 'react-redux'

const mapStateToProps = state => {
  return {
    addTaskValue: state.addTaskValue
  }
}
const mapDispatchToProps = dispatch => {
  return {
    editingAddValue(e){
      const changeAddValue = {
        type: 'CHANGE_ADD_VALUE',
        addTaskValue: e.target.value
      }
      dispatch(changeAddValue)
    },
    addTaskAction(){
      const postTask = {
        type: 'ADD_TASK',
      }
      store.dispatch(postTask)
    }
  }
}
const AddTask = (props) => {
  const addInputRef = useRef()
  return (
    <div className='add-task'>
      <input
        className='name'
        placeholder='请输入任务，点击右侧 ‘+’ 添加'
        onChange={props.editingAddValue}
        value={props.addTaskValue}
        ref={addInputRef}
      />
      <div onClick={props.addTaskAction}></div>
    </div>
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(AddTask)
