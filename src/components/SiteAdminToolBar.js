import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import {spacing, typography} from 'material-ui/styles';
import {white, blueGrey600, cyan600} from 'material-ui/styles/colors';
import {Link} from 'react-router';

const styles = {
    toolbar: {
      fontSize: 20,
      color: typography.textFullWhite,
      backgroundColor: cyan600,
      paddingLeft: 30,
      height: 56,
      textColor:white
    },
    button: {
        margin: 20
    },
    menuItem: {
      color: white,
      fontSize: 14
    }
  };

export default class SiteAdminToolbar extends React.Component {
        
  constructor(props) {
    super(props);
    this.state = {
      value: 3,
    };
  }

  handleChange(event, index, value){
      return this.setState({value});
  }

  render() {
    return (
      <Toolbar style={styles.toolbar}>
        <ToolbarGroup firstChild={true}>
          <DropDownMenu value={this.state.value} onChange={this.handleChange}>
            <MenuItem value={1} primaryText="New Community" containerElement={<Link to="/siteAdminHome/newcommunity"/>} />
            <MenuItem value={2} primaryText="Schedule Maintenance" />
            <MenuItem value={3} primaryText="Broadcast Message" />
            <MenuItem value={4} primaryText="Publish Site News" />
            <MenuItem value={5} primaryText="New Annoucement" />
          </DropDownMenu>
        </ToolbarGroup>
        <ToolbarGroup>
        <FontIcon className="muidocs-icon-custom-sort" />
        <ToolbarSeparator />
          <IconMenu
            iconButtonElement={
              <IconButton touch={true}>
                <NavigationExpandMoreIcon />
              </IconButton>
            }
          >
            <MenuItem primaryText="Download" />
            <MenuItem primaryText="More Info" />
          </IconMenu>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}