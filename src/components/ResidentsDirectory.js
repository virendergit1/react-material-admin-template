import React, {PropTypes} from 'react';
import ReactDataGrid from 'react-data-grid';
import Paper from 'material-ui/Paper';
import {white, cyan600} from 'material-ui/styles/colors';
import {typography} from 'material-ui/styles';
import {Toolbar, Data} from 'react-data-grid/addons';
import { GridList } from 'material-ui';
import Subheader from 'material-ui/Subheader';

const styles = {
    subheader: {
      fontSize: 24,
      fontWeight: typography.fontWeightLight,
      backgroundColor: cyan600,
      color: white
    },
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
    gridList: {
      position: 'relative',  
      width: '100%',
      height: '520px',
      overflowY: 'auto',
    },
};
    
//helper to generate a random date
function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toLocaleDateString();
}

let _rows = [];
//helper to create a fixed number of rows
function createRows(numberOfRows){
  for (let i = 1; i < numberOfRows; i++) {
    _rows.push({
      id: i,
      task: 'Task ' + i,
      complete: Math.min(100, Math.round(Math.random() * 110)),
      priority : ['Critical', 'High', 'Medium', 'Low'][Math.floor((Math.random() * 3) + 1)],
      issueType : ['Bug', 'Improvement', 'Epic', 'Story'][Math.floor((Math.random() * 3) + 1)],
      startDate: randomDate(new Date(2015, 3, 1), new Date()),
      completeDate: randomDate(new Date(), new Date(2016, 0, 1))
    });
  }
  return _rows;
}

//function to retrieve a row for a given index
let rowGetter = function(i){
  return _rows[i];
};

//Columns definition
let columns = [
{
  key: 'id',
  name: 'ID',
  width: 80,
  filterable: true

},
{
  key: 'task',
  name: 'Title',
  sortable : true,
  filterable: true
},
{
  key: 'priority',
  name: 'Priority',
  sortable : true,
  filterable: true
},
{
  key: 'issueType',
  name: 'Issue Type',
  sortable : true,
  filterable: true
},
{
  key: 'complete',
  name: '% Complete',
  sortable : true,
  filterable: true
},
{
  key: 'startDate',
  name: 'Start Date',
  sortable : true,
  filterable: true
},
{
  key: 'completeDate',
  name: 'Expected Complete',
  sortable : true,
  filterable: true
}
];

export class ResidentsDirectory extends React.Component {
    constructor(props, context) {
        super(props, context);
        
        this.state = {
          community: Object.assign({}, this.props.residents),
          errors:{},
          rows : createRows(100), filters : {}, sortColumn: null, sortDirection: null};
          this.getRows = this.getRows.bind(this);
          this.getSize = this.getSize.bind(this);
          this.rowGetter = this.rowGetter.bind(this);
          this.handleGridSort = this.handleGridSort.bind(this);
          this.handleFilterChange = this.handleFilterChange.bind(this);
          this.onClearFilters = this.onClearFilters.bind(this);
    }
        
    getRows() {
       return Data.Selectors.getRows(this.state);
     }

     getSize() {
       return this.getRows().length;
     }

     rowGetter(rowIdx){
       let rows = this.getRows();
       return rows[rowIdx];
     }

     handleGridSort(sortColumn, sortDirection) {
       let state = Object.assign({}, this.state, {sortColumn: sortColumn, sortDirection: sortDirection});
       this.setState(state);
     }

     handleFilterChange(filter){
       let newFilters = Object.assign({}, this.state.filters);
       if (filter.filterTerm) {
         newFilters[filter.column.key] = filter;
       } else {
        delete newFilters[filter.column.key];
       }
       this.setState({filters: newFilters});
     }

     onClearFilters(){
       //all filters removed
       this.setState({filters: {} });
     }
    
    render() {
        return  (
            <Paper>    
            <Subheader style={styles.subheader}>Residents Directory</Subheader> 
            <GridList cols={1} padding={1} style={styles.gridList}>
            <ReactDataGrid 
                        onGridSort={this.handleGridSort}
                        columns={columns}
                        rowGetter={this.rowGetter}
                        rowsCount={this.getSize()}
                        minHeight={500}
                        onRowUpdated={this.handleRowUpdated}
                        toolbar={<Toolbar enableFilter={true}/>}
                        onAddFilter={this.handleFilterChange}
                        onClearFilters={this.onClearFilters} 
                        />
            </GridList>
            </Paper>         
            );
        }
  }

ResidentsDirectory.propTypes = {
  dataSource: PropTypes.array,
  columns: PropTypes.array,
  residents: PropTypes.array
};

export default ResidentsDirectory;