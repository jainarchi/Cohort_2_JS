# Redux Toolkit – Complete Beginner Documentation

## 1. Introduction

When React applications start growing, managing data becomes messy.

At first things look simple.  
A component holds some state.

Then that state needs to be shared with another component.  
So we pass it as props.

This is called **props drilling**.

Example flow:

App → Parent → Child → GrandChild

Even if only the GrandChild needs the data, we still pass it through every layer.

As applications grow, this becomes painful.

Problems start appearing:

- Too many props  
- Difficult debugging  
- State scattered everywhere  
- Hard to scale applications  

To solve this, developers started using centralized state management.

This is where **Redux** came in.

---

# 2. History of Redux

Redux was created in **2015** by:

- Dan Abramov  
- Andrew Clark  

Redux was inspired by the **Flux architecture** created at Facebook.

The main idea was simple:

Instead of storing state inside many components, keep **one central store for the entire application**.

Architecture:

Components → Dispatch Action → Store → Update State → UI Updates

Redux introduced three core principles.

---

## 1. Single Source of Truth

The entire application's state lives inside **one store**.

Example:

```javascript
store = {
  user: {},
  cart: [],
  theme: "dark"
}
```

Everything is stored in one place.

---

## 2. State is Read Only

You cannot modify the state directly.

Instead you send **actions**.

Example:

```javascript
dispatch({
  type: "ADD_TODO",
  payload: "Learn Redux"
})
```

---

## 3. Changes are made with Pure Functions

Redux uses **reducers** to update state.

Reducers are just functions.

Example:

```javascript
function reducer(state, action) {
  if(action.type === "ADD_TODO") {
    return {
      ...state,
      todos: [...state.todos, action.payload]
    }
  }
}
```

Reducers take:

current state  + action  = new state  

---

# 3. Problems with Classic Redux

Redux was powerful, but it had a big problem.

It required **too much boilerplate code**.

To create even a small feature you had to write:

- Action Types  
- Action Creators  
- Reducers  
- Store configuration  
- Middleware setup  

Example structure:

```
actions.js
actionTypes.js
reducers.js
store.js
constants.js
```

A small feature could require **100+ lines of code**.

Developers started complaining.

Redux became famous for being:

> "Powerful but painful."

This is where **Redux Toolkit** enters the story.

---

# 4. What is Redux Toolkit

**Redux Toolkit (RTK)** is the **official recommended way to write Redux logic today.**

It was introduced by the Redux team in **2019**.

Redux Toolkit simplifies Redux development and removes most of the boilerplate code.

Goal of Redux Toolkit:

- Make Redux easier  
- Make Redux safer  
- Make Redux faster to write  

Instead of writing many files manually, Redux Toolkit provides **utility functions that automatically generate the required logic**.

---

# 5. Why Redux Toolkit was Created

Redux Toolkit was created to solve these problems.

### Problem 1

Too much boilerplate.

**Solution**

RTK automatically generates actions and reducers.

---

### Problem 2

Complex store configuration.

**Solution**

RTK provides:

```
configureStore()
```

---

### Problem 3

Accidental state mutations.

**Solution**

RTK uses **Immer.js** internally.

---

### Problem 4

Async logic was confusing.

**Solution**

RTK provides:

```
createAsyncThunk()
```

---

### Problem 5

Too many libraries required.

**Solution**

RTK bundles the most important Redux tools together.

---

# 6. Core Idea of Redux Toolkit

Redux Toolkit follows the same Redux architecture.

```
Component
   ↓
Dispatch Action
   ↓
Reducer updates state
   ↓
Store updates
   ↓
UI re-renders
```

But Redux Toolkit **reduces the amount of code needed**.

---

# 7. Installation

Install Redux Toolkit and React Redux.

```bash
npm install @reduxjs/toolkit react-redux
```

Redux Toolkit already includes Redux internally.

So you **do not need to install redux separately**.

---

# 8. Important Concepts in Redux Toolkit

### 1. Store

The central place where all application state lives.

---

### 2. Slice

A slice represents a **portion of the state**.

Examples:

- userSlice  
- cartSlice  
- themeSlice  

Each slice contains:

- state  
- reducers  
- actions  

---

### 3. Reducer

A function that updates the state.

---

### 4. Action

An object describing what happened.

Example:

```javascript
{
 type: "cart/addItem",
 payload: item
}
```

---

### 5. Dispatch

A function used to send actions to the store.

---

### 6. Selector

A function used to read data from the store.

---

# 9. configureStore()

In classic Redux, creating a store required multiple steps.

