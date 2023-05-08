import React, { useContext } from "react";
import { WrapperContext } from "../App";

export default function Form() {
    const {
        firstName,
        setFirstName,
        lastName,
        setLastName,
        city,
        setCity,
        setTableData,
        tableData,
        isEdit,
        handleEdit,
    } = useContext(WrapperContext);

    // if (firstName === "") {
    //     alert("enter value")
    // } else {
    //     handleSubmit()
    // }
    function handleSubmit(e) {
        e.preventDefault();
        if (firstName !== "" && lastName !== "" && city !== "") {
            const date = new Date();

            const formValue = { id: date.getTime(), firstName, lastName, city };
            setTableData([...tableData, formValue]);

            setFirstName("");
            setLastName("");
            setCity("");
        }
        else { alert("enter values") }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 p-3 shadow my-5">
                    <h3 className="text-center">Add Data</h3>
                    <form action="">
                        <div className="mb-3">
                            <input
                                type="text"
                                placeholder="Enter First Name"
                                className="form-control"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                placeholder="Enter Last Name"
                                className="form-control"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="text"
                                value={city}
                                placeholder="City"
                                className="form-control"
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </div>
                        {isEdit ? (
                            <button className="btn btn-warning" onClick={handleEdit}>
                                Edit
                            </button>
                        ) : (

                            <button onClick={handleSubmit} className="btn btn-primary">
                                Add
                            </button>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );

}