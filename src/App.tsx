
import './App.css';
import ReminderList from './components/ReminderList';
import { Reminder } from './components/ReminderList';
import { useEffect, useState } from 'react';
import serviseReminder from './services/serviceReminder';
import NewReminder from "./components/NewReminder"
import serviceReminder from './services/serviceReminder';




function App() {

   const [reminder, setReminder] = useState<Reminder []>([
])
  
useEffect(() => {
   loadReminder();
}, [])

const loadReminder = async () => {
 const reminders = await serviseReminder.getReminder();
 setReminder(reminders)
};

const deleteReminder = (id: number) => {
    setReminder(reminder.filter((reminder)=> reminder.id !== id))
    console.log("removing...") 
};

const addReminder = async (title:string) =>{
 const newReminder = await serviceReminder.addReminder(title)
 setReminder([newReminder, ...reminder] ) // if you want exiting remiders [newReminder, ...reminder]
}
 
  return (
    <div className="App">
      <NewReminder onAddReminder={addReminder} />
      <ReminderList items={reminder} onRemove={deleteReminder}/>
    </div>
  );
}

export default App;
