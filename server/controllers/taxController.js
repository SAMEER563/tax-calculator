// taxController.js
const calculateTax = (req, res) => {
    const {
      annualIncome,
      investments,
      otherDeductions,
      incomeFromOtherSources,
    } = req.body;
  
    // Handle missing or invalid data here
    if (!annualIncome || !investments || !otherDeductions || !incomeFromOtherSources) {
      return res.status(400).json({ error: "All fields are required." });
    }
  
    // You can add tax calculation logic here, for now let's simulate it
    const taxableIncome = annualIncome - (investments + otherDeductions);
    const taxPayable = taxableIncome * 0.1;  // Example tax rate
  
    return res.json({
      taxableIncome,
      taxPayable,
      taxSuggestions: ["Invest in more tax-saving instruments!"],
    });
  };
  
  module.exports = { calculateTax };
  