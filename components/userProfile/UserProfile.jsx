import React, { useEffect, useState } from "react";
import styles from "./userProfile.module.scss";
import {
  Form,
  InputGroup,
  Nav,
  NavDropdown,
  Tab,
  Table,
  Tabs,
} from "react-bootstrap";
import Image from "next/image";
import { useSelector } from "react-redux";
import { profile, tabIcon } from "./userData";


const UserProfile = () => {
  const user = useSelector((state) => state.user);
  const [key, setKey] = useState("پروفایل");
  const [width, setWidth] = useState(800);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(()=>window.innerWidth);
    });
  }, []);
  
  console.log(width)
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
            priority={true}
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
        <Tab.Container id="left-tabs-example" defaultActiveKey="پروفایل">
          <Nav variant="dark" className="flex-row">
            {width > 768 ? (
              tabs.map((item, index) => {
                return (
                  <Nav.Item className="flex-row" key={index + 1}>
                    <Nav.Link
                      eventKey={item.title}
                      title={item.title}
                      onClick={setNavKey}
                      className={
                        item.title == key ? `${styles.borderBottom}` : null
                      }
                    >
                      {item.title} 
                    </Nav.Link>
                  </Nav.Item>
                );
              })
            ) : (
              <NavDropdown title={key} id="nav-dropdown">
                {tabs.map((item, index) => {
                  return (
                    <NavDropdown.Item
                      key={index + 1}
                      eventKey={item.title}
                      onClick={setNavKey}
                      title={item.title}
                      className={
                        item.title == key ? `${styles.borderBottom}` : null
                      }
                    >
                      {item.title}
                    </NavDropdown.Item>
                  );
                })}
              </NavDropdown>
            )}
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="پروفایل">
              {Object.keys(profile).map((value,index) => {
                return (
                  <InputGroup
                    size="default"
                    className={width > 768 ? "w-25 mb-3" : "w-100"}
                    key={index+1}
                  >
                    <InputGroup.Text id="inputGroup-sizing-default">
                      {profile[value]}
                    </InputGroup.Text>
                    <Form.Control
                      placeholder={profile[value]}
                      aria-label={value}
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </InputGroup>
                );
              })}
            </Tab.Pane>
            <Tab.Pane eventKey="سفارش ها">orders tab content</Tab.Pane>
            <Tab.Pane eventKey="لیست علاقه مندی ها">3 tab content</Tab.Pane>
            <Tab.Pane eventKey="تاریخچه سفارشات">4 tab content</Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </div>
  );
};

export default UserProfile;
