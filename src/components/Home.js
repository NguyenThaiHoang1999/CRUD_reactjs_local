import React, { Component } from 'react';
import "./style.css";
// import Room from './Room';
import { Link } from 'react-router-dom';


 class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            rooms: localStorage.getItem('rooms')?JSON.parse(localStorage.getItem('rooms')):[]
        }
        this.ondelete = this.ondelete.bind(this);
    }
    ondelete(id){
        
        // event.preventDefault();
         var products = this.state.rooms;
         const found = products.find(element => element.id === id);
         products.splice(products.indexOf(found),1);
        localStorage.setItem('rooms',JSON.stringify(products));
        this.setState({rooms: JSON.parse(localStorage.getItem('rooms'))});
        
        console.log(products)
        
      }

    formatNumber(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
      }
    
    render() {
        return (
            <div class="container-fluid">
                <div className="row home">
                    {this.state.rooms.map((item)=>
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 item">
            <div className="card">
              <img className="card-img-top img" src={item.image} alt=""/>
              <div className="card-body">
                <h5 className="card-title">{item.name}
                </h5>
                <p class="card-text text">PHONG 
               <span className="span-text">{item.name}</span>
                </p>
                <p class="card-text text">CHO NGHI 
               <span className="span-text">{item.number}Nguoi lon</span> 
                </p>
                <p class="card-text text">KICH THUOC 
               <span className="span-text">{item.area}m<sup>2</sup></span>
                </p>
                <p class="card-text text">GIA PHONG 
               <span className="span-text">{this.formatNumber(item.price)} vnd</span>
                </p>
                {item.oldprice>=item.price &&<p class="card-text text">GIA CU 
               <span className="span-text-old">{this.formatNumber(item.oldprice)} vnd</span>
                </p>}
                <p class="card-text">XEM 
               <span className="span-text-book"><Link className="btn span-text-book" to={"/update/"+item.id} role="button">update</Link></span>
               <span className="span-text-book"><button onClick={()=>this.ondelete(item.id)}>Delete</button></span>
                </p>
              </div>
            </div>
              </div>   
              )}
                </div>
                
            </div>
          
            
        );
    }
}
export default Home;

