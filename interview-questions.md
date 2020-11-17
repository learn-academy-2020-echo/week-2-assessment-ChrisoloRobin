# ASSESSMENT 2: Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

1. Why would you use the method super()?

  Your answer: Super is used in a constructor, required by React

  Researched answer: Super() will calls the constructor of its parent class. This is required when you need to access some variables from the parent class. In React, when you call super with props. React will make props available across the component through this.props .



2. What is a virtual DOM?

  Your answer: A part of react, i cant remember exactly

  Researched answer: The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation.



3. When creating a basic (stateless) class component in React, what are the necessary elements needed to display "Hello World" in the browser?

  Your answer: I'm not sure.

  Researched answer:



4. What is JSX?

  Your answer: JSX is a coding language used in React that is a hybrid of JavaScript and html

  Researched answer: JSX is a syntax extension to JavaScript. It's used with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript.





5. What is state in React?

  Your answer: State is an component used in React to help render specified outcomes

  Researched answer: State is an object that stores a component's dynamic data and determines how the component renders and behaves.

  To make a component dynamic, the value of state must often be changed by the application. To change the value of state we use a JavaScript method called setState(). You should never manipulate this.state directly. The React DOM will re-render every time you call setState and update the component.



6. STRETCH: What is hoisting in JavaScript?

  Your answer:

  Researched answer: In JavaScript, a variable can be declared after it has been used.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

- React lifecycle methods
- React props
- event.preventDefault()
- DOM events
- MVC
