import React, {PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import {white, purple600, purple200} from 'material-ui/styles/colors';
import {LineChart, XAxis, Tooltip, Line, ResponsiveContainer} from 'recharts';
            
import {typography} from 'material-ui/styles';

const VisitorsDailyTraffic = (props) => {

  const styles = {
    paper: {
      backgroundColor: purple200,
      height: 150
    },
    div: {
      height: 95,
      padding: '5px 15px 0 15px'
    },
    header: {
      fontSize: 24,
      fontWeight: typography.fontWeightLight,
      color: white,
      backgroundColor: purple600,
      padding: 10,
    }
  };

  return (
    <Paper style={styles.paper}>
      <div style={{...styles.header}}>Visitors Daily Traffic</div>
      <div style={styles.div}>
        <ResponsiveContainer >
          <LineChart data={props.data} width={900} height={300} margin={{top: 20, right: 30, left: 20, bottom: 10}}>
            <XAxis dataKey="name"/>
            <Tooltip />
            <Line type="monotone" dataKey="Visitors" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Paper>
  );
};

VisitorsDailyTraffic.propTypes = {
  data: PropTypes.array
};

export default VisitorsDailyTraffic;
