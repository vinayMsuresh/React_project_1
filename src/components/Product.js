
import React, { Component } from 'react'
import data from '../Product.json';
import Cart from './Cart';

class Product extends Component {
    constructor(props){
        super(props);
        this.state = {proData:[], count: null, isCart: false}
    }
    componentDidMount(){
        if(localStorage.getItem('mycart')!=undefined){
        var arr = JSON.parse(localStorage.getItem('mycart'));
        this.setState({
           count: arr.length
        });
         }
        this.setState({
            proData: data.Product
        });
    }
    addCart = (id)=>{
        if(localStorage.getItem('mycart')!=undefined){
            let arr = JSON.parse(localStorage.getItem('mycart'));
            if(arr.find(x => x.id == id) != undefined){
                let ind = arr.findIndex(x => x.id === id);
                arr[ind] = {id: id,quantity:arr[ind].quantity + 1};
                localStorage.setItem('mycart',JSON.stringify(arr));
                alert("Product quantity is incremented");
            }
            else{
            arr.push({id:id, quantity:1});
            localStorage.setItem('mycart',JSON.stringify(arr));
            alert("Product added to cart")
            this.setState({
               count: arr.length
            });
        }
            
        }
        else{
            let arr = [];
            arr.push({id:id, quantity:1});
            localStorage.setItem('mycart',JSON.stringify(arr));
            alert("Product added to cart")
            this.setState({
                count: arr.length
             });
             
        }
    }

    setCart=(event)=>{
        this.setState({
            isCart: true
        })
    }

    setHome=(event)=>{
        this.setState({
            isCart: false
        })
    }
    render() {
        return (
            <div className="container-fluid">
                <nav className="nav">
                <a className="nav-link active" href="#" onClick={this.setHome.bind(this)}>Home</a>
            <a className="nav-link" href="#">About</a>
            <a className="nav-link" href="#" onClick={this.setCart.bind(this)}>Cart {this.state.count!= null && <span className="btn btn-primary btn-sm"> {this.state.count}</span>}</a>
                <a className="nav-link" href="#">Contact us</a>
                </nav>
                {this.state.isCart ? <Cart />:
                <>
 <h1 className="bg-info mt-3">LATEST PRODUCTS</h1>
                <div className="row">
        {this.state.proData.map((data) => {
          return (
                    <div className="col-lg-4" key={data.pid}>
                <div className="card mt-3">
               <img className="card-img-top" src={`images/${data.images}`} width="500px" height="200px" alt="Card image cap"/> 
                <div className="card-body">
                    <div className="card-title"><h2>Name: {data.pname}</h2></div>
                    <hr /><div className="card-text"><h4>
                    Price: {data.price}</h4>
                    <button type="button" className="btn btn-primary" onClick={()=>this.addCart(data.pid)}>Add to cart</button></div>
                </div></div></div>
            
          );
        })}
      </div>
               </> }</div>
        )
    }
}

export default Product
