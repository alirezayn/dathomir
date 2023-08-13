import Image from "next/image";
import React from "react";
import { RiShieldCheckLine } from "react-icons/ri";
const Benefits = ({ data }) => {
  return (
    <>
      {data.incredibleOffers ? (
        <>
          <Image
            style={{ marginTop: "15px" }}
            src={
              "https://www.digikala.com/statics/img/svg/productCard/topBadge/IncredibleOffer.svg"
            }
            alt={"پیشنهاد شگفت انگیز"}
            width={116}
            height={14}
          />
          <hr style={{width:"90%",textAlign:"center"}}/>
        </>
      ) : null}
      <div style={{fontSize:"14px"}}>
        <RiShieldCheckLine /> گارانتی اصالت و سلامت فیزیکی کالا
      </div>
    </>
  );
};

export default Benefits;
