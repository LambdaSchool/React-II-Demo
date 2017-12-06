import React from 'react';
import { Navbar, Button } from 'react-bootstrap';

class BootstrapExample extends Component {
    constructor() {
      super();
      this.state = {
        input: ''
   }  
 }
    
handleInputChange = (e) => {
     console.log(this.state.input);
     this.setState({ input: ''});
    }
    
handleButtonClick = () => {
    console.log(this.state.input);
    this.setState({ input: '' });

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