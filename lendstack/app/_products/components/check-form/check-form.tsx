"use client"
import React, { useEffect, useState } from 'react';
import './check-form.css';

const CheckForm: React.FC = () => {
    const [flipped, setFlipped] = useState(false);
  
    return (
      <main className="bg-white p-5 rounded-lg shadow-lg">
        <input
          id="flipped"
          type="checkbox"
          name="flipped"
          checked={flipped}
          onChange={() => setFlipped(!flipped)}
        />
        <label htmlFor="flipped" className="block mb-4 font-bold">
          Flip to Back
        </label>
        <form className="check">
          <div className={`check__front ${flipped ? 'hidden' : 'block'}`}>
            <div className="check__person mb-4">
              <address className="check__address">
                <strong>Jack O. Lantern</strong>
                <br />
                123 Somewhere Lane
                <br />
                Harrisburg, PA 17110
              </address>
            </div>
            <div className="check__date mb-4">
              <input
                id="date"
                type="text"
                name="date"
                className="check__input"
              />
              <label htmlFor="date" className="check__label">
                <small>Date</small>
              </label>
            </div>
            <div className="check__no mb-4">
              <span>1234</span>
              <br />
              <small>12-345/6789 12345</small>
            </div>
            <label className="check__label check__order-of" htmlFor="order-of">
              Pay to the Order of
            </label>
            <input
              id="order-of"
              type="text"
              name="order_of"
              className="check__input"
            />
            <label className="check__label check__currency" htmlFor="amount">
              $
            </label>
            <input
              id="amount"
              type="number"
              name="amount"
              step="0.01"
              min="0"
              className="check__input"
            />
            <input
              id="amount-in-words"
              type="text"
              name="amount_in_words"
              maxLength={99}
              className="check__input"
            />
            <label
              className="check__label check__currency-name"
              htmlFor="amount-in-words"
            >
              Dollars
            </label>
            <svg
              className="check__icon"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0 0 512 512"
              aria-label="Camera"
              role="img"
            >
              <path d="M 352 277.333 C 352 330.352 309.019 373.333 256 373.333 C 202.981 373.333 160 330.352 160 277.333 C 160 224.314 202.981 181.333 256 181.333 C 309.019 181.333 352 224.314 352 277.333 Z M 236 338.044 C 236 349.09 244.954 358.044 256 358.044 C 267.046 358.044 276 349.09 276 338.044 L 276 274.649 C 287.956 267.732 296 254.805 296 240 C 296 217.909 278.091 200 256 200 C 233.909 200 216 217.909 216 240 C 216 254.805 224.044 267.732 236 274.649 Z"></path>
              <path d="M 512.001 149.333 L 512.001 426.666 C 512.001 450.198 492.865 469.333 469.334 469.333 L 42.667 469.333 C 19.135 469.333 0 450.197 0 426.666 L 0 149.333 C 0 125.802 19.135 106.667 42.667 106.667 L 110.323 106.667 C 118.875 106.667 126.906 103.334 132.958 97.292 L 171.958 58.292 C 182.031 48.219 195.427 42.667 209.677 42.667 L 302.323 42.667 C 316.573 42.667 329.969 48.219 340.042 58.292 L 379.042 97.292 C 385.094 103.334 393.125 106.667 401.677 106.667 L 469.333 106.667 C 492.865 106.667 512 125.802 512.001 149.333 Z M 384 277.333 C 384 206.75 326.583 149.333 256 149.333 C 185.417 149.333 128 206.75 128 277.333 C 128 347.916 185.417 405.333 256 405.333 C 326.583 405.333 384 347.916 384 277.333 Z M 456 130 C 439.431 130 426 143.431 426 160 C 426 176.569 439.431 190 456 190 C 472.569 190 486 176.569 486 160 C 486 143.431 472.569 130 456 130 Z"></path>
            </svg>
            <div className="check__photo">
              <strong>Photo<br />Safe<br />Deposit&reg;</strong>
              <br />Details on back
            </div>
            <div className="check__logo">
              <small aria-label="XYZ Bank">XYZ Bank</small>
            </div>
            <div className="check__division">
              <small aria-label="Advisors">Advisors</small>
            </div>
            <div className="check__payable">
              payable through<br />XYZ Bank, N.A.
            </div>
            <label className="check__label check__memo" htmlFor="memo">
              For
            </label>
            <input id="memo" type="text" name="memo" className="check__input" />
            <label className="check__label check__signature" htmlFor="signature">
              Signature
            </label>
            <input
              id="signature"
              type="text"
              name="signature"
              className="check__input"
            />
            <div className="check__mp">
              <strong>MP</strong>
            </div>
            <div className="check__routing-no">
              <code>987654321</code>
            </div>
            <div className="check__account-no">
              <code>123457890</code>
            </div>
            <div className="check__bottom-no">
              <code>1234</code>
            </div>
            <div className="check__manufacturer">
              Harland Clarke
            </div>
          </div>
          <div className={`check__back ${flipped ? 'block' : 'hidden'}`}>
            <div className="check__info">
              <p>
                <code>987654321</code>
                <br />
                <code>123457890</code>
              </p>
              <div className="check__back-no">
                <code>1234</code>
              </div>
              <div className="check__back-person">
                Jack O. Lantern
              </div>
              <div className="check__alter-area">
                <div className="check__alter-area-head">
                  <small>Alter Area</small>
                </div>
                <div className="check__alter-area-body">
                  <div className="check__alter-area-border"></div>
                  <strong>XYZ Bank&nbsp;&nbsp;XYZ Bank&nbsp;&nbsp;XYZ Bank&nbsp;&nbsp;XYZ Bank&nbsp;&nbsp;XYZ Bank&nbsp;&nbsp;XYZ Bank</strong>
                </div>
              </div>
              <div className="check__features">
                <strong>
                  Security Features exceed industry standards and include:
                </strong>
                <ul className="check__features-list">
                  <li>
                    ImageMatch&reg;: Matching account and check number
                    <br />
                    on back <small>(Patent No. 5,564,779)</small>
                  </li>
                  <li>
                    SecurityScreen&trade;: Micro-print lines
                    <br />
                    difficult to replicate <small>image</small>
                  </li>
                  <li>
                    VoidPantograph&trade;: &quot;VOID&quot; appears
                    <br />
                    when copied
                  </li>
                </ul>
              </div>
              <svg
                className="check__logo check__back-logo"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="48"
                height="48"
                viewBox="0 0 512 512"
                aria-label="Logo"
                role="img"
              >
                <path d="M 352 277.333 C 352 330.352 309.019 373.333 256 373.333 C 202.981 373.333 160 330.352 160 277.333 C 160 224.314 202.981 181.333 256 181.333 C 309.019 181.333 352 224.314 352 277.333 Z M 236 338.044 C 236 349.09 244.954 358.044 256 358.044 C 267.046 358.044 276 349.09 276 338.044 L 276 274.649 C 287.956 267.732 296 254.805 296 240 C 296 217.909 278.091 200 256 200 C 233.909 200 216 217.909 216 240 C 216 254.805 224.044 267.732 236 274.649 Z"></path>
                <path d="M 512.001 149.333 L 512.001 426.666 C 512.001 450.198 492.865 469.333 469.334 469.333 L 42.667 469.333 C 19.135 469.333 0 450.197 0 426.666 L 0 149.333 C 0 125.802 19.135 106.667 42.667 106.667 L 110.323 106.667 C 118.875 106.667 126.906 103.334 132.958 97.292 L 171.958 58.292 C 182.031 48.219 195.427 42.667 209.677 42.667 L 302.323 42.667 C 316.573 42.667 329.969 48.219 340.042 58.292 L 379.042 97.292 C 385.094 103.334 393.125 106.667 401.677 106.667 L 469.333 106.667 C 492.865 106.667 512 125.802 512.001 149.333 Z M 384 277.333 C 384 206.75 326.583 149.333 256 149.333 C 185.417 149.333 128 206.75 128 277.333 C 128 347.916 185.417 405.333 256 405.333 C 326.583 405.333 384 347.916 384 277.333 Z M 456 130 C 439.431 130 426 143.431 426 160 C 426 176.569 439.431 190 456 190 C 472.569 190 486 176.569 486 160 C 486 143.431 472.569 130 456 130 Z"></path>
              </svg>
            </div>
          </div>
        </form>
      </main>
    );
  };
  
  export default CheckForm;
