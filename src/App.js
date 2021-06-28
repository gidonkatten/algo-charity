import React, { useState } from "react";
import { MyAlgoGetAccounts } from "./wallet/MyAlgoGetAccounts";
import { HowItWorks } from "./HowItWorks";

function App() {

  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(undefined);

  return (
    <div className={"page-content"}>

      <h1>Algo Charity</h1>

      <MyAlgoGetAccounts
        addresses={addresses}
        setAddresses={setAddresses}
        selectedAddress={selectedAddress}
        setSelectedAddress={setSelectedAddress}
      />

      <HowItWorks/>

    </div>
  );
}

export default App;
