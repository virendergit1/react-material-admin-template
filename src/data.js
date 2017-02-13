import React from 'react';
import Assessment from 'material-ui/svg-icons/action/assessment';
import GridOn from 'material-ui/svg-icons/image/grid-on';
import ResidentsIcon from 'material-ui/svg-icons/social/group';
import VisitorIcon from 'material-ui/svg-icons/maps/transfer-within-a-station';
import IncidentIcon from 'material-ui/svg-icons/action/bug-report';
import EventIcon from 'material-ui/svg-icons/action/event';
import CommunityUpdatesIcon from 'material-ui/svg-icons/action/speaker-notes';
import SearchEntityIcon from 'material-ui/svg-icons/action/search';
import ComunityHomeIcon from 'material-ui/svg-icons/action/account-balance';
import NewEntityIcon from 'material-ui/svg-icons/content/add-circle-outline';
import CommunityNewsIcon from 'material-ui/svg-icons/action/view-headline';
import CommunityIcon from 'material-ui/svg-icons/social/location-city';
import PermIdentity from 'material-ui/svg-icons/action/perm-identity';
import DomesticHelpIcon from 'material-ui/svg-icons/av/recent-actors';
import Web from 'material-ui/svg-icons/av/web';
import {white, cyan600, pink600, purple600} from 'material-ui/styles/colors';
import ExpandLess from 'material-ui/svg-icons/navigation/expand-less';
import ExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';

