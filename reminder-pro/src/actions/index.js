import {ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS} from '../constants';


export const addReminder = (text, dueDate) =>{
    const action = {
        type: ADD_REMINDER,
            text,
            dueDate
    };
    console.log(action);
    return action;
};

export const deleteReminder = (id)=>{
    return {
        type: DELETE_REMINDER,
        id
    };
};

export const clearReminders = ()=>{
    return{
        type: CLEAR_REMINDERS
    }
};