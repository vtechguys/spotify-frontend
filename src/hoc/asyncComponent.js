import React,{ Component } from 'react';


const asyncComponent = (importComponent) =>{
    return class extends Component{
        state = {
            component: null
        }


        componentDidMount(){
            importComponent()
                            .then(cmp=>{
                                console.log("Async componet imports",cmp);
                                this.setState({
                                    component: cmp.default
                                })
                            })
        }

        render(){
            const C = this.state.component;
            console.log("props",this.props);
            return C ? <C {...this.props} /> :null
        }

    }
}
export default asyncComponent;