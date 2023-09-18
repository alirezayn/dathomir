import React from "react";
import styles from "./userProfile.module.scss";
import {  Tab, Tabs } from "react-bootstrap";
const UserProfile = () => {
  return (
    <div className={`${styles.mainContainer}`}>
      <div className={`${styles.profile}`}>
             
      </div>
      <div className={`${styles.profileInfo}`}>
      <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-5 mt-3"
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
    </Tabs>
      </div>
    </div>
  );
};

export default UserProfile;
