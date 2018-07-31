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

            // this.componentDidMount = () => {
            //     console.log('these are state', this.state)
            //     console.log('props', this.props)
            //     console.log('noothing')
            // }

            this.componentWillReceiveProps = (nextProps: any) => {
                console.log(nextProps)
                console.log(nextProps.loading)
                this.setState({ loading: nextProps.loading })
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