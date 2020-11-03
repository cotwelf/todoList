const defaultState = {
  editingitem: null,
  addTaskValue: '',
  editId: null,
  editValue:'',
  listFilter: 'total',  // total,todo,done
  list:[
    {
      id: 0,
      name: '只是个测试任务~~',
      status: 0
    },
    {
      id: 1,
      name: '只是个测试任务~~',
      status: 0
    },
    {
      id: 2,
      name: '只是个测试任务~~',
      status: 1
    }
  ]
}

export default (state = defaultState, action) => {
  switch (action.type){
    case 'ADD_TASK': {
      const taskList = state.list
      if (state.addTaskValue) {
        taskList.unshift({
          name:state.addTaskValue,
          id: taskList.length,
          status: 0
        })
      }
      return {...state,list: taskList,addTaskValue:'' }
    }
    case 'CHANGE_ADD_VALUE': {
      return {...state,addTaskValue:action.addTaskValue}
    }
    case 'EDITING': {
      return {...state,editValue: action.editValue,editId: action.editId}
    }
    case 'EDITED': {
      let newList = state.list
      newList.forEach(item => {
        if(item.id === state.editId) {
          item.name = state.editValue
        }
      })
      return {...state, editId: null}
    }
    case 'DONE': {
      let newList = state.list
      newList.forEach(item => {
        if (item.id === action.id) {
          item.status = 1
        }
      });
      return {...state,list: newList, editId: null}
    }
    case 'DELETE': {
      let newList = state.list
      newList.forEach((item,index)=> {
        if(item.id === action.id) {
          newList.splice(index,1)
        }
      })
      return {...state, list: newList}
    }
    case 'FILTER': {
      return {...state, listFilter: action.filters}
    }
    case 'SEARCH': {
      let list = state.list
      if (action.keyWords) {
        list = state.list.filter(item=>{
          return item.name.match(action.keyWords)
        })
      }
      return {...state,list}
    }
  }
  return state
}
