import React from "react";
import styles from "./Login.module.scss";
import Link from "next/link";
import { IoLogInOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Nav, NavDropdown } from "react-bootstrap";
import {LiaSignOutAltSolid, LiaUserSolid} from 'react-icons/lia'
import { useRouter } from "next/router";
import { removeToken } from "@/redux/features/UserReducer";
const LoginRegister = () => {
  const user_profile = useSelector((state) => state.user.profile);
  const dispacth = useDispatch()
    const router = useRouter();
  const logoutUser = () => {
    dispacth(removeToken());
    router.push("/");
  };
  return (
    <>
      {user_profile.username ? (
        // <Link href={"/user/dashboard"} className={`${styles.mainContainer}`}>
        //   <span>خوش آمدید {user_profile.username}</span>
        // </Link>
        // <Nav.Item>
        //   <Nav.Link eventKey="1" href="#/home">
        //     NavLink 1 content
        //   </Nav.Link>
        // </Nav.Item>
        // <Nav.Item>
        //   <Nav.Link eventKey="2" title="Item">
        //     NavLink 2 content
        //   </Nav.Link>
        // </Nav.Item>
        // <Nav.Item>
        //   <Nav.Link eventKey="3" disabled>
        //     NavLink 3 content
        //   </Nav.Link>
        // </Nav.Item>
        <Nav activeKey="1">
        <NavDropdown title={<LiaUserSolid style={{fontSize:"25px"}} />} id="nav-dropdown" className={`${styles.color}`}>
          <NavDropdown.Item eventKey="4.1" href="/user/dashboard">{user_profile.username}</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.4" onClick={logoutUser}>خروج <LiaSignOutAltSolid /></NavDropdown.Item>
        </NavDropdown>
      </Nav>
      ) : (
        <Link href={"/user/login"} className={`${styles.mainContainer}`}>
          <IoLogInOutline className={`${styles.icon}`} />
          <span>ورود | ثبت نام</span>
        </Link>
      )}
    </>
  );
};

export default LoginRegister;
