import React from 'react';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import {typography} from 'material-ui/styles';
import {cyan600, white} from 'material-ui/styles/colors';

const CommunityCard = () => {
    const styles = {
        subheader: {
            fontSize: 24,
            fontWeight: typography.fontWeightLight,
            backgroundColor: cyan600,
            color: white,
          },
        span: {
          fontSize: 12,
          padding: 10,          
        },
        cardImg: {
          height: '400px',
        }                
      };

  return(
  <Card>
    <CardMedia overlay={<CardTitle title="Vatika City" subtitle="Sector 49, Gurugram, Haryana 122018, India" />}>
      <img style={styles.cardImg} src="http://www.vatikacitygurgaon.com/assets/images/gallery/vatika-city.jpg" />
    </CardMedia>
    <CardText>
    <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 m-b-15 ">
           Welcome to Vatika City – one of the first largest group housing development in Gurgaon. Spread over 37 acres, Vatika City is located at the intersection of Golf Course Extension Road and Sohna Road.
           Designed by studio u+a, London, in association with Spazzio, Vatika City is a synthesis of contemporary design, traditional landscapes and understated elegance. It features a series of Low-rise, Mid-rise and High-rise buildings offering over 1370 apartments in combination of two, three, four bedrooms, duplexes and penthouses with complete range of facilities exclusively for residents.
       </div>
       <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 m-b-15 ">
       <Paper>
            <Subheader style={styles.subheader}>Important Contacts</Subheader>
            <span style={styles.span}>Police Control Room: 0124-2316100</span><Divider/>
            <span style={styles.span}>SMS to Police Control Room: 0124100</span><Divider/>
            <span style={styles.span}>Senior Citizens Helpline: 0124-2221559</span><Divider/>
            <span style={styles.span}>Toll Free Number to Report For Suspicious Person: 1090</span><Divider/>
            <span style={styles.span}>Women Helpline: 1091</span><Divider/>
            <span style={styles.span}>Fire Brigade: 101</span><Divider/>
            <span style={styles.span}>Ambulance: 102</span>
                    

       </Paper>
       </div>
    </div>   
</CardText>
  </Card>
);
};

export default CommunityCard;