/* eslint-disable */
import PropTypes from 'prop-types';

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = ""
}) {
  return (
    <div className={`bg-gray-700 p-4 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2 pr-2">
        <label className="text-gray-400 mb-2 inline-block">
          {label}
        </label>
        <input
          className="outline-none w-full bg-transparent py-1.5 text-gray-200 border-b border-gray-600 focus:border-blue-500"
          type="number"
          placeholder="Amount"
          value={amount}
          disabled={amountDisable}
          onChange={(e) => { onAmountChange && onAmountChange(e.target.value) }}
          step="any" // Allows for decimal values
          min="0"
        />
      </div>
      <div className="w-1/2 pl-2 flex flex-col justify-between">
        <p className="text-gray-400 mb-2">Currency Type</p>
        <select
          className="rounded-lg px-2 py-1 bg-gray-600 text-gray-200 cursor-pointer outline-none border border-gray-600 focus:border-blue-500"
          value={selectCurrency}
          onChange={(e) => { onCurrencyChange && onCurrencyChange(e.target.value) }}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option value={currency} key={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

InputBox.propTypes = {
  label: PropTypes.string.isRequired,
  amount: PropTypes.string, // Change from number to string for better handling
  onAmountChange: PropTypes.func,
  onCurrencyChange: PropTypes.func,
  currencyOptions: PropTypes.arrayOf(PropTypes.string),
  selectCurrency: PropTypes.string,
  amountDisable: PropTypes.bool,
  currencyDisable: PropTypes.bool,
  className: PropTypes.string
};

export default InputBox;
