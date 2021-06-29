import React, { useState } from "react";
import { CreateFundCampaign } from './views/CreateFundCampaign';
import { FundCampaign } from './views/FundCampaign';
import { Landing } from './views/Landing';

export enum PageNav {
    LANDING,
    CREATE,
    CAMPAIGN,
}

function App() {

  const [nav, setNav] = useState(PageNav.LANDING);
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(undefined);

  const enterCreate = () => setNav(PageNav.CREATE);
  const enterCampaign = () => setNav(PageNav.CAMPAIGN);
  const exit = () => setNav(PageNav.LANDING);

  return (
    <div className={"page-content"}>

      <h1>Algo Charity</h1>

      {nav === PageNav.LANDING ?
        <Landing
          addresses={addresses}
          setAddresses={setAddresses}
          selectedAddress={selectedAddress}
          setSelectedAddress={setSelectedAddress}
          enterCreate={enterCreate}
          enterCampaign={enterCampaign}
        /> : null
      }

      {nav === PageNav.CREATE ?
        <CreateFundCampaign
          selectedAddress={selectedAddress}
          exit={exit}
        /> : null
      }

      {nav === PageNav.CAMPAIGN ?
        <FundCampaign
          selectedAddress={selectedAddress}
          exit={exit}
        /> : null
      }

    </div>
  );
}

export default App;
