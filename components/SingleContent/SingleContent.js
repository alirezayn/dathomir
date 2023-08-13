import Head from "next/head";
import React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Specification from "./Specification";

const SingleContent = (props) => {
  return (
    <>
      <Head>
        <title>{props.name}</title>
      </Head>

      <Tabs
      defaultActiveKey="home"
      // id="uncontrolled-tab-example"
      className="mb-3 mt-5"
    >
      <Tab eventKey="home" title="توضیحات" className="m-3">
        <p align="justify">{props.description}</p>
      </Tab>
      <Tab eventKey="profile" title="مشخصات">
        <Specification />
      </Tab>
      <Tab eventKey="contact" title="دیدگاه">
        Tab content for Contact
      </Tab>
    </Tabs>
    </>
  );
};

export default SingleContent;
