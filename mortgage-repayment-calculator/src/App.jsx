function App() {
  return (
    <div className="mortgagecalc__container">
      <div className="mortgagecalc__card">
        <div className="mortgagecalc__card-left">
          <div className="mortgagecalc__heading-container">
            <h2 className="mortgagecalc__heading">Mortgage Calculator</h2>
            <a className="mortgagecalc-link">Clear All</a>
          </div>
          <div className="mortgagecalc__input-container">
            <div className="mortgagecalc__amount">
              {/* <span className="mortgagecalc__pound">$</span> */}
              <label htmlFor="amount">Mortgage Amount</label>
              <input type="text" className="calc-amount" name="amount" />
            </div>
            <div className="mortgagecal__termrate-container">
              <div className="momortgagecal__term">
                <label htmlFor="amount">Mortgage Term</label>
                <input type="text" className="calc-term" name="term" />
              </div>
              <div className="momortgagecal__rate">
                <label htmlFor="amount">Mortgage Rate</label>
                <input type="text" className="calc-rate" name="rate" />
              </div>
            </div>
          </div>
          <div className="mortgagecalc__radio-container">
            <label>Mortgage Types</label>
            <div className="mortgagecalc__radio-div">
              <input type="radio" />
              <span className="mortgagecalc__radio-label">Repayment</span>
            </div>
            <div className="mortgagecalc__radio-div">
              <input type="radio" />
              <span className="mortgagecalc__radio-label">Interest Only</span>
            </div>
          </div>
          <button className="mortgagecalc__calculate-button">
            Calculate Repayments
          </button>
        </div>
        <div className="mortgagecalc__card-right">
          <div className="mortgagecalc__empty"></div>
          <div className="mortgagecalc__active"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
