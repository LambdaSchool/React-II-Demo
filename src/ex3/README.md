# A Styled Component

The two main ways in which styles can be added to React components are 

1. Via inline styles, as in right on the tag that you want to affect using the `style` attribute, or
2. Via CSS stylesheets

Let's show an example of the latter. Given a component, we can import the CSS stylesheet that we want to affect that component right at the top of the file with 
```
import './SomeStylesheet.css';
```
in order to have it apply to the component. Inside the stylesheet, you would still target tags using CSS selectors just as you have seen in previous lessons with HTML and CSS. 

When writing stylesheets for React components, it's common to give the style sheet the same name as the component you want it to apply to. We have a component called `StyledComponent` with the following code:
```
import React from 'react';
import './StyledComponent.css';

const StyledComponent = () => (
  <div className="image">
    <img src="http://www.thedancespots.com/wp-content/uploads/2017/01/Chicago-City-Ballroom.jpg" />
  </div>
);

export default StyledComponent;
```
`StyledComponent.css` is being imported at the top of the file. This CSS file has the following code:
```
.image img {
  height: 25em;
}
```
It is simply resizing the image tag contained within the div. 