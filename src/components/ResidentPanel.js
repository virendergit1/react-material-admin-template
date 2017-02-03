import React,{PropTypes} from 'react';
import { Panel, Row, Col, Image, Grid } from 'react-bootstrap';

const ResidentPanel = ({imageSrc, name, phone, profession, address}) => {

if(profession!==undefined && profession.length > 0)
    profession = <span><b>Profession:</b> {profession}{"\n"}</span>;

if(address!==undefined && address.length > 0)
    address = <span><b>Address:</b> {address}</span>;

return (
        <Panel>
            <Row>
                <Col sm={4} md={4} >
                    <Image src={imageSrc} thumbnail/>
                </Col>
                <Col sm={8} md={8} >
                        <span><b>{name}</b></span><br/>
                        <span><b>Phone:</b> {phone}</span><br/>
                        {profession}
                        {address}
                </Col>
            </Row>
        </Panel>
  );
};

ResidentPanel.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  profession: PropTypes.string,
  address: PropTypes.string,
  phone: PropTypes.string
};

export default ResidentPanel;