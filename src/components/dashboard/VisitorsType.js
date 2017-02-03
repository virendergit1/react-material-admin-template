import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import {PieChart, Pie, Cell, ResponsiveContainer, Tooltip} from 'recharts';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import GlobalStyles from '../../styles';

const VisitorsType = (props) => {

  const styles = {
    paper: {
      minHeight: 344,
      padding: 10
    },
    legend: {
      padding: '10px,0px,10px,0px',
      float:'center',
      display: 'flex',
      flexDirection: 'row',
      alignContent: 'center',
    },
    pieChartDiv: {
      padding: '10px,10px,10px,10px',
      height: 250,
      textAlign: 'center'
    }
  };

  return (
    <Paper style={styles.paper}>
      <span style={GlobalStyles.title}>Visitors Type</span>

      <div style={GlobalStyles.clear}/>

      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div style={styles.pieChartDiv}>
            <ResponsiveContainer>
              <PieChart >
                <Pie
                  innerRadius={30}
                  outerRadius={90}
                  data={props.data}
                  fill="#8884d8">
                  {
                    props.data.map((item) => <Cell key={item.name} fill={item.color}/>)
                  }
                </Pie>
                <Tooltip/>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div>
              <List style={styles.legend}>
                {props.data.map((item) =>
                  <ListItem
                    key={item.name}
                    leftAvatar={
                      <Avatar icon={item.icon}
                              backgroundColor={item.color}/>
                    }>
                    {item.name}
                  </ListItem>
                )}
              </List>
          </div>
        </div>
      </div>
    </Paper>
  );
};

VisitorsType.propTypes = {
  data: PropTypes.array
};

export default VisitorsType;
