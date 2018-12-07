import React,{ Component } from 'react';


const asyncComponent = (object) =>{

    const stateComponent = object.loadingComponent();
    return class extends Component{
        state = {
            component: stateComponent
        }


        componentDidMount(){
            object.importComponent()
                            .then(cmp=>{
                                //console.log("Async componet imports",cmp);
                                this.setState({
                                    component: cmp.default
                                })
                            })
        }

        render(){
            const C = this.state.component;
            console.log("props",this.props.hasOwnProperty('computedMatch'),object.props.computedMatch);
            let props = {...this.props};
            delete props["computedMatch"];
            let objectProps = { ...object.props };
            delete objectProps["computedMatch"];
            return C ? <C {...this.props} {...object.props} /> :null
        }

    }
}

export default asyncComponent;