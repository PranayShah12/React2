import { createContext, useState } from "react";
import Form from "./Components/Form";
import Table from "./Components/Table";


export const wrapperContext = createContext();

export default function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [tableData, setTableData] = useState("")
  return (
    <wrapperContext.Provider value={{ firstName, setFirstName, lastName, setLastName, city, setCity, tableData, setTableData }}>
      <Form />
      <Table />
    </wrapperContext.Provider>
  )

}

