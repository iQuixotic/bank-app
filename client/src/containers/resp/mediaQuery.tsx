import React, { Children, Component } from "react";

interface IProps {
    childNum?: number,
    children?: any,
    cn?: string,
    
    div: any,
    // size: number,
    fullSize?: any,
    mobileSize?: any,
}

interface IState {
    childNum: number,
    screenSize: number,
    sideDrawerOpen: boolean
}

class MediaQuery extends Component<IProps, IState> {
    public constructor(props: IProps) {
        super(props);
        this.state = {
            childNum: this.props.childNum ? this.props.childNum : 0,
            screenSize: window.innerWidth,
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
        this.setState({ screenSize: window.innerWidth });
        console.log(this.state.screenSize)
    }

    public sideDrawerToggle = () => {
        const toggle: boolean = !this.state.sideDrawerOpen
        this.setState({ sideDrawerOpen: toggle })
        console.log(this.state.sideDrawerOpen)
    }

    public render() {
        return (
            <div>  
                `${<this.props.div/>}`
                {this.state.screenSize < 600 ?
                this.props.mobileSize :
                (Children.toArray(this.props.children)[this.state.childNum])
                }                              
            </div>
        );
    }
}

export default MediaQuery;