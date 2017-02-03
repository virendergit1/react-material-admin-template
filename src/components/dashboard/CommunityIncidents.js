import React, {PropTypes} from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import {grey400, white, orange600} from 'material-ui/styles/colors';
import {typography} from 'material-ui/styles';
import {Link} from 'react-router';

const CommunityIncidents = (props) => {

  const styles = {
    subheader: {
      fontSize: 24,
      fontWeight: typography.fontWeightLight,
      backgroundColor: orange600,
      color: white,
    }
  };

  const iconButtonElement = (
    <IconButton
      touch={true}
      tooltipPosition="bottom-left"
    >
      <MoreVertIcon color={grey400} />
    </IconButton>
  );

  const rightIconMenu = (
    <IconMenu iconButtonElement={iconButtonElement}>
      <MenuItem>View</MenuItem>
    </IconMenu>
  );
  
  function form() {
      alert('Hello');
  }

  return (
    <Paper>
      <List>
        <Subheader style={styles.subheader}><Link to="/table" style={styles.subheader}>Community Incidents</Link></Subheader>
        {props.incidents.map(item =>
          <div key={item.id}>
            <ListItem
              leftAvatar={<Avatar src={item.image} />}
              primaryText={item.title}
              secondaryText={item.text}
              rightIconButton={rightIconMenu}
              onTouchTap={form}
              secondaryTextLines={2}              
            />
            <Divider inset={true} />
          </div>
        )}
      </List>
    </Paper>
  );
};

CommunityIncidents.propTypes = {
  incidents: PropTypes.array
};

export default CommunityIncidents;
