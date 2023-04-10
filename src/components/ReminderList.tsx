import React from 'react'


 export  interface Reminder {
  id: number;
  title: string;
}


interface ReminderListProp{
    items: Reminder[]
    onRemove:(id:number) => void
}

export default function reminderList({ items, onRemove }: ReminderListProp) {
  return (
    <div>
        <ul className='list-group'>
           {items.map(item => <li className='list-group-item' key={item.id}>{item.title}
             <button onClick={() => onRemove(item.id)} className='btn btn-outline-danger mx-2'>Delete</button>
           </li>)} 
        </ul>
    </div>
  )
}
