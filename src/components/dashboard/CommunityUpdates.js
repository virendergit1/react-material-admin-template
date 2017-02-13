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
import {grey400, cyan600, purple600, white} from 'material-ui/styles/colors';
import {typography} from 'material-ui/styles';
import Wallpaper from 'material-ui/svg-icons/device/wallpaper';
import ActionInfo from 'material-ui/svg-icons/action/info';
import {Link} from 'react-router';

class CommunityUpdates extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
  
  const styles = {
      subheader: {
        fontSize: 24,
        fontWeight: typography.fontWeightLight,
        backgroundColor: purple600,
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
        <Subheader style={styles.subheader}><Link to="/table" style={styles.subheader}>Community Updates</Link></Subheader>
        {this.props.data.map(item =>
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
}
}

CommunityUpdates.propTypes = {
  data: PropTypes.array
};

export default CommunityUpdates;
