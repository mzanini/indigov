import React from "react";
import Constituent from "../model/Constituent";
import Header from "./Header";
import Row from "./Row";

interface Props {
  constituents: [Constituent]
}

const Table: React.FC<Props> = ({constituents}) => {
  return (
    <>
      <Header />
      {constituents.map(c => <Row constituent={c}/>)}
    </>
  );
};

export default Table;
