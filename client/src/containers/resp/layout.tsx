import React, { Component } from "react";

// import components
import { Backdrop, Burger,  Sidedrawer, Toolbar } from "./../../components";

import './style.css';

interface IProps {
  children: any,
}

interface IState {
  isMobile: boolean,
  sideDrawerOpen: boolean
}

/* WRAPS PAGES 
- uses screen size to determine what to render
in regards to navigation */
class Layout extends Component<IProps, IState> {
  public constructor(props: IProps) {  
    super(props);
    this.state = {
      isMobile: false,
      sideDrawerOpen: false
    };

    this.updatePredicate = this.updatePredicate.bind(this);
    this.sideDrawerToggle = this.sideDrawerToggle.bind(this);
  }
  public componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  public componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  public updatePredicate() {
    this.setState({ isMobile: window.innerWidth > 600 });
  }

  public sideDrawerToggle = () => {
    const toggle: boolean = !this.state.sideDrawerOpen
    this.setState({ sideDrawerOpen: toggle })
    console.log(this.state.sideDrawerOpen)
  }

  public render() {
    const isMobile: boolean = this.state.isMobile;
    return (
            <div className='Layout'>
              {isMobile ? 
              <Toolbar /> : 
                (!this.state.sideDrawerOpen ?                  
                <div className='mobile-burger'><Burger size='3x' onClick={this.sideDrawerToggle}/></div>:
                <div onClick={this.sideDrawerToggle}><Sidedrawer/><Backdrop/><Sidedrawer /></div>                            
                )
              }
              <div className='under-nav' {...this.state} >
                {this.props.children}
              </div>
              <div className='above-footer' />              
            </div>          
    );
  }
}

export default Layout;