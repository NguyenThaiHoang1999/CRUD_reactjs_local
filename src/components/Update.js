import React, { Component } from 'react';

class Update extends Component {
    constructor(props){
        super(props);
        this.state={
            product: {
           
            }
        }
        this.update=this.update.bind(this);
        this.changeName=this.changeName.bind(this);
        this.changePrice=this.changePrice.bind(this);
        this.changeImage=this.changeImage.bind(this);
        this.changeArea=this.changeArea.bind(this);
        this.changeOldPrice=this.changeOldPrice.bind(this);
        this.changeTypeRoom=this.changeTypeRoom.bind(this);
    
    }
    
    
    update(event){

        // var {product}=this.state;
        var products = localStorage.getItem('rooms')?JSON.parse(localStorage.getItem('rooms')):[];

        //  var  found = products.find(element => element.id ==this.state.product.id);
        //  found=this.state.product;
         
       for(var i=0; i<products.length;i++){
           if(products[i].id===this.state.product.id){
               products[i]=this.state.product;
           }
       }
    //    products.forEach(element => {
    //        if(element.id===this.state.product.id){
    //            element=this.state.product;
    //            console.log(element.price);
    //        }
    //    });
        alert('Product '+products.name+' has been updated successfuly');
        // document.getElementById('preImg').src="";
        localStorage.setItem('rooms',JSON.stringify(products));

        event.preventDefault();
        document.getElementById('navHome').click();
    }
    componentDidMount(){
         var products = localStorage.getItem('rooms')?JSON.parse(localStorage.getItem('rooms')):[];
        const found = products.find(element => element.id ==this.props.match.params.id);

        console.log(found);


        this.setState({product: found});
    }
    render() {
        var product=this.state.product;
        console.log(product)
        return (
            <div className="container home">
                <form method="post" onSubmit={this.update} >
                     <div className="form-group"> 
                       <label style={{fontSize:"20px", fontWeight:"bold"}} >Name</label>
                       <input type="text" className="form-control" value={product.name} onChange={this.changeName} name="name" required />
                     </div>
                     <div className="form-group"> 
                       <label style={{fontSize:"20px", fontWeight:"bold"}} >Area</label>
                       <input type="number" min="1" className="form-control" value={product.area} onChange={this.changeArea} name="area" required />
                     </div>
                     <div className="form-group">
                       <label  style={{fontSize:"20px", fontWeight:"bold"}} value={product.style} onChange={this.changeTypeRoom} >Type</label>
                       <select className="form-control" name="" id="">
                       <option value="">Chon Loai</option>
                       <option value="Phong family">Phong family</option>
                         <option value="1 giuong doi lon">1 giuong doi lon</option>
                         <option value="2 giuong doi lon">2 giuong doi lon</option>
                       </select>
                     </div>
                     <div className="form-group"> 
                       <label style={{fontSize:"20px", fontWeight:"bold"}} >Price</label>
                       <input type="number" min="1" className="form-control" value={product.price} onChange={this.changePrice} name="price" required/>
                     </div>
                     <div className="form-group"> 
                       <label style={{fontSize:"20px", fontWeight:"bold"}} >Old Price</label>
                       <input type="number" min="1" className="form-control" value={product.oldPrice} onChange={this.changeOldPrice} name="price" required/>
                     </div>
                     <div className="form-group"> 
                       <label style={{fontSize:"20px", fontWeight:"bold"}}>Image</label>
                       <input type="file" className="form-control" name="image"/>
                     </div>
                         <div class="row"> 
                             <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                             <div className="card text-white bg-danger">
                                    <img id="preImg" className="card-img-top" src={product.image} alt="" />
                            </div>
                         </div> 
                     </div>
                     
                    <button style={{ marginTop:"20px" }} type="submit" className="btn btn-primary">update</button>
                </form>
            </div>    
        );
    }
    changeTypeRoom(event){
        var {product}= this.state;
        product.typeRoom =event.target.value;
        
         this.setState({product});
    }
   
    changeArea(event){
         var {product}= this.state;
        product.area=event.target.value;
         this.setState({product});
    }
    changeOldPrice(event){
        var {product}= this.state;
        product.oldPrice=event.target.value;
         this.setState({product});
    }
    changeName(event){
        var {product}= this.state;
        product.name=event.target.value;
         this.setState({product});
    }
    changePrice(event){
        var {product}= this.state;
        product.price=event.target.value;
         this.setState({product});
    }
    changeImage(event){
        var newProduct= this.state.product;
        var input =event.target;
        var reader= new FileReader();
        reader.onload=()=>{
            var dataURL = reader.result;
            var output = document.getElementById('preImg');
            output.src = dataURL;
            console.log(dataURL);
            newProduct.image=dataURL;
        }
        reader.readAsDataURL(input.files[0]);
        this.setState({newProduct});
    }
}

export default Update;