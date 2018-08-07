import * as React from "react";

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
                this.setState({ loading:true})
            }
        }

        public render() {
            return (
                this.state.loading ?
                <div id='first'><div className="Loader">loading...<div /><div /><div /><div /><div /><div /><div /><div /></div></div> :
                <WrappedComponent  {...this.state} {...this.props} />

            )
        }
    }
}

export default Loader;