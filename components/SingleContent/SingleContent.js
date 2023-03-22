import Head from "next/head";
import React from "react";

const SingleContent = (props) => {
  return (
    <>
      <Head>
        <title>{props.name}</title>
      </Head>

      <>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
      </>
    </>
  );
};

export default SingleContent;
