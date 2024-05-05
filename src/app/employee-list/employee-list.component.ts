import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees:Employee[];

  constructor(private employeeService:EmployeeService,private router:Router,private authService: AuthService) { }

  ngOnInit(): void {

     // Check if the user is logged in when the component initializes
     if (!this.authService.isLoggedIn) {
      // Redirect to login page if not logged in
      // You can also show a message or do something else here
      // For now, let's just redirect to login
      window.location.href = '/login';
    }

    this.getEmployees();

  }

  private getEmployees(){
    this.employeeService.getEmployeeList().subscribe(data=>{
      this.employees=data;
    })

    
  }
  updateEmployee(id:number){

    this.router.navigate(['update-employee',id])
  }

  // deleteEmployee(id:number){

  //   this.employeeService.deleteEmployee(id).subscribe( data => {
  //     console.log(data);
  //     this.getEmployees();
  //   })

  // }
  deleteEmployee(id: number): void {
    this.employeeService.deleteEmployee(id)
      .subscribe(data => {
        this.getEmployees();
        console.log('Item deleted successfully.');
        
        // Optionally, update component state or UI after deletion
      }, error => {
        console.error('Error deleting item:', error);
      });
  }
  employeeDetails(id:number){
    this.router.navigate(['employee-details',id])
  }

  logout(): void {
    this.authService.logout();
    // Redirect to login page after logout
    window.location.href = '/login';
  }
}
