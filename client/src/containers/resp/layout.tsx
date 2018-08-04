import React, { Component } from "react";

// import components
import { Backdrop, Burger,  Sidedrawer, Toolbar } from "./../../components";

import { Loader, MQ } from "./../../containers";


// import { MOBILE } from "./../../utils";


import './style.css';
// import mobile from "../../utils/helpers/mobile";

interface IProps {
  children: any,
}

interface IState {
  sideDrawerOpen: boolean
}

/* WRAPS PAGES 
- uses screen size to determine what to render
in regards to navigation */
class Layout extends Component<IProps, IState> {
  public constructor(props: IProps) {  
    super(props);
    this.state = {
      sideDrawerOpen: false
    };
    this.sideDrawerToggle = this.sideDrawerToggle.bind(this);
  }

  public sideDrawerToggle() {
    const toggle: boolean = !this.state.sideDrawerOpen
    this.setState({ sideDrawerOpen: toggle })
  }

  public render() {
    return (
            <div className='Layout'>
              <MQ lowerLimit={600}>
                <Toolbar /> 
              </MQ>
              <MQ upperLimit={599}>
                {!this.state.sideDrawerOpen ?                  
                <div className='mobile-burger'><Burger size='3x' onClick={this.sideDrawerToggle}/></div> :
                <div onClick={this.sideDrawerToggle}><Sidedrawer/><Backdrop/><Sidedrawer /></div>                            
                }
              </MQ>
              }
              <div className='under-nav'>
                {this.props.children}
              </div>
              <div className='above-footer' />              
            </div>          
    );
  }
}

export default Loader(Layout);