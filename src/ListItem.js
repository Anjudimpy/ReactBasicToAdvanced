import React, { Component } from "react";

// Complete this Component
const ListItem = (props) => {
  const {name, link, icon, bgColor} = props.data;
  return (
    <div
      className="ListItem"
      style={{
        height: 30,
        backgroundColor: bgColor,
      }}
    >
      <img src={icon} alt="icon" />
    
      <a href={link}>{name}</a>
    </div>
  );
};

export default ListItem;
