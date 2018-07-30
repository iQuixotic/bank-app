import * as React from "react";

// import { Layout } from '../../../containers';

import './style.css';


interface IState {
    loading: boolean,
}


const Loader: any = (WrappedComponent: any) => {
    return class LoaderHOC extends React.Component<{ loading: boolean }>{
        public state: IState;
        public constructor(props: any) {
            super(props);
            this.state = {
                loading: this.props.loading,
            }

            this.componentDidMount = () => {
                console.log('these are state', this.state)
                console.log('props', this.props)
                console.log('noothing')
            }

            this.componentWillReceiveProps = (nextProps: any) => {
                this.setState({ loading: !this.state.loading })
                // const loading: boolean = this.state.loading;
                console.log('this is nextprops', nextProps)
                console.log('these are props', this.props)
                console.log('this state ', this.state)         
            }

            // this.componentWillUnmount = () => {
            //     this.setState({ loading: !this.state.loading })   
            //     console.log('this state ', this.state)         
            // }
            
            // this.componentDidUpdate = () => {
            //     const loading = this.state.loading;
            //     this.setState({ loading: !loading })      
            // }

        }
        public render() {
            return (
                this.state.loading ?
                <div className="Loader"><div /><div /><div /><div /><div /><div /><div /><div /></div> :
                <WrappedComponent  {...this.state} {...this.props} />

            )
        }
    }
}

export default Loader;