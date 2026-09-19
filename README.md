# DevStack


A modern web application built to help developers browse, discover, and curate their own tech stack from a list of essential web development technologies.

---

## Deployment Links

* **GitHub Repository:** [DevStack](https://github.com/safoun10/a_05_dev_stack)
* **Live Site:** [DevStack](https://dev-stack-safoun.netlify.app/)

---

## Tech Stack

* **Frontend Framework:** React.js
* **Language:** JavaScript (ES6+)
* **Build Tool:** Vite
* **Styling & UI:** Tailwind CSS, DaisyUI
* **Notifications:** React-Toastify
* **Data Format:** Local JSON

---

## Key Features

* **Interactive Stack Management:** Users can add technologies to a custom sidebar stack, remove items individually, or clear the stack completely. The system prevents adding duplicate items.
* **Responsive Layout:** Features a fully adaptive interface with a sticky navigation bar, desktop-to-mobile menu transformations, and responsive grid system for technology cards.
* **Dynamic Data Rendering:** Technologies are fetched dynamically from a local JSON dataset, accompanied by active loading states and interactive toast notifications for user actions.

---

## Technical Questions & Answers

### 1. What is JSX, and why is it used in React?
JSX (JavaScript XML) is a syntax extension for JavaScript that allows HTML-like code to be written directly inside JavaScript files. It is used in React to make UI structures readable and maintainable by keeping markup and rendering logic together.

---

### 2. What is the difference between props and state?
* **Props:** Data passed from a parent component down to a child component. Props are read-only and cannot be mutated by the receiving component.
* **State:** Internal data managed within a component. Unlike props, state can change over time in response to user events, and updating state triggers a re-render of the component.

---

### 3. What does the `useState` hook do, and where did you use it in this project?
The `useState` hook allows functional components to declare and update local state variables. In this project, it is used to track:
* The list of loaded technologies (`technologies`).
* The items currently added to the user's stack (`stack`).
* The data fetching loading state (`isLoading`).

---

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
The `useEffect` hook handles side effects in functional components, such as data fetching or interacting with external APIs. In this project, it runs an asynchronous `fetch` call upon component mount to load the local technology dataset into application state.

---

### 5. Why does every item in a `.map()` list need a unique `key` prop?
React uses unique `key` props to track list items across re-renders. Keys allow React to identify which specific items have been modified, added, or removed, optimizing render performance by updating only changed DOM nodes.

---

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering displays different UI structures based on specific logical conditions. 

*Example:* Showing an empty state message when the stack array is empty versus rendering the selected items when `stack.length > 0`.

---

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
* **Parent to Child:** Data is passed down directly via props (e.g., `<TechCard item={technology} />`).
* **Child to Parent:** The parent passes a handler function as a prop to the child, which the child invokes with arguments