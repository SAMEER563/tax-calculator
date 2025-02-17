import React, { useState } from "react";
import PropTypes from "prop-types";

const IncomeForm = ({ onSubmit }) => {
  const [incomeDetails, setIncomeDetails] = useState({
    annualIncome: "",
    investments: "",
    otherDeductions: "",
    incomeFromOtherSources: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setIncomeDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log("incomeDetails", incomeDetails);

    // Ensure all fields are filled and are valid numbers
    if (
      !incomeDetails.annualIncome ||
      !incomeDetails.investments ||
      !incomeDetails.otherDeductions ||
      !incomeDetails.incomeFromOtherSources
    ) {
      alert("Please fill in all fields.");
      return;
    }

    // Check if fields are valid numbers
    if (
      isNaN(incomeDetails.annualIncome) ||
      isNaN(incomeDetails.investments) ||
      isNaN(incomeDetails.otherDeductions) ||
      isNaN(incomeDetails.incomeFromOtherSources)
    ) {
      alert("Please enter valid numbers for all fields.");
      return;
    }

    // Convert string values to numbers if necessary
    const data = {
      annualIncome: parseFloat(incomeDetails.annualIncome),
      investments: parseFloat(incomeDetails.investments),
      otherDeductions: parseFloat(incomeDetails.otherDeductions),
      incomeFromOtherSources: parseFloat(incomeDetails.incomeFromOtherSources),
    };

    //  console.log("data", data);
    // Send data to parent component
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Annual Income</label>
        <input
          type="number"
          name="annualIncome"
          value={incomeDetails.annualIncome}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Enter your annual income"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Investments (80C, 80D, etc.)</label>
        <input
          type="number"
          name="investments"
          value={incomeDetails.investments}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Enter your investments"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Other Deductions (HRA, LTA, etc.)</label>
        <input
          type="number"
          name="otherDeductions"
          value={incomeDetails.otherDeductions}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Enter other deductions"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Income from Other Sources</label>
        <input
          type="number"
          name="incomeFromOtherSources"
          value={incomeDetails.incomeFromOtherSources}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Enter income from other sources"
        />
      </div>
      <button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded">
        Calculate Tax
      </button>
    </form>
  );
};

IncomeForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default IncomeForm;
