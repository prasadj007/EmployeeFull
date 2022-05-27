import React, { Component } from 'react'
import EmployeeService from '../service/EmployeeService';

export default class UpdateEmployee extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          id:this.props.match.params.id,
          firstName:"",
          lastName:"",
          emailId:""
         
      }
      this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
      this.changeLastNameHandler=this.changeLastNameHandler.bind(this);
      this.changeEmailHandler=this.changeEmailHandler.bind(this);
      this.updateEmployee=this.updateEmployee.bind(this);
    }

        changeFirstNameHandler=(event)=>{
            this.setState({firstName: event.target.value});
        }
        changeLastNameHandler=(event)=>{
            this.setState({lastName:event.target.value});
        }
        changeEmailHandler=(event)=>{
            this.setState({emailId: event.target.value});
        }

        componentDidMount(){
            EmployeeService.getEmployeeById(this.state.id).then((res)=>{
                let employee=res.data;
                this.setState({firstName:employee.firstName,
                    lastName:employee.lastName,
                    emailId:employee.emailId})
            }) 
        }
        updateEmployee=(e)=>{
            e.preventDefault();
            let employee={firstName:this.state.firstName,lastName:this.state.lastName,emailId:this.state.emailId};
            console.log('employee =>'+JSON.stringify(employee));

            EmployeeService.updateEmployee(employee,this.state.id).then((res)=>{
                this.props.history.push('/employees')
            })
            
        }
        cancel(){
            this.props.history.push("/employees");
        }

  render() {
    return (
      <div>
       
          <div className='container'>
          <div className='row'>
              <div className='card col-md-6 offset-md-3 offset-md-3'>
                <h3 className='text-center'>Update Employee</h3>
                <div className='card-body'></div>

                    <form>
                        <div className='form-group'>
                            <label>First Name</label>
                            <input placeholder='Enter First Name' name="firstName" className='form-control'
                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                        </div>
                        <br></br>
                        <div className='form-group'>
                            <label>Last Name</label>
                            <input placeholder='Enter Last Name' name="lastName" className='form-control'
                                value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                        </div>
                        <br></br>
                        <div className='form-group'>
                            <label>Email ID</label>
                            <input placeholder='Enter Email Id' name="emailid" className='form-control'
                                value={this.state.emailId} onChange={this.changeEmailHandler}/>
                        </div>
                        <br></br>
                        <button className='btn btn-success' onClick={this.updateEmployee}>Save</button>
                        <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                    </form>
              </div>
          </div>

         </div>
      </div>
    )
  }
}

