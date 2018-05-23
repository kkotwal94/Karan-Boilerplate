import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List, { ListItem, ListItemIcon, ListItemText } from '@material-ui/core/List';

class SidebarListElements extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { elements } = this.props;
    console.log(this.props);
    return (
      <List>
        {elements.map((anElement, index) => {
          return (
            <ListItem button>
              <ListItemIcon>{anItem.icon}</ListItemIcon>
              <ListItemText>{anItem.name}</ListItemText>
            </ListItem>
          );
        })}
      </List>
    );
  }
}

SidebarListElements.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SidebarListElements;
