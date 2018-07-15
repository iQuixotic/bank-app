
import * as React from "react";

// // import components
import { 
  Container,
  Toolbar,
 } from "../../components";

// // import containers
import { 
  Account,
} from "../../containers";

import './style.css';


class Main extends React.Component {
  public state = {
  }


// selectFieldHandler = () => {
//   console.log('hellow')
// }

// inputChangeHandler = event => {
//   console.log('hello')
// }

// formSubmitHandler = () => {
// }
 
  public render() {
    return (
      <div className='Main'>
        <Toolbar />
          <Container>
            <Account />
          </Container>
      </div>
    );
  }
}

export default Main;

