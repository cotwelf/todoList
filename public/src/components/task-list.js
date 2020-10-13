import React,{useRef, createRef} from 'react'
import store from 'react-redux'
import {connect} from 'react-redux'
import classNames from 'classname'

const mapStateToProps = state => {
  return {
    list: state.list,
    todoList: Object.assign([],state.list).filter(item=>item.status === 0),
    doneList: Object.assign([],state.list).filter(item=>item.status === 1),
    editId: state.editId,
    editValue: state.editValue,
    listFilter: state.listFilter
  }
}
const mapDispatchToProps = dispatch => {
  return {
    editTask(id,name){
      const action = {
        type: 'EDITING',
        editValue: name ? name : window.event.target.value,
        editId: id
      }
      dispatch(action)
    },
    complete() {
      const action = {
        type: 'EDITED',
      }
      dispatch(action)
    },
    done(id) {
      const action = {
        type: 'DONE',
        id
      }
      dispatch(action)
    },
    delete(id) {
      const action = {
        type: 'DELETE',
        id
      }
      dispatch(action)
      console.log(List.searchRef)
    },
    filter(filters) {
      const action = {
        type: 'FILTER',
        filters
      }
      dispatch(action)
    }
  }
}
const List = (props) => {
  const searchRef = createRef(null)
  console.log(searchRef)
  let showList = null
  switch (props.listFilter) {
    case 'total':{
      showList = props.todoList.concat(props.doneList)
      break;
    }
    case 'todo': {
      showList = props.todoList
      break;
    }
    case 'done': {
      showList = props.doneList
      break
    }
  }
  if(!props.list.length) {
    return null
  }
  return (
    <table className='task-list' cellSpacing='0'>
      <thead>
        <tr>
          <td>
            <span>task name</span>
          </td>
          <td>actions</td>
        </tr>
      </thead>
      <tbody>
        {showList.map((item,index)=>(
          <tr key={index}>
            <td className='tasks' onClick={()=>{item.status === 0 && props.editTask(item.id,item.name)}}>
              {
                (props.editId == item.id)
                ? <input
                    defaultValue={item.name}
                    onChange={() => props.editTask(item.id)}
                    onFocus={() => props.editTask(item.id)}
                    onBlur={() => props.complete(item.id)}
                    onKeyDown={() => props.complete(item.id)}
                  />
                : <span className={item.status === 0 ? 'doing' : 'done'} >{item.name}</span>
              }
            </td>
            <td className='actions'>
              { item.status === 0 &&
                (props.editId == item.id
                  ? <div className='action-btn done' onClick={() => props.complete(item.id)}>确认</div>
                  : <div className='action-btn edit' onClick={() => props.editTask(item.id,item.name)}>编辑</div>)
              }
              {item.status === 0 && <div className='action-btn complete' onClick={()=> props.done(item.id)}>完成</div>}
              <div className='action-btn delete' onClick={() => props.delete(item.id)}>删除</div>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>
            <input ref={searchRef}/>
            <span className='serch'>🔎</span>
          </td>
          <td className='filter'>
            <span className={classNames({'active': props.listFilter === 'total'})} onClick={()=>{props.filter('total')}}>全部</span>
            <span className={classNames({'active': props.listFilter === 'done'})} onClick={()=>{props.filter('done')}}>已完成</span>
            <span className={classNames({'active': props.listFilter === 'todo'})} onClick={()=>{props.filter('todo')}}>未完成</span>
          </td>
        </tr>
      </tfoot>
    </table>
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(List)
