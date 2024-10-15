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
              <label htmlFor="amount" className="calc-amountlabel">
                Mortgage Amount
              </label>
              <div className="calc-amount-container">
                <span className="pound-icon">£</span>
                <input type="text" className="calc-amount" name="amount" />
              </div>
            </div>
            <div className="mortgagecal__termrate-container">
              <div className="momortgagecal__term">
                <label htmlFor="amount" className="calc-termlabel">
                  Mortgage Term
                </label>
                <div className="calc-term-container">
                  <span className="years-text">years</span>
                  <input type="text" className="calc-term" name="term" />
                </div>
              </div>
              <div className="momortgagecal__rate">
                <label htmlFor="amount" className="calc-ratelabel">
                  Mortgage Rate
                </label>
                <div className="calc-rate-container">
                  <span className="percent-text">%</span>
                  <input type="text" className="calc-rate" name="rate" />
                </div>
              </div>
            </div>
          </div>
          <div className="mortgagecalc__radio-container">
            <label className="mortgagecalc__radio-label">Mortgage Types</label>
            <div className="mortgagecalc__radio-div">
              <input type="radio" />
              <span className="mortgagecalc__radio-value">Repayment</span>
            </div>
            <div className="mortgagecalc__radio-div">
              <input type="radio" />
              <span className="mortgagecalc__radio-value">Interest Only</span>
            </div>
          </div>
          <div className="mortgagecalc__button-container">
            <span className="calculator"></span>
            <button className="mortgagecalc__calculate-button">
              Calculate Repayments
            </button>
          </div>
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
