import React, {PropTypes} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Menu from 'material-ui/svg-icons/navigation/menu';
import ViewModule from 'material-ui/svg-icons/action/view-module';
import {white} from 'material-ui/styles/colors';
import SearchBox from './SearchBox';
import PermIdentity from 'material-ui/svg-icons/action/perm-identity';
import VacationOutIcon from 'material-ui/svg-icons/action/flight-takeoff';
import VisitorManagementIcon from 'material-ui/svg-icons/action/assignment-ind';
import MessageIcon from 'material-ui/svg-icons/communication/message';

import {Link} from 'react-router';

class Header extends React.Component {

  render() {
    const {styles, handleChangeRequestNavDrawer} = this.props;

    const style = {
      appBar: {
        position: 'fixed',
        top: 0,
        overflow: 'hidden',
        maxHeight: 57
      },
      menuButton: {
        marginLeft: 10
      },
      iconsRightContainer: {
        marginLeft: 20
      }
    };

    return (
        <div>
            <AppBar
              style={{...styles, ...style.appBar}}
              title={
                <SearchBox />
              }
              iconElementLeft={
                  <IconButton style={style.menuButton} onClick={handleChangeRequestNavDrawer}>
                    <Menu color={white} />
                  </IconButton>
              }
              iconElementRight={
                <div style={style.iconsRightContainer}>
                  <IconMenu color={white}
                            iconButtonElement={
                              <IconButton><ViewModule color={white}/></IconButton>
                            }
                            targetOrigin={{horizontal: 'right', vertical: 'top'}}
                            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                  >
                    <MenuItem key={1} primaryText="Profile" leftIcon={<PermIdentity/>} containerElement = {<Link to="/profile"/>}/>
                    <MenuItem key={2} primaryText="Messages" leftIcon={<MessageIcon/>} containerElement = {<Link to="/form"/>}/>
                    <MenuItem key={3} primaryText="Vacation Notification" leftIcon={<VacationOutIcon/>} containerElement = {<Link to="/vacationNotification"/>}/>
                    <MenuItem key={4} primaryText="Visitor Management" leftIcon={<VisitorManagementIcon/>} containerElement = {<Link to="/manageVisitors"/>}/>
                  </IconMenu>
                  <IconMenu color={white}
                            iconButtonElement={
                              <IconButton><MoreVertIcon color={white}/></IconButton>
                            }
                            targetOrigin={{horizontal: 'right', vertical: 'top'}}
                            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                  >
                    <MenuItem primaryText="Login Page" leftIcon={<PermIdentity/>} containerElement = {<Link to="/login"/>}/>
                    <MenuItem primaryText="Sign out"/>
                  </IconMenu>
                </div>
              }
            />
          </div>
      );
  }
}

Header.propTypes = {
  styles: PropTypes.object,
  handleChangeRequestNavDrawer: PropTypes.func
};

export default Header;