Redux Toolkit simplifies it using **configureStore()**.

Purpose:

- Create store  
- Combine reducers  
- Enable Redux DevTools  
- Add middleware automatically  

Example:

```javascript
import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./counterSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})
```

Now the store is ready.

---

# 10. createSlice()

This is the **most important feature** of Redux Toolkit.

A slice combines:

- state  
- reducers  
- actions  

into a single place.

Example:

```javascript
import { createSlice } from "@reduxjs/toolkit"

const counterSlice = createSlice({
  name: "counter",

  initialState: {
    value: 0
  },

  reducers: {
    increment: (state) => {
      state.value += 1
    },

    decrement: (state) => {
      state.value -= 1
    }
  }
})

export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer
```

Redux Toolkit automatically generates:

- Action Types  
- Action Creators  
- Reducers  

---

# 11. How State Mutation Works (Immer)

In classic Redux, state must **never be mutated**.

❌ Wrong

```javascript
state.count += 1
```

✅ Correct

```javascript
return {
  ...state,
  count: state.count + 1
}
```

Redux Toolkit allows mutation-like syntax.

```javascript
state.count += 1
```

This works because Redux Toolkit uses **Immer.js** internally.

Immer converts mutation syntax into **immutable updates behind the scenes**.

---

# 12. Connecting Redux Toolkit with React

Redux works with React through **React Redux**.

React Redux provides:

- Provider  
- useDispatch  
- useSelector  

### Provider

Wrap the application.

```javascript
<Provider store={store}>
   <App />
</Provider>
```

### useDispatch()

Used to send actions.

```javascript
const dispatch = useDispatch()

dispatch(increment())
```

### useSelector()

Used to read state from store.

```javascript
const count = useSelector((state) => state.counter.value)
```

---

# 13. createAsyncThunk()

Redux Toolkit also handles **API requests and async operations**.

Examples:

- Fetch data from server  
- Login user  
- Load products  

Redux Toolkit provides:

```
createAsyncThunk()
```

It automatically generates:

```
pending
fulfilled
rejected
```

Flow:

```
fetchData
   ↓
pending
   ↓
success → fulfilled
error → rejected
```

Reducers can handle these states.

---

# 14. Folder Structure (Recommended)

A clean Redux Toolkit project structure:

```
src
├── app
│   └── store.js
│
├── features
│   └── counter
│       └── counterSlice.js
│
├── components
│
└── App.jsx
```

Each feature keeps its own slice.

This is called **feature-based architecture**.

---

# 15. Advantages of Redux Toolkit

### 1. Less Boilerplate

You write far less code compared to classic Redux.

### 2. Built-in Best Practices

Redux Toolkit automatically includes:

- Redux DevTools  
- Middleware  
- Immutable state checks  

### 3. Easier Async Logic

`createAsyncThunk()` simplifies API calls.

### 4. Better Project Structure

Slices keep related logic together.

### 5. Safer State Updates

Immer prevents accidental mutation.

### 6. Official Redux Standard

Redux Toolkit is now the **recommended way to use Redux**.

---

# 16. Redux vs Context API

Many beginners ask this question.

### Context API

Good for:

- Small applications  
- Theme management  
- Authentication state  
- Simple global data  

### Redux Toolkit

Better for:

- Large applications  
- Complex state  
- Multiple features sharing data  
- Predictable state updates  

---

# 17. Performance Benefits

Redux Toolkit improves performance by:

- Preventing unnecessary re-renders  
- Centralizing state updates  
- Enabling selective subscriptions through selectors  

React components only re-render when the **selected state changes**.

---

# 18. Redux DevTools

Redux DevTools allow developers to:

- See every action dispatched  
- Inspect state changes  
- Time travel debugging  
- Track bugs easily  

Redux Toolkit automatically enables DevTools in development.

---

# 19. When Should You Use Redux Toolkit

Redux Toolkit is useful when:

- Many components share the same data  
- State logic becomes complex  
- Application grows large  
- Debugging state becomes difficult  

---

# 20. Summary

Redux Toolkit is a modern **state management library built on top of Redux**.

It simplifies Redux development by reducing boilerplate and providing powerful utilities.

Key points:

- Redux was created in **2015**  
- Redux Toolkit was introduced in **2019**  
- Redux Toolkit is now the **official way to write Redux**  

Main tools provided by Redux Toolkit:

- `configureStore()`  
- `createSlice()`  
- `createAsyncThunk()`  
- Built-in middleware  
- Immer integration  

Redux Toolkit helps developers write **scalable, maintainable, and predictable state management logic**.