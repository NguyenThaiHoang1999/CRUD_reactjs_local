import React, { Component } from 'react';
import "./style.css";
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                    <a className="navbar-brand" href="/">LOGO</a>
                    <button className="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation">
                     </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ulnav nav" >
                        <li className="nav-item item-bar" style={{ float: 'right' }}>
                          <NavLink id="navHome" className="nav-link" to="/"><i className="fa fa-home" aria-hidden="true"></i> Home <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item on item-bar" >
                          <a className="nav-link" href="/"><i className="fa fa-star" aria-hidden="true"></i>Phòng & Mức giá</a>
                        </li>
                        <li className="nav-item item-bar" >
                          <a className="nav-link item-bar" href="/"><i className="fas fa-image"></i>Hình ảnh</a>
                        </li>
                        <li className="nav-item item-bar" >
                          <a className="nav-link" href="/"><i className="fas fa-notes-medical "></i> Giới thiệu</a>
                        </li>
                        <li className="nav-item item-bar" >
                          <a className="nav-link" href="/"><i className="fas fa-person-booth "></i> Liên hệ</a>
                        </li>
                      </ul>                      
                      <div className="form-inline my-2 my-lg-0">
                      <NavLink className="btn btn-outline-success my-2 my-sm-0" to="/add" type="button">Add</NavLink>
                     
                     </div>
                    </div>
                  </nav>
                
        );
    }
}
export default Header;