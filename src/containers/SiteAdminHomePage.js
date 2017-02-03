import React, { PropTypes }  from 'react';
import SiteAdminToolBar from '../components/SiteAdminToolBar';

class SiteAdminHomePage extends React.Component {

  constructor(props) {
    super(props);
  }
    
  render() {
      return (
        <div>
            <SiteAdminToolBar/>
            <div>
              { this.props.children }
            </div>
        </div>
      );
    }
}

SiteAdminHomePage.propTypes = {
  children: PropTypes.element,
};

export default SiteAdminHomePage;
