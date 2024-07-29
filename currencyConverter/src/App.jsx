import { useState, useEffect } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { Button } from "@mui/material";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";

function App() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState("");

  const { data: fromCurrencyRates, loading, error } = useCurrencyInfo(from);

  // Calculate conversion
  useEffect(() => {
    if (amount && fromCurrencyRates && fromCurrencyRates[to]) {
      setConvertedAmount((parseFloat(amount) * fromCurrencyRates[to]).toFixed(2));
    }
  }, [amount, from, to, fromCurrencyRates]);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  if (loading) return <div className="text-gray-400 text-center">Loading...</div>;
  if (error) return <div className="text-red-400 text-center">Error fetching currency data: {error.message}</div>;
  if (!fromCurrencyRates) return <div className="text-yellow-400 text-center">No data available</div>;

  const options = Object.keys(fromCurrencyRates);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-gray-200 p-4">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-4xl font-bold text-center text-blue-500 mb-8">Currency Converter</h1>
        
        <InputBox
          label="From"
          amount={amount}
          onAmountChange={setAmount}
          onCurrencyChange={setFrom}
          currencyOptions={options}
          selectCurrency={from}
          className="mb-4"
        />

        <div className="flex justify-center items-center my-6">
          <Button
            variant="outlined"
            color="primary"
            onClick={swap}
            endIcon={<SwapHorizIcon />}
            className="text-gray-200 border-gray-600 hover:bg-gray-700 hover:border-gray-500"
          >
            Swap
          </Button>
        </div>

        <InputBox
          label="To"
          amount={convertedAmount}
          onAmountChange={() => {}}
          onCurrencyChange={setTo}
          currencyOptions={options}
          selectCurrency={to}
          amountDisable={true}
        />
      </div>
    </div>
  );
}

export default App;
