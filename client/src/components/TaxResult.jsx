import React from "react";
import PropTypes from "prop-types";

const TaxResult = ({ result }) => {
  return (
    <div className="mt-6 p-4 border border-gray-300 rounded">
      <h3 className="text-xl font-bold">Tax Calculation Result</h3>
      <p>Taxable Income: ₹{result.taxableIncome}</p>
      <p>Tax Payable: ₹{result.taxPayable}</p>
      {result.taxSuggestions && (
        <div className="mt-4">
          <h4 className="font-semibold">Tax Savings Suggestions</h4>
          <ul className="list-disc ml-4">
            {result.taxSuggestions.map((suggestion, index) => (
              <li key={index}>{suggestion}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// Prop types for result
TaxResult.propTypes = {
  result: PropTypes.shape({
    taxableIncome: PropTypes.number.isRequired,
    taxPayable: PropTypes.number.isRequired,
    taxSuggestions: PropTypes.arrayOf(PropTypes.string), // optional
  }).isRequired,
};

export default TaxResult;
