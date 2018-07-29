import * as React from "react";

// import { Layout } from '../../../containers';

import './style.css';


interface IState {
    balance: number,
}


const Loader: any = (WrappedComponent: any) => {
    return class LoaderHOC extends React.Component<{ balance: number }>{
        public state: IState;
        public constructor(props: any) {
            super(props);
            this.state = {
                balance: 0,
            }

            this.componentWillReceiveProps = (nextProps: any) => {
                // const loading: boolean = this.state.loading;
                console.log(nextProps)
                console.log('these are props', this.props)
                // console.log('these are props', nextProps)
                // this.setState({ loading: !loading })

                console.log('these are props', this.state)
            }

            this.componentDidUpdate = () => {
                // const loading = this.state.balance;
                console.log('these are props', this.props)
                // console.log('these are props', nextProps)
                console.log('these are props', this.state)
                console.log('these are props', this.state)              
                this.setState({ balance: this.props.balance })

            }
            
            // this.componentDidUpdate = () => {
            //     const loading = this.state.loading;
            //     console.log('these are props', this.props)
            //     // console.log('these are props', nextProps)
            //     console.log('these are props', this.state)
            //     this.setState({ loading: !loading })
            //     console.log('these are props', this.state)                
            // }
        }
        public render() {
            return (

                    this.state.balance === 0 ?
                    <div className="Loader"><div /><div /><div /><div /><div /><div /><div /><div /></div> :
                    <WrappedComponent  {...this.state} {...this.props} />

            )
        }
    }
}

export default Loader;