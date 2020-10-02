import React from 'react'

export const TaskFilter = () => {
  return (
    <div className='task-filter'>
      <div className='search'>
        <input />
        <span className='serch'>🔎</span>
      </div>
      <div className='filter'>
        <span className='active'>全部</span>
        <span>已完成</span>
        <span>未完成</span>
      </div>
    </div>
  )
}
