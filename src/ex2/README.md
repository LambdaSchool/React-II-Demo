# A React-Bootstrap Example

React-Bootstrap link [here](https://react-bootstrap.github.io/)

If you've ever heard of or used the Bootstrap library before to quickly prototype the UI of an application, then you know how useful of a tool it is. 

There also exists a library called React-Bootstrap that completely re-implements most of the Bootstrap components from the groud up using React. This allows us then, when working in a React context, to achieve the same theme of Bootstrap by simply importing the React-Bootstrap components we want to use, and dropping them right into our React code.

In order to get React-Bootstrap up and running, we'll to npm install it with `npm install --save react-boostrap`. Additionally, we'll also need to incorporate the CSS stylesheets that are necessary in order for React-Bootstrap components be themed and styled properly. This is a simple matter of copy and pasting these two links into the head of your `index.html` file:
```
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css">
```

Once those two steps have been completed, we can now import individual React-Bootstrap components into any component file we want to use them in. 

Here's an example:
```
import React from 'react';
import { Navbar, Button } from 'react-bootstrap';

const BootstrapExample = () => (
    <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="#">React Bootstrap Example</a>
            </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Form pullLeft>
            <input type="text" placeholder="Bootstrap Input" />
            <Button type="submit">Submit</Button>
        </Navbar.Form>
    </Navbar>
);

export default BootstrapExample;
```

The `Navbar` and `Button` components are imported from the `react-bootstrap` library at the top of the file, and then dropped straight into our component's `render` function, just like any other HTML component we would use. 


