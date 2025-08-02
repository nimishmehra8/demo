import { createSlice, nanoid } from '@reduxjs/toolkit'
//store ka logics ismae aayega
export const taskList = createSlice({
    name: 'tasks',
    initialState: {
        items: [],
        filters: 'all'
    },
    reducers: {
        // functions k name and logics
        addTask: {
            reducer: (state, action) => {
                state.items.push(action.payload)
            },
            // task ko add krne se pehle prepare karega define format
            prepare: (text) => {
                return {
                    payload: {
                        id: nanoid(),
                        text,
                        completed: false

                    }
                }
            }
        },

        // another function jo check karega items array me tasks if tasks completed then change into the incompleted
        toggleTask: (state, action) => {
            const task = state.items.find(tasks => tasks.id === action.payload);
            if (task) task.completed = !task.completed;
        },
        // if tasks find in items array then delete  
        deleteTask: (state, action) => {
            state.items = state.items.filter(task => task.id !== action.payload);
        }, 
        // apply different types of the filters based on the users request
        setfilters: (state, action) => {
            state.filters = action.payload
        }
    }
})
// export functions of the reducers 
export const { addTask, toggleTask, deleteTask, setfilters } = taskList.actions;
// export slice
export default taskList.reducer; 
