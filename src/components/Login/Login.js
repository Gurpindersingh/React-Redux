import React, {PropTypes} from 'react';  
import Nave from '../common/navbar';
import {Grid, Row, Col, Form, FormGroup, FormControl, ControlLabel, Button, Alert} from 'react-bootstrap';
import * as action from '../../actions/loginAction';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'; 
class Login extends React.Component {

    constructor(props){
        super(props);
         this.submitData = this.submitData.bind(this);
         this.onChange = this.onChange.bind(this);
         this.state = {
         }
          
    }

    handleSubmit(event) {
        // const username = findDOMNode(this.refs.username)
        // const password = findDOMNode(this.refs.password)
        // const creds = { username: username.value.trim(), password: password.value.trim() }
        // this.props.onLoginClick(creds)
    }

     onChange(event) {
    // const field = event.target.name;
    // const credentials = this.state.credentials;
    // credentials[field] = event.target.value;
    // return this.setState({credentials: credentials});
  } 


    submitData(event) {
        event.preventDefault();
        let  data  = {email: this.email.value, password: this.password.value}
        
        //const credentials = this.state.credentials;
        //this.setState({credentials:{}})
        //console.log(this.state.credentials)
      //  let {email, password} = this.state; 
        //let { loginError} = this.props 

        this.setState({data: data}, function () {
          console.log(this.state.data);
          this.props.actions.fetchData(this.state.data);
});
        
    }

   

    render() {

        let {loginError} = this.props;
        return (
<Grid>
    <Row className="show-grid">
    
     <Col  md={6} mdOffset={3} className="login">
    
  <Form horizontal className="form-group">
    <FormGroup controlId="formHorizontalEmail">
    
      <Col componentClass={ControlLabel} sm={2}>
        Email
      </Col>
      <Col sm={6}>
        <FormControl type="email" placeholder="Email"  inputRef={(ref) => {this.email = ref}} 
        onChange={this.onchange}/>
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalPassword">
      <Col componentClass={ControlLabel} sm={2}>
        Password
      </Col>
      <Col sm={6}>
        <FormControl type="password" inputRef={(ref) => {this.password = ref}}  
        onChange={this.onchange} placeholder="Password" />
      </Col>
    </FormGroup>

    

    <FormGroup>
      <Col smOffset={2} sm={10}>
        <Button onClick={this.submitData} type="submit">
          Sign in
        </Button>
      </Col>
    </FormGroup>
    

  {loginError && <Alert bsStyle="danger">{loginError} </Alert>}  
 

    
  </Form>
    </Col>
           </Row>
         
           </Grid>
   
        )
    }
}


const mapStateToProps = (state) => { 
  debugger;
   return { 
     loginError: state.login.loginError
  };
} 

function mapDispatchtoProps(dispatch){
    return{
        actions: bindActionCreators(action, dispatch) 
    }
}


export default connect(mapStateToProps, mapDispatchtoProps)(Login)

