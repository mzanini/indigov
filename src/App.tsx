import parse from "csv-parse";
import React, { useEffect, useState } from "react";
import "./App.css";
import Table from "./components/Table";
import Constituent from "./model/Constituent";
import fs from "fs";

function App() {
  const [constituent, setConstituent] = useState([]);
  const [fileContent, setFileContent] = useState<Buffer | null>(null);

  useEffect(() => {
    // fs.readFile("../files/example.csv", (err, data) => {
    //   console.log(data);
    //   setFileContent(data);
    // });
  }, []);

  // const parser = parse({
  //   delimiter: ",",
  // });
  // // Use the readable stream api
  // parser.on("readable", function () {
  //   let record;
  //   console.log(record);
  //   while ((record = parser.read())) {
  //     constituent.push(record);
  //     setConstituent(constituent);
  //   }
  // });
  // parser.on("error", function (err) {
  //   console.error(err.message);
  // });

  if (fileContent) {
    const records = parse(fileContent);
    console.log(records);
  }

  return (
    <div className="App">
      <Table
        constituents={[
          {
            firstName: "marco",
            lastName: "aaaa",
            zipCode: 43434,
            email: "dsadasd@fsds.com",
          },
        ]}
      />
    </div>
  );
}

export default App;
