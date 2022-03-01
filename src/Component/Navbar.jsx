import React from 'react';
import '../index.css';
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from '@material-ui/core';



const Navbar = () => {
    return (
        <div className='Navbar'>
            <div className='Wrapper'>
                <div className='left'>
                    <div className='Language'>En</div>
                    <div className='searchContainer'>
                        <input placeholder='search'/><Search  style={{color:'grey',fontSize:16}}/>
                    </div>
                </div>
                <div className='center'>
                    <div className='Logo'>E-mco</div>
                </div>
                <div className='right'>
                    <div className='MenuItem'>REGISTER</div>
                    <div className='MenuItem'>SIGN IN</div>
                    <div className='MenuItem'>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar