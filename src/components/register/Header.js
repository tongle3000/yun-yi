import PropTypes from 'prop-types';
import React, { Component } from 'react';



const Header = (props) => {
    const { name,img } = props
    return (
        <>
            <img src={img} style={{height:'100%'}} />
            <div>
                <h1>{name}</h1>
                <span>自助报到机</span>
            </div>
        </>
    );
}

export default Header;
