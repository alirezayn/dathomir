import React, { useState } from "react";
import styles from "./userProfile.module.scss";
import {  Nav, Tab, Tabs } from "react-bootstrap";
const UserProfile = () => {
  const [key, setKey] = useState('profile');
  console.log(key)
  return (
    <div className={`${styles.mainContainer}`}>
      <div className={`${styles.profile}`}>
             <div className={`${styles.right}`}>

             </div>
             <div className={`${styles.left}`}></div>
      </div>
      <div className={`${styles.profileInfo}`}>
      {/* <Tabs
      defaultActiveKey="profile"
      id="controlled-tab-example"
      // className="mb-5 mt-3"
      onSelect={(e)=>setKey(e)}
      style={{borderBottom:"none"}}
    >
      <Tab eventKey="profile" title="پروفایل">
        Tab content for Home
      </Tab>
      <Tab eventKey="orders" title="لیست سفارش ها">
        Tab content for Profile
      </Tab>
      <Tab eventKey="wishlist" title="لیست علاقه مندیها">
        Tab content for Loooonger Tab
      </Tab>
      <Tab eventKey="contact" title="Contact" >
        Tab content for Contact
      </Tab>
    </Tabs> */}
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      {/* <Row> */}
        {/* <Col sm={3}> */}
          <Nav variant="dark" className="flex-row">
            <Nav.Item>
              <Nav.Link eventKey="first">Tab 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Tab 2</Nav.Link>
            </Nav.Item>
          </Nav>
        {/* </Col> */}
        {/* <Col sm={9}> */}
          <Tab.Content>
            <Tab.Pane eventKey="first">First tab content</Tab.Pane>
            <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
          </Tab.Content>
        {/* </Col> */}
      {/* </Row> */}
    </Tab.Container>
    
      </div>
    </div>
  );
};

export default UserProfile;
