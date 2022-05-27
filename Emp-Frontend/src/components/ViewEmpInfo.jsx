import React, { Component } from 'react'
import EmployeeService from '../service/EmployeeService'

export default class ViewEmpInfo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         id:this.props.match.param.id,
         employee:{}
      }
    }componentDidMount(){
        EmployeeService.getEmployeeById().then((res=>{
            this.setState({employee:res.data})
        }))
    }


  render() {
    return (
      <div>
         <div className='card col-md-6 offset-md-3'>
             <h3 className='text-center'>View Employee Details</h3>
             <div className='card-body'>
            <div className='row'>
                <label>Employee First Name</label>
                <div>{this.state.employee.firstName}</div>
            </div>

             </div>

         </div>
          </div>
    )
  }
}
