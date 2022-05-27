import React, { Component } from 'react';
import EmployeeService from '../service/EmployeeService';


class ListEmployees extends Component {
    constructor(props) {
        super(props)

        this.state= {
            employeedb: []
        } 
        this.addEmployee = this.addEmployee.bind(this)
        this.editEmployee=this.editEmployee.bind(this)
       this.deleteEmployee=this.deleteEmployee.bind(this)
       this.viewEmployee=this.viewEmployee.bind(this)
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res)=>{
            this.setState({employeedb: res.data})
        });
    }
    addEmployee(){
        this.props.history.push('/add-employee/-1');
    }
    editEmployee(id){
        this.props.history.push(`/add-employee/${id}`)
    }
    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then((resp)=>{
            this.setState({employeedb: this.state.employeedb.filter(employee =>employee.id !== id)});
        })
    }
    viewEmployee(id){
        this.props.history.push(`/view-info/${id}`)
    }
    

    render() {
        return (
            <div>
                <h1 className="text-center">Employee List</h1>
                <button className='btn btn-primary' onClick={this.addEmployee}>Add Employee</button>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                            <th>Employee First Name</th>
                            <th>Employee Last Name</th>
                            <th>Employee Email Id</th>
                            <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employeedb.map(employee =>
                                    <tr key ={employee.id}>
                                        <td>{employee.firstName} </td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.emailId}</td>
                                        <td>
                                            <button onClick={()=>this.editEmployee(employee.id)} className="btn btn-info">Update</button>
                                            <button style={{marginLeft:"10px"}} onClick={()=>this.deleteEmployee(employee.id)} className="btn btn-danger">Delete</button>
                                            <button  style={{marginLeft:"10px"}} onClick={()=>this.viewEmployee(employee.id)} className="btn btn-info">View</button>


                                        </td>
                                    </tr> 
                                )
                                }
                                
                                
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}



export default ListEmployees;