import React from 'react';
import { useState } from 'react';

interface NewReminderProp{
    onAddReminder:(title: string)=> void;
}

 export default function NewReminder({onAddReminder}:NewReminderProp): JSX.Element{
    const [title, setTitle] = useState("");
    const submitForm = (e: React.FormEvent) => {
        e.preventDefault();
        if(!title) return
        onAddReminder(title);
        setTitle('')
    }


  return (
    <div>
      <form onSubmit={submitForm}>
        <label htmlFor="title">New Reminder</label>
        <input  id="title" type={title} onChange={(e) => setTitle(e.target.value)} className="form-control" />
        <button type="submit" className="btn btn-primary my-3">Add Reminder</button>
      </form>
    </div>
  )
}
