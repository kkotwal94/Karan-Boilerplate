import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 430,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
});

class AppLayout extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const { navigation, sidebar, content, classes, theme } = this.props;
        return (
            <div className={classes.root}>
                {navigation}
                {sidebar}
                {content}
            </div>
        );
    }
}

AppLayout.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    navigation: PropTypes.node.isRequired,
    sidebar: PropTypes.node.isRequired,
    content: PropTypes.node.isRequired,
};

export default withStyles(styles, { withTheme: true })(AppLayout);