import React, { Component } from 'react'
import './validate.css';
const regForEmail=RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
export class Application extends Component {
    constructor(props){
        super(props);
        this.state={
            firstname:null,
            lastname:null,
            fathername:null,
            mothername:null,
            email:null,
            age:null,
            city:null,
            country:null,
            address:null,
            pincode:null,
            caste:null,
            Profession:null,
            password:null,
            conpassword:null,
            mobile:null,
            errors:{
                firstname:'',
                lastname:'',
                fathername:'',
                mothername:'',
                email:'',
                age:'',
                city:'',
                country:'',
                address:'',
                pincode:'',
                caste:'',
                Profession:'',
                password:'',
                conpassword:'',
                mobile:''
            }
        }
    }
        handler=(event)=>{
            const {name,value}=event.target;
            let errors=this.state.errors;
            switch(name){
                case 'firstname':
                    errors.firstname=value.length<4?'first name must be more than 4 characters':'';
                    break;
                case 'lastname1':
                    errors.lastname=value.length<2?'lastname name must be atleast 2 characters':'';
                    break;
                case 'fathername':
                    errors.fathername=value.length<4?'fathername must be more than 4 characters':'';
                    break;
                case 'mothername':
                    errors.mothername=value.length<4?'mothername must be more than 4 characters':'';
                    break;
                case 'email':
                    errors.email=regForEmail.test(value)?'':'Email is not valid';
                    break;
                case 'age':
                    errors.age = (value <= 0 || value > 200)?'Enter age properly':'';
                    break;    
                case 'city':
                    errors.city=value.length<4?'city name should be more than 4 characters':'';
                    break;
                case 'country':
                    errors.country=value.length<4?'Country name should be more than 4 characters':'';
                    break;
                case 'address':
                    errors.address=value.length<8?'Address line must be more than 8 characters':'';
                    break;
                case 'pincode':
                     errors.pincode=value.length!==6?'pincode must be 6 chanrater long':'';
                    break;
                case 'caste':
                    errors.caste=value.length<4?'cast must be atleast 4 characters ':'';
                    break;
                case 'Profession':
                    errors.Profession=value.length<4?'Profession must be atleast 4 characters':'';
                    break;
                case 'password':
                        errors.password=value.length<8?'Password must be atleast 8 chanrater long':'';
                        break;
                case 'conpassword':
                        errors.conpassword=value!==this.state.password?'Password is not matched':'';
                        break;
                case 'mobile':
                        errors.mobile=value.length<10?'Mobile number should be 10 chanrater long':'';
                        break;
                default:        
                    break;
            }
            this.setState({errors,[name]:value},()=>{
                console.log(errors)
            })
        }
        formSubmit=(event)=>{
            event.preventDefault();
            if(this.validate(this.state.errors))
            {
                alert("Valid Form");
                this.setState({isSubmit: true});
            }
            else {
                alert("Invalid Form");
            }
         }
         validate=(errors)=>{
            let valid=true;
            Object.values(errors).forEach((val)=> val.length >0 && (valid=false));
            return valid;
        }
    render() {
        const {errors, isSubmit}=this.state;
        return (
            <div className="co ">
                 <h1 className="h mt-3 mb-3 text-white"> Application Form</h1>
            <div className="con container jumbotron" >
                <form onSubmit={this.formSubmit}>
                   <div className="row">
                <label className="col-lg-2" for="firstname">FirstName : </label> 
                <div className="col-lg-4 ">
            <input type="text" name="firstname" className="form-control " onChange={this.handler} required/> 
            {errors.firstname.length>0 && 
            <span style={{color:'red'}}>{errors.firstname}</span>}</div>
             <label className="col-lg-2" for="lastname">LastName : </label> 
             <div className="col-lg-4 ">
            <input type="text" name="lastname" className="form-control" onChange={this.handler} required/> 
            {errors.lastname.length>0 && 
            <span style={{color:'red'}}>{errors.lastname}</span>}<br/></div> </div>
            
            <div className="row">
             <label className="col-lg-2" for="fathername">FatherName : </label> 
             <div className="col-lg-4 ">
            <input type="text" name="fathername" className="form-control" onChange={this.handler} required/> 
            {errors.fathername.length>0 && 
            <span style={{color:'red'}}>{errors.fathername}</span>}</div>
             <label className="col-lg-2" for="mothername">MotherName : </label> 
             <div className="col-lg-4 ">
            <input type="text" name="mothername" className="form-control" onChange={this.handler} required/> 
            {errors.mothername.length>0 && 
            <span style={{color:'red'}}>{errors.mothername}</span>}<br/> </div>  </div>

            <div className="row">
            <label  className="col-lg-2" for="email">   Email : </label>
            <div className="col-lg-4 ">
           <input type="text" name="email" className="form-control"  onChange={this.handler} required/> {errors.email.length>0 && 
            <span style={{color:'red'}}>{errors.email}</span>}</div>
            <label  className="col-lg-2" for="age"> Age : </label>
            <div className="col-lg-4 ">
            <input type="number" name="age" className="form-control" onChange={this.handler} required/>
            {errors.age.length>0 && 
            <span style={{color:'red'}}>{errors.age}</span>}<br/></div></div>
            
            <div className="row">
             <label className="col-lg-2" for="city">City : </label> 
             <div className="col-lg-4 ">
            <input type="text" name="city" className="form-control" onChange={this.handler} required/> 
            {errors.city.length>0 && 
            <span style={{color:'red'}}>{errors.city}</span>} </div>
             <label className="col-lg-2" for="country">Country : </label> 
             <div className="col-lg-4 ">
            <input type="text" name="country" className="form-control" onChange={this.handler} required/> 
            {errors.country.length>0 && 
            <span style={{color:'red'}}>{errors.country}</span>}<br/></div> </div>
            
            <div className="row"> 
             <label className="col-lg-2" for="address">Address : </label> 
             <div className="col-lg-4 ">
            <input type="text" name="address" className="form-control " onChange={this.handler} required/> 
            {errors.address.length>0 && 
            <span style={{color:'red'}}>{errors.address}</span>}  </div>
            <label  className="col-lg-2" for="pincode"> Pincode : </label>
            <div className="col-lg-4 ">
            <input type="text" name="pincode" className="form-control" onChange={this.handler} required/>
            {errors.pincode.length>0 && 
            <span style={{color:'red'}}>{errors.pincode}</span>}<br/></div></div>
            
            <div className="row">
             <label className="col-lg-2" for="caste">Caste : </label> 
             <div className="col-lg-4 ">
            <input type="text" name="caste" className="form-control" onChange={this.handler} required/> 
            {errors.caste.length>0 && 
            <span style={{color:'red'}}>{errors.caste}</span>} </div>
              <label className="col-lg-2" for="Profession">Profession : </label> 
              <div className="col-lg-4 ">
            <input type="text" name="Profession" className="form-control" onChange={this.handler} required/> 
            {errors.Profession.length>0 && 
            <span style={{color:'red'}}>{errors.Profession}</span>}<br/></div> </div>

            <div className="row">
            <label  className="col-lg-2" for="password">Password : </label>
            <div className="col-lg-4 ">
            <input type="password" name="password"  className="form-control" onChange={this.handler} required/>
            {errors.password.length>0 && 
            <span style={{color:'red'}}>{errors.password}</span>}</div>
            <label  className="col-lg-2" for="conpassword"> Confirm Password : </label>
            <div className="col-lg-4 ">
            <input type="password" name="conpassword" className="form-control" onChange={this.handler} required/>
            {errors.conpassword.length>0 && 
            <span style={{color:'red'}}>{errors.conpassword}</span>}<br/></div></div>

            <div className="row">
            <label  className="col-lg-2" for="mobile">   Mobile : </label>
            <div className="col-lg-4 ">
          <input type="tel" name="mobile" className="form-control" onChange={this.handler} required/>
            {errors.mobile.length>0 && 
            <span style={{color:'red'}}>{errors.mobile}</span>}<br/></div></div>
            <input type="submit" value="Submit" className=" btn btn-primary" />
            </form>
                
            </div>
            {isSubmit?<table className="table table-stripped table-danger">
                    <thead><tr>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>FatherName</th>
                        <th>MotherName</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>City</th>
                        <th>Country</th>
                        <th>Pincode</th>
                        <th>Caste</th>
                        <th>Profession</th>
                        <th>Mobile</th>
                        <th>Phone number</th>
                        <th>Password</th></tr>
                    </thead>

                    <tbody>
                        <tr>
                        <td>{this.state.firstname}</td>
                            <td>{this.state.lastname1}</td>
                            <td>{this.state.fathername}</td>
                            <td>{this.state.mothername}</td>
                            <td>{this.state.email}</td>
                            <td>{this.state.age}</td>
                            <td>{this.state.city}</td>
                            <td>{this.state.country}</td>
                            <td>{this.state.pincode}</td>
                            <td>{this.state.caste}</td>
                            <td>{this.state.Profession}</td>
                            <td>{this.state.mobile}</td>
                            <td>{this.state.password}</td>
                        </tr>
                    </tbody>
                </table>:null}
            </div>
        )
    }
}

export default Application