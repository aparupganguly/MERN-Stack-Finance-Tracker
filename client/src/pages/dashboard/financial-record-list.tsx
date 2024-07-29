import React from "react";
import { useFinancialRecords } from "../../contexts/financial-record-context";
import "../../styles/Dashboard.css";
export const FinancialRecordList = () => {
  const { records } = useFinancialRecords();

  return (
    <>
      <div className="recordContainer">
        {records.length === 0 ? (
          <p>No records available.</p>
        ) : (
          records.map((record) => (
            <div key={record._id} className="record">
              <p className=" desc-text">{record.description}</p>
              <p className=" amount-text">
                {" "}
                <span className="dollar">$</span> {record.amount}
              </p>
              <p className=" date-text">
                {new Date(record.date).toLocaleDateString()}
              </p>
              <p className=" category-text">{record.category}</p>
              <p className=" payment-text">{record.paymentMethod}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
};
