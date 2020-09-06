import React, { Component } from 'react';

class Add extends Component {
    constructor(props){
        super(props);
        this.state={
            
            newProduct: {
                // id: 1,
                // name: '',
                // typeRoom:'',
                // price: '',
                // oldPrice: '',
                // number: '',
                // area: '',
                // image: ''
            }
            
            
        }
        this.submit=this.submit.bind(this)
        this.changeName=this.changeName.bind(this)
        this.changePrice=this.changePrice.bind(this)
        this.changeImage=this.changeImage.bind(this)
        this.changeArea=this.changeArea.bind(this);
        this.changeOldPrice=this.changeOldPrice.bind(this);
        this.changeTypeRoom=this.changeTypeRoom.bind(this);
    
    }
    submit(event){
        var {newProduct}=this.state;

        var products=localStorage.getItem('rooms')?JSON.parse(localStorage.getItem('rooms')):[];

        newProduct.id= products.length!=0? products[products.length-1].id+1:1;

        products.push(newProduct);

        alert('Product '+newProduct.name+' has been added successfuly');
        
        document.getElementById('preImg').src="";
        localStorage.setItem('rooms',JSON.stringify(products));
        this.setState({newProduct});
        
        event.preventDefault();
        document.getElementById('navHome').click();
    }
   
    render() {
        var {newProduct}=this.state;
        return (
            <div className="container home">
                <form method="post" onSubmit={this.submit} >
                     <div className="form-group"> 
                       <label style={{fontSize:"20px", fontWeight:"bold"}} >Name</label>
                       <input type="text" className="form-control" value={newProduct.name} onChange={this.changeName} name="name" required />
                     </div>
                     <div className="form-group"> 
                       <label style={{fontSize:"20px", fontWeight:"bold"}} >Area</label>
                       <input type="number" min="1" className="form-control" value={newProduct.area} onChange={this.changeArea} name="area" required />
                     </div>
                     <div className="form-group">
                       <label  style={{fontSize:"20px", fontWeight:"bold"}} value="" onChange={this.changeTypeRoom} >Type</label>
                       <select className="form-control" name="" id="">
                       <option value="">Chon Loai</option>
                       <option value="Phong family">Phong family</option>
                         <option value="1 giuong doi lon">1 giuong doi lon</option>
                         <option value="2 giuong doi lon">2 giuong doi lon</option>
                       </select>
                     </div>
                     <div className="form-group"> 
                       <label style={{fontSize:"20px", fontWeight:"bold"}} >Price</label>
                       <input type="number" min="1" className="form-control" value={newProduct.price} onChange={this.changePrice} name="price" required/>
                     </div>
                     <div className="form-group"> 
                       <label style={{fontSize:"20px", fontWeight:"bold"}} >Old Price</label>
                       <input type="number" min="1" className="form-control" value={newProduct.oldPrice} onChange={this.changeOldPrice} name="price" required/>
                     </div>
                     <div className="form-group"> 
                       <label style={{fontSize:"20px", fontWeight:"bold"}}>Image</label>
                       <input type="file" className="form-control" value={newProduct.image} onChange={this.changeImage} name="image"/>
                     </div>
                         <div class="row"> 
                             <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                             <div className="card text-white bg-danger">
                                    <img id="preImg" className="card-img-top" src="" alt="" />
                            </div>
                         </div>     
                         
                       
                     </div>
                     <button style={{ marginTop:"20px" }} type="submit"  className="btn btn-primary">Add</button>
                     
                </form>
            </div>    
        );
    }
    changeTypeRoom(event){
        var {newProduct}= this.state;
        newProduct.typeRoom=event.target.value;
         this.setState({newProduct});
    }
    changeArea(event){
         var {newProduct}= this.state;
        newProduct.area=event.target.value;
         this.setState({newProduct});
    }
    changeOldPrice(event){
        var {newProduct}= this.state;
        newProduct.oldPrice=event.target.value;
         this.setState({newProduct});
    }
    changeName(event){
        var {newProduct}= this.state;
        newProduct.name=event.target.value;
         this.setState({newProduct});
    }
    changePrice(event){
        var {newProduct}= this.state;
        newProduct.price=event.target.value;
         this.setState({newProduct});
    }
    changeImage(event){
        var {newProduct}= this.state;
        var input =event.target;
        var reader= new FileReader();
        reader.onload=()=>{
            var dataURL = reader.result;
            var output = document.getElementById('preImg');
            output.src = dataURL;
            // console.log(dataURL);
            newProduct.image=dataURL;
        }
        reader.readAsDataURL(input.files[0]);
        this.setState({newProduct});
    }
}

export default Add;