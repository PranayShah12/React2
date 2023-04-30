import React, { useContext } from "react";
import { wrapperContext } from "../App";

export default function Form() {
    const [firstName, setFirstName, lastName, setLastName, city, setCity, tableData, setTableData] = useContext(wrapperContext)

    function handleSubmit(e) {
        e.preventDefault();
        const formValue = { firstName, lastName, city };
        setTableData([...tableData, formValue]);

        setFirstName("");
        setLastName("");
        setCity("");
    }
    return (
        <div className="container">
            <div className="col-md-6 offset-md-3 p-3 shadow my-5">
                <h3 className="text-center">Add Data</h3>
                <form action="">
                    <div className="mb-3">
                        <input type="text"
                            placeholder="Enter First Name"
                            className="form-control"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <input type="text"
                            placeholder="Enter First Name"
                            className="form-control"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <input type="text"
                            placeholder="Enter First Name"
                            className="form-control"
                            value={city}
                            onChange={(e) => setCity(e.target.value)} />
                    </div>
                    <button onClick={handleSubmit} className="btn btn-primary">Add</button>
                </form>
            </div>
        </div>
    )
}