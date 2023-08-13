import React from "react";
import { Table } from "react-bootstrap";

const Specification = () => {
  const data = [
    {1: "1"},
    {2: "2"},
    {3: "3"},
    {4: "4"},
    {5: "5"},
    {6: "6"},
    {7: "7"},
    {8: "8"},
    {9: "9"},
    {10: "10"},
    {11: "11"},
    {12: "12"},
    {13: "13"},
  ];
  return (
    
      <Table striped bordered hover>
        <tbody>
            {data.map((item,index)=>{
                return(  
                    <tr key={index}>
                        <td>{`spec_${index + 1}`}</td>
                        <td>{`spec_${index + 1}`}</td>
                    </tr>
                )
            })}
        </tbody>
      </Table>
    
  );
};

export default Specification;
