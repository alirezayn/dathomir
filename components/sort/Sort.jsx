import React from "react";

const Sort = ({ sortHandler, sortData }) => {
  const sort = [{ sort: "گرانترین" }, { sort: "ارزانترین" }, { sort: "نام" }];
  return (
    <>
      {sort
        .map((item, index) => {
          return (
            <span
              key={index + 1}
              value={item.sort}
              style={{
                cursor: "pointer",
                color: `${sortData == item.sort ? "red" : "grey"}`,
                borderBottom: `${
                  sortData == item.sort ? " 1px solid red" : "none"
                }`,
              }}
              onClick={sortHandler}
            >
              {item.sort}
            </span>
          );
        })
        .sort()
        .reverse()}
    </>
  );
};

export default Sort;
