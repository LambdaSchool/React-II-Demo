# React Component Lifecycle

A thorough walkthrough of React's lifecycle methods can be found at this article [here](https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1)

One important React concept we haven't touched on yet is the notion of a component's lifecycle. What does that even mean?

When we refer to the lifecycle of component, we're talking about when a component is added, or mounted onto the DOM tree, and conversely when it is removed, or unmounted, from the DOM tree. 

So when we first open our application in a browser, all of the components that are going to be rendered on the screen needed to be mounted onto the DOM. Likewise, when we leave the application, those components need to be unmounted from the DOM tree. Mounting and unmounting from the DOM are the most important milestones in a component's lifecycle, but it turns out there are other important milestones are useful. 

It turns out the base React `Component` class that we extend when we write a class component exposes certain lifecycle methods to the developer. We won't go over all of them, just the ones that are most relevant and useful. Refer to the linked article if you want to read about all of the available lifecycle methods.

The most important lifecycle method is one that you all are already familiar with: the good 'ol `render` method. We already know that the `render` method returns the HTML we specify in its body. What we aren't familiar with is when it is called. 

The first time a component's `render` function is after it has been mounted onto the DOM. After that, it is also called every time the component's state changes. In other words, every time we call `this.setState` in order to update a component's state object, the component re-renders in response to that state change. Even if there may not have been visible changes to the component on the screen, you can be sure that the render method was executed after a state change. 

The next important lifecycle method is `componentDidMount`. Like its name suggests, `componentDidMount` is called after the component has completed mounting and rendering, so it is called after the component's `render` method. This method's most common use case is to make API requests in order to fetch some data from an external source.

Another lifecycle method is `componentWillMount`, which is called right before a component actually starts the mounting process. At first glance, it may make more to put an API request inside this method, since any code in the body of a `componentWillMount` method will be called sooner than if it were placed inside a `componentDidMount` call. 

The main issue with making API requests from a `componentWillMount` call is that there is no guarantee that the API request will return its results after the component has already finished mounting. The request may very well return before mounting has finished, in which case there is actually nothing in place yet to receive that component. With `componentDidMount`, however, the component has already completed mounting, so there is no chance that the component won't be there to receive the data once the request comes back. 

Let's see an example using `componentDidMount`