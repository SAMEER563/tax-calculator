import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <header className="bg-blue-500 text-white p-4 text-center">
        <h1 className="text-3xl font-bold">Welcome to Tax Calculation Portal</h1>
      </header>
      <div className="mt-8 text-center">
        <p className="text-lg">
          Calculate your estimated tax liability based on your income and
          deductions.
        </p>
        <Link
          to="/tax-calculation"
          className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded"
        >
          Start Calculating Tax
        </Link>
      </div>
    </div>
  );
};

export default Home;
