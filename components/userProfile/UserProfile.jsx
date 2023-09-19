import React, { useState } from "react";
import styles from "./userProfile.module.scss";
import { Nav, Tab, Table, Tabs } from "react-bootstrap";
import Image from "next/image";
import { useSelector } from "react-redux";
const UserProfile = () => {
  const user = useSelector((state) => state.user);
  const [key, setKey] = useState("profile");
  const setNavKey = (e) => {
    setKey(e.target.title);
  };
  const tabs = [
    { tabName: "profile", title: "پروفایل" },
    { tabName: "orders", title: "سفارش ها" },
    { tabName: "wishlist", title: "لسیت علاقه مندی ها" },
    { tabName: "orderHistory", title: "تاریخچه سفارشات" },
  ];
  return (
    <div className={`${styles.mainContainer}`}>
      <div className={`${styles.profile}`}>
        <div className={`${styles.right}`}>
          <Image
            src={"https://cdn-icons-png.flaticon.com/512/3135/3135715.png"}
            width={100}
            height={100}
            alt="profile"
          />
          <div className={`${styles.details}`}>
            <span>نام : نام کاربر</span>
            <span>شماره :{user.profile.username}</span>
            <span>ایمیل : example@example.com</span>
            <span>سن : 25 </span>
          </div>
        </div>
        <div className={`${styles.left}`}>
          <span className={`${styles.circle}`}>
            <span>تعداد سفارش</span>
            <span>15</span>
          </span>
          <span className={`${styles.circle}`}>
            <span>خرید کل</span>
            <span>6,000,000</span>
          </span>
          <span className={`${styles.circle}`}>
            <span>امتیاز</span>
            <span>80</span>
          </span>
        </div>
      </div>
      <div className={`${styles.profileInfo}`}>
        <Tab.Container id="left-tabs-example" defaultActiveKey="profile">
          <Nav variant="dark" className="flex-row">
            {tabs.map((item, index) => {
              return (
                <Nav.Item className="flex-row" key={index + 1}>
                  <Nav.Link
                    eventKey={item.tabName}
                    title={item.tabName}
                    onClick={setNavKey}
                    className={
                      item.tabName == key ? `${styles.borderBottom}` : null
                    }
                  >
                    {item.title}
                  </Nav.Link>
                </Nav.Item>
              );
            })}
          </Nav>

          <Tab.Content>
            <Tab.Pane eventKey="profile">1 tab content</Tab.Pane>
            <Tab.Pane eventKey="orders">2 tab content</Tab.Pane>
            <Tab.Pane eventKey="wishlist">3 tab content</Tab.Pane>
            <Tab.Pane eventKey="orderHistory">4 tab content</Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </div>
  );
};

export default UserProfile;
