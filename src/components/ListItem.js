import React from "react";
import "./ListItem.css";

// Use props to add styles, link and images so that it looks like the reference image.

class ListItem extends React.Component {
  render() {
    const { name, link, icon, bgColor } = this.props;

    return (
      <div className="listItem" style={{ backgroundColor: bgColor }}>
        <img src={icon} alt={name} />
        <a href={link}>{name}</a>
      </div>
    );
  }
}

export default ListItem;
