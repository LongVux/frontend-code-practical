# A Practical Frontend Project by Nguyen Long Vu

This project uses [Create React App](https://github.com/facebook/create-react-app) to bootstrap the frontend code.

## How to Run the Project

To run the project in development mode, you need to execute the following command in the project directory:

### `npm start`

## Project Overview

### Components

This folder contains both dump and smart components that are used in the project.

### Services

This folder defines and handles the APIs calls using axios and axios.interceptor.

### Hooks

This folder implements the state management approach using React Context to manage big data that can be shared among many child components.

### Highlight Features

`LazyImage`: This is a component that displays images in a lazy way. It only fetches the img src when the component appears on the screen.

### Note

This project is a demonstration of my skills, knowledge, and experience in frontend development. It does not include unit tests. My testing strategy would be similar to this: start with testing the dump components, then the smart ones, then the pages, the services, and the hooks. I would use msw, react-testing-library and mock data to test every aspect of the logic.

### Discussion

`List of cards`: For this feature, I did consider using virtual scrolling to improve performance. However, this would cause `LazyImage` to make redundant APIs calls when a rendered card goes out of view and then comes back. If the data size increases in the future and pagination is not feasible, virtual scrolling would be the best option to display this list of cards.
