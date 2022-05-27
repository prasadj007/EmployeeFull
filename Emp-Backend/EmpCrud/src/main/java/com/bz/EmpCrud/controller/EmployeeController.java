package com.bz.EmpCrud.controller;

import com.bz.EmpCrud.exception.EmployeeException;
import com.bz.EmpCrud.model.Employee;
import com.bz.EmpCrud.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3001/")
@RestController
@RequestMapping("/api/v1")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    //getEmployees
    @GetMapping("/employees")
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    @PostMapping("/createemp")
    public Employee createEmployee(@RequestBody Employee employee) {
        return employeeRepository.save(employee);
    }

    @GetMapping("/employees/{id}")
    public ResponseEntity<Employee> getEmpById(@PathVariable long id) {
        Employee employee = employeeRepository.findById(id).orElseThrow(() -> new EmployeeException("Employee not exist with id:" + id));
        return ResponseEntity.ok(employee);
    }

    @PutMapping("/employees/{id}")
    public ResponseEntity<Employee> updateEmp(@PathVariable long id, @RequestBody Employee employeedetails) {
        Employee employee = employeeRepository.findById(id).orElseThrow(() -> new EmployeeException("Employee not exist with id:" + id));

        employee.setFirstName(employeedetails.getFirstName());
        employee.setLastName(employeedetails.getLastName());
        employee.setEmailId(employeedetails.getEmailId());

        Employee updatedEmp = employeeRepository.save(employee);
        return ResponseEntity.ok(updatedEmp);
    }

    @DeleteMapping("/employees/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteEmp(@PathVariable ("id") long id){
        Employee employee = employeeRepository.findById(id).orElseThrow(() -> new EmployeeException("Employee not exist with id:" + id));
        employeeRepository.delete(employee);
        Map<String,Boolean> resp=new HashMap<>();
        resp.put("Deleted",Boolean.TRUE);
        return ResponseEntity.ok(resp);
    }
}


