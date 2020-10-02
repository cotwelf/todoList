const defaultState = {
  editing: false,
  editingitem: null,
  addTaskValue: '2333',
  list:[
    {
      name: '只是个测试任务~~',
      status: 0
    },
    {
      name: '只是个测试任务~~',
      status: 0
    },
    {
      name: '只是个测试任务~~',
      status: 0
    }
  ]
}

export default (state = defaultState, action) => {
  console.log(action,state)
  switch (action.type){
    case 'ADD_TASK': {
      const taskList = state.list
      if (action.addTaskValue) {
        taskList.push({
          name:action.addTaskValue,
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
      console.log(action.addTaskValue)
      return Object.assign({},state,{addTaskValue:action.addTaskValue})
    }
  }
  console.log('nonono')
  return state
}
