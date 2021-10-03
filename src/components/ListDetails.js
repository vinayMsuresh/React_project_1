import React, { Component } from 'react'

export class ListDetails extends Component { 
    constructor(props){
        super(props);
    this.emp=props.mylist;

    }
    render() {
       
        return (
            <div className="container-fluid">
              <h2 className="text-white pt-2 pb-2 bg-primary"> Emplyoee Details</h2>
              <table className="table  table-bordered" >
       <thead>
         <tr>
           <th>Employee ID</th>
           <th>Employee Name</th>
           <th>Mobile Number</th>
           <th>City</th>
           <th>Qualification</th>
         </tr>
       </thead>
       <tbody>
         {this.emp.map(pro=>
          <tr key={pro.Empid}>
            <td>{pro.Empid}</td>
            <td>{pro.empname}</td>
            <td>{pro.phone}</td>
            <td>{pro.city}</td>
            <td>{pro.Qualification}</td>
            </tr>)}
       </tbody>
     </table>
            </div>
        )
    }
}

export default ListDetails