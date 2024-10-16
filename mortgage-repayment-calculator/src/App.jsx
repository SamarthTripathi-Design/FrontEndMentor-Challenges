import { useReducer } from "react";

const initialState = {
  amount: "",
  term: "",
  rate: "",
  mortgageType: "repayment",
};

function postReducer(state, action) {
  switch (action.type) {
    case "SET_AMOUNT":
      return { ...state, amount: action.payload };
    case "SET_TERM":
      return { ...state, term: action.payload };
    case "SET_RATE":
      return { ...state, rate: action.payload };
    case "SET_MORTGAGE_TYPE":
      return { ...state, mortgageType: action.payload };
    case "CLEAR":
      return initialState;
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(postReducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: `SET_${name.toUpperCase()}`, payload: value });
  };

  const handleRadioChange = (e) => {
    dispatch({ type: "SET_MORTGAGE_TYPE", payload: e.target.value });
  };

  const handleClear = () => {
    dispatch({ type: "CLEAR" });
  };

  return (
    <div className="mortgagecalc__container">
      <div className="mortgagecalc__card">
        <div className="mortgagecalc__card-left">
          <div className="mortgagecalc__heading-container">
            <h2 className="mortgagecalc__heading">Mortgage Calculator</h2>
            <a className="mortgagecalc-link" onClick={handleClear}>
              Clear All
            </a>
          </div>
          <div className="mortgagecalc__input-container">
            <div className="mortgagecalc__amount">
              <label htmlFor="amount" className="calc-amountlabel">
                Mortgage Amount
              </label>
              <div className="calc-amount-container">
                <span className="pound-icon">£</span>
                <input
                  className="calc-amount"
                  name="amount"
                  value={state.amount}
                  onChange={handleChange}
                  type="number"
                />
              </div>
            </div>
            <div className="mortgagecal__termrate-container">
              <div className="momortgagecal__term">
                <label htmlFor="amount" className="calc-termlabel">
                  Mortgage Term
                </label>
                <div className="calc-term-container">
                  <span className="years-text">years</span>
                  <input
                    type="number"
                    className="calc-term"
                    name="term"
                    value={state.term}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="momortgagecal__rate">
                <label htmlFor="amount" className="calc-ratelabel">
                  Mortgage Rate
                </label>
                <div className="calc-rate-container">
                  <span className="percent-text">%</span>
                  <input
                    type="number"
                    className="calc-rate"
                    name="rate"
                    value={state.rate}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mortgagecalc__radio-container">
            <label className="mortgagecalc__radio-label">Mortgage Types</label>
            <div
              className={`mortgagecalc__radio-div ${
                state.mortgageType === "repayment" ? "checked" : ""
              }`}
              onClick={() =>
                handleRadioChange({ target: { value: "repayment" } })
              }
            >
              <input
                type="radio"
                className="mortgagecalc__radio-input"
                value="repayment"
                checked={state.mortgageType === "repayment"}
                onChange={handleRadioChange}
              />
              <span className="mortgagecalc__radio-value">Repayment</span>
            </div>
            <div
              className={`mortgagecalc__radio-div ${
                state.mortgageType === "interest-only" ? "checked" : ""
              }`}
              onClick={() =>
                handleRadioChange({ target: { value: "interest-only" } })
              }
            >
              <input
                type="radio"
                className="mortgagecalc__radio-input"
                value="interest-only"
                checked={state.mortgageType === "interest-only"}
                onChange={handleRadioChange}
              />
              <span className="mortgagecalc__radio-value">Interest Only</span>
            </div>
          </div>
          <div className="mortgagecalc__button-container">
            <span className="calculatorIcon">
              <img
                src="../assets/images/icon-calculator.svg"
                alt="Calculator Icon"
              />
            </span>
            <button className="mortgagecalc__calculate-button">
              Calculate Repayments
            </button>
          </div>
        </div>
        <div className="mortgagecalc__card-right">
          <div className="mortgagecalc__empty">
            <div className="mortgagecalc__empty-imgcontainer">
              <img
                src="../assets/images/illustration-empty.svg"
                alt="empty illustration"
              />
            </div>
            <h3 className="mortgagecalc__empty-heading">Results shown here</h3>
            <p className="mortgagecalc__empty-info">
              Complete the form and click “calculate repayments” to see what
              your monthly repayments would be.
            </p>
          </div>
          <div className="mortgagecalc__active"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
