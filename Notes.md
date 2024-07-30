* What is Redux?
=> Redux is a pattern and library for managing and updating application state, using events called "actions". It serves as a centralized store for state that needs to be used across your entire application, with rules ensuring that the state can only updated in a predictable fashion.

* REDUX Main Topics.
=>  1 Action - What to do?
    2 Reducer - How to do?
    3 Store - Object which holds the state of the application
    4 Functions associated with Store - createStore() 

1. Action(Pure Object): 
    - Actions are plain Javascript Objects that have a type field.
    - Actions only tell what to do, but they don't tell how to do.
For Ex: INCREMENT DECREMENT Counter 

- 1. Action Pure Object:👇🏻

1st- When user click on Increment button.
        return{
            type: "INCREMENT",
            payload: num
        }

2st- When user click on Decrement button.
        return{
            type: "DECREMENT",
            payload: num
        }


- 1.1. Action Creator: Pure function which creates an action
    
    export const incNumber=(num)=>{
         return{
            type: "INCREMENT",
            payload: num
        }
    }


2. Reducer:
    - Reducers are functions that take the current state and an action as arguments, and return a new state result.

For Example:
    const initialState = 0;

    const changeTheNumber =(state = initialState, action) => {
        switch (action.type) {
            case "INCREMENT": return state + action.payload;
            case "DECREMENT": return state - 1;
            default: return state;
        }
    }


3. Store:
    - The Redux store brings together the state, actions, and reducers that make up your app.
    - It's important to note that you'll only have a single store in a Redux application.
    - Every Redux store has a single root reducer function.

import {createStore} from "redux";

const store = createStore(rootReducers);


* Redux Principles:

1. Single source of truth:
    - The global state of your application is stored as an object inside a single store.

2. State is Read-Only:
    - The only way to change the state is to dispatch an action

3. Immutability, One-way data flow, Predictability of outcome

4. Changes are Made with pure reducer functions
