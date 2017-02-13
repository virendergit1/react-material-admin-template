import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {cyan, grey500, green600, blue600, grey900} from 'material-ui/styles/colors';

const themeDefault = getMuiTheme({
  palette: {
   
  },
  appBar: {
    height: 57,
    color: blue600
  },
  drawer: {
    width: 230,
    color: grey900
  },
  raisedButton: {
    primaryColor: cyan,
  }
});


export default themeDefault;