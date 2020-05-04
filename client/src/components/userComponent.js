import React from 'react';

class UserComponent extends React.Component{

    state ={ calling :false }

    callTheUser=()=>{
        this.setState({calling:true});
        this.props.onClick(this.props.id);
    }
    render(){
        console.log("these are the props of user compoennt",this.props)
        let output; 
        if(this.state.calling===true){
            output = (<button onClick={()=>this.setState({calling :false})} >Cancel the Call</button>)
        }else{
            output =(<button onClick={this.callTheUser} >Call the User</button>)
        }
        return(
            <div>
                <span>{this.props.id}</span>
                {output}
               
            </div>
        )
    }
}
export  default UserComponent;