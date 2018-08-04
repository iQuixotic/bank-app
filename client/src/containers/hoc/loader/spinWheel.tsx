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

            this.componentWillReceiveProps = (nextProps: any) => {
                this.setState({ loading: nextProps.loading })
            }

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