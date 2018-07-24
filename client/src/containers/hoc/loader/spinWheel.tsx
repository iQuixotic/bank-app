import * as React from "react";

import { Layout } from '../../../containers';

import './style.css';


interface IState {
    allAcctsLen?: any
}

const Loader: any = (WrappedComponent: any) => {
    return class LoaderHOC extends React.Component <{allAcctsLength: any}>{
        public state: IState;
        public constructor(props: any) {
            super(props);
            this.state = {
                allAcctsLen: this.props.allAcctsLength,
            }
        }
        public render() {
            return (
                <Layout>
                    {
                        this.state.allAcctsLen < 2 ?
                        <div className="Loader"><div/><div/><div/><div/><div/><div/><div/><div/></div> : 
                        <WrappedComponent  {...this.props}/>
                    }
                </Layout>
            )            
        }
    }
}
 
export default Loader;