const data = {
  menus: [
   { text: 'Community', icon: <CommunityIcon color={white}/>, link: '/community', 
        submenus:[
            {index:'0', text: 'Community Home', icon: <ComunityHomeIcon/>, link: '/community'},
            {index:'1', text: 'New Community', icon: <NewEntityIcon/>, link: '/siteAdminHome/newcommunity'},
            {index:'2', text: 'Search Community', icon: <SearchEntityIcon/>, link: '/siteAdminHome/searchcommunity'},
            {index:'3', text: 'Community Events', icon: <EventIcon/>, link: '/siteAdminHome/communityevents'},
            {index:'4', text: 'Community News', icon: <CommunityNewsIcon/>, link: '/communitynews'},
            {index:'5', text: 'Community Updates', icon: <CommunityUpdatesIcon/>, link: '/communityupdates'},
        ]},
    { text: 'Residents', icon: <ResidentsIcon color={white}/>, link: '/residents', 
        submenus:[{index:'0', text: 'Residents Directory', icon: <ResidentsIcon/>, link: '/residents'}]},
    { text: 'Visitors', icon: <VisitorIcon color={white}/>, link: '/dashboard', 
        submenus:[
            {index:'0', text: 'Search Visitor', icon: <SearchEntityIcon/>, link: '/searchvisitor'},
            {index:'1', text: 'New Visitor', icon: <NewEntityIcon/>, link: '/newvisit'},
        ]},
    { text: 'Incidents', icon: <IncidentIcon color={white}/>, link: '/table', 
        submenus:[
            {index:'0', text: 'Search Incident', icon: <SearchEntityIcon/>, link: '/searchinident'},
            {index:'1', text: 'New Incident', icon: <NewEntityIcon/>, link: '/newincident'},
        ]},
    { text: 'Domestic Help', icon: <DomesticHelpIcon color={white}/>, link: '/table', 
        submenus:[
            {index:'0', text: 'Search Domestic Help', icon: <SearchEntityIcon/>, link: '/searchinident'},
            {index:'1', text: 'Register Domestic Help', icon: <NewEntityIcon/>, link: '/newincident'},
        ]},
  ],
  tablePage: {
    items: [
      {id: 1, name: 'Product 1', price: '$50.00', category: 'Category 1'},
      {id: 2, name: 'Product 2', price: '$150.00', category: 'Category 2'},
      {id: 3, name: 'Product 3', price: '$250.00', category: 'Category 3'},
      {id: 4, name: 'Product 4', price: '$70.00', category: 'Category 4'},
      {id: 5, name: 'Product 5', price: '$450.00', category: 'Category 5'},
      {id: 6, name: 'Product 6', price: '$950.00', category: 'Category 6'},
      {id: 7, name: 'Product 7', price: '$550.00', category: 'Category 7'},
      {id: 8, name: 'Product 8', price: '$750.00', category: 'Category 8'}
    ]
  },
  dashBoardPage: {
    recentProducts: [
      {id: 1, image:'http://www.material-ui.com/images/uxceo-128.jpg', title: 'Lei Lee', text: '12/3/2017 8:20 AM, Visiting - Ram Manoher, 12 A Lantana St, Tower-1'},
      {id: 2, image:'http://www.material-ui.com/images/kolage-128.jpg', title: 'Rajesh Garg', text: '12/3/2017 8:20 AM, Visiting - Ram Manoher, 12 A Lantana St, Tower-1'},
      {id: 3, image:'http://www.material-ui.com/images/ok-128.jpg', title: 'Praveen Sharma', text: '12/3/2017 8:20 AM, Visiting - Ram Manoher, 12 A Lantana St, Tower-1'},
      {id: 4, image:'http://www.material-ui.com/images/kerem-128.jpg', title: 'Shahrukh Khan', text: '12/3/2017 8:20 AM, Visiting - Ram Manoher, 12 A Lantana St, Tower-1'},
      {id: 5, image:'http://www.material-ui.com/images/raquelromanp-128.jpg', title: 'Katrina Kaif', text: '12/3/2017 8:20 AM, Visiting - Ram Manoher, 12 A Lantana St, Tower-1'},
    ],
    communityUpdates: [
      {id: 1, image:'http://www.material-ui.com/images/uxceo-128.jpg', title: 'Lei Lee', text: '12/3/2017 8:20 AM, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.'},
      {id: 2, image:'http://www.material-ui.com/images/kolage-128.jpg', title: 'Rajesh Garg', text: '12/3/2017 8:20 AM, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.'},
    ],
    monthlySales: [
      {name: 'Jan', uv: 3700},
      {name: 'Feb', uv: 3000},
      {name: 'Mar', uv: 2000},
      {name: 'Apr', uv: 2780},
      {name: 'May', uv: 2000},
      {name: 'Jun', uv: 1800},
      {name: 'Jul', uv: 2600},
      {name: 'Aug', uv: 2900},
      {name: 'Sep', uv: 3500},
      {name: 'Oct', uv: 3000},
      {name: 'Nov', uv: 2400},
      {name: 'Dec', uv: 2780}
    ],
    newOrders: [
      {name:"01:00 AM", Visitors: 9800},
      {name:"02:00 AM", Visitors: 3908},
      {name:"03:00 AM", Visitors: 4800},
      {name:"04:00 AM", Visitors: 2400},
      {name:"05:00 AM", Visitors: 1398},
      {name:"06:00 AM", Visitors: 9800},
      {name:"07:00 AM", Visitors: 3908},
      {name:"08:00 AM", Visitors: 4800},
      {name:"09:00 AM", Visitors: 3490},
      {name:"10:00 AM", Visitors: 4300},
      {name:"11:00 AM", Visitors: 2400},
      {name:"12:00 AM", Visitors: 1398},
      {name:"01:00 PM", Visitors: 9800},
      {name:"02:00 PM", Visitors: 3908},
      {name:"03:00 PM", Visitors: 4800},
      {name:"04:00 PM", Visitors: 2400},
      {name:"05:00 PM", Visitors: 1398},
      {name:"06:00 PM", Visitors: 9800},
      {name:"07:00 PM", Visitors: 3908},
      {name:"08:00 PM", Visitors: 4800},
      {name:"09:00 PM", Visitors: 3490},
      {name:"10:00 PM", Visitors: 4300},
      {name:"11:00 PM", Visitors: 2400},
      {name:"12:00 PM", Visitors: 1398},
      
    ],
    browserUsage: [
      {name: 'Personal', value: 800, color: cyan600},
      {name: 'Professional', value: 300, color: pink600},
    ]
  }
};

export default data;
