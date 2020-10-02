import React from 'react'
import store from '../store'
import {connect} from 'react-redux'

const mapStateToProps = state => {
  console.log('22223333',state)
  return {
    list: state.list,
    editing: state.editing
  }
}
const List = (props) => {
  const editTask = (index=0) => {
    console.log('2333')

  }
  const complete = (index) => {
    console.log(index)
  }
  return (
    <table className='task-list' cellspacing='0'>
      <thead>
        <tr>
          <td>
            <span>task name</span>
          </td>
          <td>actions</td>
        </tr>
      </thead>
      <tbody>
        {props.list.map((item,index)=>(
          <tr key={index}>
            <td>
              {
                props.editing
                ? <input defaultValue={item.name}/>
                : <span>{item.name}</span>
              }
            </td>
            <td className='actions'>
              {
                props.editing
                  ? <div className='action-btn done' onClick={() => complete(index)}>确认</div>
                  : <div className='action-btn edit' onClick={() => editTask(index)}>编辑</div>
              }
              <div className='action-btn complete'>完成</div>
              <div className='action-btn delete'>删除</div>
            </td>
          </tr>
        ))}

    </tbody>
  </table>
  )
}

export default connect(mapStateToProps,null)(List)
