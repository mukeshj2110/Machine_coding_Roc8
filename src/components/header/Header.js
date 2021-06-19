import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './header.css';

const Header =() =>{
    return(
        <div className="header_container">
            {/* logo */}
            <div className="header_logo">
                <img src="https://content.couponspy.in/public/shop/240.jpg" alt="logo"/>
            </div>

            {/* searchbar */}
            <div className="header_searchbar">


                <input type="text" className="search_inp"
                    placeholder="Search for items "
                />
              
                    <SearchIcon className="search_btn"/>
               
            </div>
            
            <div className="header_nav">



            {/* login */}
            <div className="option1 header_option ">
                 <span className="login">Login</span>
            </div>

            {/* more */}
            <div className="header_option">
                <span>More</span>
            </div>

            {/* cart */}
            <div className="header_option">
                <span>Cart</span>
            </div>
            </div>

            

        
        </div>
    )
}

export default Header;