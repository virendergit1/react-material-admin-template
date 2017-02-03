import React,  { PropTypes } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import Paper from 'material-ui/Paper';
import {white, green600} from 'material-ui/styles/colors';
import {typography} from 'material-ui/styles';

class CommunityCalendar extends React.Component {

  render(){
    const { events } = this.props;
    // Setup the localizer by providing the moment Object to the correct localizer.
    BigCalendar.momentLocalizer(moment);
    let formats = { dateFormat: 'D MMM'};

    const styles = {
        paper: {
          backgroundColor: white,
        },
        div: {
          height: 500,
          padding: '15px 15px 15px 15px',
          texttransform: 'capitalize'
        },
        header: {
          fontSize: 24,
          fontWeight: typography.fontWeightLight,
          color: white,
          backgroundColor: green600,
          padding: 10,
        }
    };  
    
    return (
        <Paper style={styles.paper}>        
            <div style={{...styles.header}}>Community Calendar</div>
            <div style={styles.div}>
                  <BigCalendar
                    selectable
                    toolbar={true}
                    culture={'en-GB'}
                    views={['month', 'week', 'day']}
                    formats={formats}
                    events={events}
                    scrollToTime={new Date(1970, 1, 1, 6)}
                    defaultDate={new Date(2015, 3, 12)}
                    onSelectEvent={event => alert(event.title)}
                    onSelectSlot={(slotInfo) => alert(
                      `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
                      `\nend: ${slotInfo.end.toLocaleString()}`
                    )}
                  />
            </div>
      </Paper>        
    );
  }
}

CommunityCalendar.propTypes = {
  events: PropTypes.array,
  toolbar: PropTypes.string
};

export default CommunityCalendar;