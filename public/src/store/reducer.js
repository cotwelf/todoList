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
      return Object.assign(
        {},state,
        {
          list: taskList,
          addTaskValue:''
        }
      )
    }
    case 'CHANGE_ADD_VALUE': {
      return Object.assign({},state,{addTaskValue:action.addTaskValue})
    }
    case 'EDITING': {
      return Object.assign({},state,{editValue: action.editValue,editId: action.editId})
    }
    case 'EDITED': {
      let newList = state.list
      newList.forEach(item => {
        if(item.id === state.editId) {
          item.name = state.editValue
        }
      });
      return Object.assign({},state,{editId: null, editValue:'', list: newList})
    }
    case 'DONE': {
      let newList = state.list
      newList.forEach(item => {
        if (item.id === action.id) {
          item.status = 1
        }
      });
      return Object.assign({},state,{list: newList, editId: null})
    }
    case 'DELETE': {
      let newList = state.list
      newList.forEach((item,index)=> {
        if(item.id === action.id) {
          newList.splice(index,1)
        }
      })
      return Object.assign({}, state, {list: newList})
    }
    case 'FILTER': {
      return Object.assign({}, state, {listFilter: action.filters})
    }
  }
  return state
}
