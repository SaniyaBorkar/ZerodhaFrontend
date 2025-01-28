import ChargesComponent from "./ChargesComponent";
import React from "react";

export default function Charges() {
  return (
    <div className="container p-lg-5 ">
      <div className="row p-lg-5">
        <h4  className="text-muted mb-4">Charges Explained</h4>
        <div className="col-lg-6">
          <ChargesComponent
            title="Securities/Commodities transaction tax"
            description="Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O. When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab."
          />

          <ChargesComponent
            title="Transaction/Turnover Charges"
            description="Charged by exchanges (NSE, BSE, MCX) on the value of your transactions. BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017) BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover. BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022. BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover."
          />
          <ChargesComponent
            title="Call & trade"
            description="Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders."
          />
          <ChargesComponent
            title="Stamp charges"
            description="Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories."
          />
        </div>
        <div className="col-lg-6">
          <ChargesComponent
            title="Account with debit balance"
            description="If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order."
          />
          <ChargesComponent
            title="GST"
            description="Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)"
          />
          <ChargesComponent
            title="DP (Depository participant) charges"
            description="₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the trading account ledger when stocks are sold, irrespective of quantity. Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction on the CDSL fee. Debit transactions of mutual funds & bonds get an additional discount of ₹0.25 on the CDSL fee."
          />
          <ChargesComponent
            title="AMC (Account maintenance charges)"
            description="For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. To learn more about BSDA, Click here For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days). To learn more about AMC, Click here"
          />
        </div>
      </div>
    </div>
  );
}
