import React, {PropTypes} from 'react';  
import Nave from '../common/navbar';
import Gride from '../common/grid';
import {Grid, Row, Col, Form, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';
import * as action from '../../actions/loginAction';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'; 
class Home extends React.Component {

    //constructor(){
        // super();
        //  this.submitData = this.submitData.bind(this);
        //  this.state = {credentials: {email: "gurpinder.pu@gmail.com", password: "123"}}
   // }

    handleSubmit(event) {
        // const username = findDOMNode(this.refs.username)
        // const password = findDOMNode(this.refs.password)
        // const creds = { username: username.value.trim(), password: password.value.trim() }
        // this.props.onLoginClick(creds)
    }

    submitData(event) {
    //   debugger;
    //     event.preventDefault();
    //     this.props.actions.fetchData(this.state.credentials);
    }

   

    render() {

        
        return (
            <div>
            <Nave/>
            <Gride/>
</div>
   
        )
    }
}


function mapDispatchtoProps(dispatch){
    return{
        actions: bindActionCreators(action, dispatch) 
    }
}
export default connect(null, mapDispatchtoProps)(Home)

