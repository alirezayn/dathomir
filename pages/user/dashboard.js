import UserProfile from "@/components/userProfile/UserProfile";
import { removeToken } from "@/redux/features/UserReducer";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const dashboard = () => {
  const userExist = useSelector((state) => state.user.token);
  const dispacth = useDispatch();
  const router = useRouter();
  const logoutUser = () => {
    dispacth(removeToken());
    router.push("/");
  };
  return (
    <>
    <Head>
      <title>
        پروفایل شخصی
      </title>
    </Head>
      {userExist ? (
        <>
          <UserProfile />
          
          <button onClick={logoutUser}>logout</button>
        </>
      ) : (
        <div>please login</div>
      )}
    </>
  );
};

export default dashboard;
