
import * as React from "react";

// // import components
import { 
    Input,
} from "../../components";

interface IState {
    hasInput: boolean
}

import './style.css';


class Account extends React.Component {
 public state: IState = {
     hasInput: true,
  }



 
  public render() {
    return (
      <div className='Account'>
        account here
        <Input 
        itype='input'
        label='yea'
        />
      </div>
    );
  }
}

export default Account;