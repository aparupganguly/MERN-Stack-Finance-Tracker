import { SignedIn, UserButton, useUser } from "@clerk/clerk-react";
import { AddPage } from "../addPage";
import { FinancialRecordList } from "./financial-record-list";
import Navbar from "../../components/Navbar";

export const Dashboard = () => {
  const { user } = useUser();
  return (
    <div className="dashboardContianer">
      <p className ="user-text">Welcome {user?.firstName}!</p>
      <p className="exp-text">YOUR EXPENSES</p>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <FinancialRecordList />
    </div>
  );
};
