## ReadList Application
![alt text](image-1.png)

We are using `json-server` to simulate a REST API for our application. `json-server` provides a quick and simple way to create a fake RESTful server for development and testing purposes.

To start the json-server, you need to install it first. You can do this globally with the following command:

React App Running
```bash
pnpm install
pnpm run dev
```

Running Server
```bash
pnpm run server
```

## Things Revised and Learned

### useState

Let's Assume my application has following hiearchy.

![alt text](image.png)
useState is used whenever we want to take control of the changing thing in our hand. 

Typical Syntax:
```
import { useState } from 'react';

const [variable, setvariable] = useState(someInitialization);

```
We use the first as our variable and to change the state of the variable we can use setVariable method. eg:

```
setVariable(newchangedthing)
```

### useEffect

`useEffect` is a hook provided by React that allows you to perform side effects in your components. Side effects could be anything from data fetching, subscriptions, or manually changing the DOM. `useEffect` runs after every render by default, but you can control when it runs by passing an array of dependencies.

Typical Syntax:
```javascript
import { useEffect } from 'react';

useEffect(() => {
  // Your side effect here
}, []);
```
Three Simple Cases to consider.
#### Case I
It renders automatically when the component rerenders everytime.
```javscript
useEffect(()=>{

})
```
#### Case II
It renders only once the component re-renders.
```javscript
useEffect(()=>{
    
}, [])
```
#### Case III
It renders depending on the state variable or something that put put into when we want to update something based upon.
```javscript
useEffect(()=>{
    
}, [somestate or some function/s])
```

### createContext and useContext
 * createContext and useContext are React hooks used for managing global state in a React application.
 * createContext is used to create a context object that can be accessed by child components. It takes an optional initial value as a parameter and returns a Provider and a Consumer component.
 * useContext is used to access the value provided by the nearest context provider in the component tree. It takes the context object as a parameter and returns the current context value.
 * Example usage:
```javascript
 // Create a context
 const MyContext = createContext();
  
 // Provide a value to the context
 <MyContext.Provider value={myValue}>
    <ChildComponent />
 </MyContext.Provider>
  
 // Access the context value in a child component
 const myValue = useContext(MyContext);
  
 //returns {Object} An object containing the Provider and Consumer components.
 ```

### useCallback
useCallback is another hook provided by React. It returns a `memoized` version of the callback function that only changes if one of the dependencies has changed. It's useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders. 

Typical Syntax:
```javascript
import { useCallback } from 'react';

const memoizedCallback = useCallback(() => {
  // Your callback here
}, [dependencies]);
```
Example Usage:
```javascript
fetchBooks = async ()=>{
    const response = await axios.get(url);
    return response.data;
}
//In some component
useEffect(()=>{
    fetchBooks();
}, [])
/* when we use that inside he useeffect the eSLint will through us some kind of error or warning saying we must pass something to the dependencies array so when we put something like */
useEffect(()=>{
    fetchBooks();
}, [fetchBooks])
/* It will introduce us with a infinite loop because the fetchBooks is being called everytime when the fetchBooks changed. So, to solve this we can use useCallback.
changing the fetch function to this solves the issue.
*/
fetchBooks = useCallback(async ()=>{
    const response = await axios.get(url);
    return response.data;
}, [])
```

Since it's a booklist application so, as we can see in the above image the user must be able to:
- Create the Book
- Edit the Book
- Delete the Book
- View the Book List

So we have components related to that, if we figure out carefully we need state in the App Component for saving the list of books. 
- App 
    - App Component is the component where our app starts after the main component. In app component we need to create states so that we can share it easily in between the different components. We are using context to add all the functionalities so that we don't have to pass down props. eg: if the bookedit require some updateBook function defined on the App then the App component should pass it all the way down to the Edit through BookList->BookShow.
    
- BookCreate
    - BookCreate is a component and we need to use state management so that we can pass the latest updated book title we want to add while the user clicks on the submit button. To acheive this we are going to call the updateBook function which is defined on the App component.

- BookEdit
    - The `BookEdit` component is responsible for editing the title of an existing book. It needs to manage the state of the input field that the user interacts with to change the book's title. When the user submits the form, `BookEdit` should call the `updateBook` function from the context, passing the ID of the book and the new title. This function is defined in the `App` component and shared through context, so `BookEdit` doesn't need to receive it as a prop.

- BookShow
    - The `BookShow` component is responsible for displaying the title of a book and providing options to edit or delete the book. It doesn't need to manage any state itself, but it does need to call the `deleteBook` and `updateBook` functions when the user clicks the corresponding buttons. These functions are defined in the `App` component and shared through context, so `BookShow` doesn't need to receive them as props. When the user clicks the 'Edit' button, `BookShow` should render the `BookEdit` component and pass the current book as a prop.