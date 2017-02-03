import React,  { PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import {spacing, typography} from 'material-ui/styles';
import {white, blue600} from 'material-ui/styles/colors';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router';
import Avatar from 'material-ui/Avatar';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import RaisedButton from 'material-ui/RaisedButton';
import VisitorIcon from 'material-ui/svg-icons/maps/transfer-within-a-station';

const LeftDrawer = (props) => {
  let { navDrawerOpen } = props;

  const styles = {
    logo: {
      cursor: 'pointer',
      fontSize: 16,
      color: typography.textFullWhite,
      lineHeight: `${spacing.desktopKeylineIncrement}px`,
      fontWeight: typography.fontWeightLight,
      backgroundColor: blue600,
      paddingLeft: 30,
      height: 56,
    },
    button: {
        margin: 25,
    },
    menuItem: {
      color: white,
      fontSize: 14
    },
    avatar: {
      div: {
        padding: '0px 0px 0px 5px',
        margin: '0px 10px 25px',
        height: 60
      },
      icon: {
        float: 'left',
        display: 'block',
        marginRight: 15,
        boxShadow: '0px 0px 0px 8px rgba(0,0,0,0.2)'
      },
      span: {
        paddingTop: 12,
        display: 'block',
        color: 'white',
        fontWeight: 300,
        textShadow: '1px 1px #444'
      }
    }
  };
  
  return (
    <Drawer
      docked={true}
      open={navDrawerOpen}>
        <div style={styles.logo}>
          MySecureComplex.com<Link to="/dashboard"/>
        </div>
        <div style={styles.avatar.div}>
          <RaisedButton label="New Visitor" labelPosition="before" secondary={true} icon={<VisitorIcon />} style={styles.button} containerElement={<Link to="/newvisit"/>}/>
        </div>
        <Divider/>
        <div>
          {props.menus.map((menu, index) =>
          <MenuItem
              key={index}
              style={styles.menuItem}
              primaryText={menu.text}
              leftIcon={menu.icon}
              /*containerElement = {<Link to={menu.link}/>}*/
              rightIcon={menu.submenus && <ArrowDropRight />}
              menuItems={menu.submenus !== undefined &&
                            menu.submenus.map((submenu) =>
                            <MenuItem 
                                key={submenu.index} 
                                containerElement={<Link to={submenu.link}/>} 
                                primaryText={submenu.text} 
                                leftIcon={submenu.icon}
                            />
                            )                            
                        }
            />
          )}          
        </div> 
    </Drawer>
  );
};

LeftDrawer.propTypes = {
  navDrawerOpen: PropTypes.bool,
  menus: PropTypes.array,
  username: PropTypes.string,
};

export default LeftDrawer;
