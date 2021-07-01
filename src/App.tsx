import React, { useState } from "react";
import { CreateFundCampaign } from './views/CreateFundCampaign';
import { FundCampaign } from './views/FundCampaign';
import { Landing } from './views/Landing';

export enum PageNav {
    LANDING,
    CREATE,
    CAMPAIGN,
}

export enum Search {
  SEARCHING,
  VERIFIED,
  NOT_VERIFIED,
}

function App() {

  const [nav, setNav] = useState(PageNav.LANDING);
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(undefined);
  const [search, setSearch] = useState<Search>(Search.SEARCHING);
  const [appState, setAppState] = useState<Map<string, any>>(new Map);

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
          setSearch={setSearch}
          setAppState={setAppState}
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
          search={search}
          appState={appState}
          exit={exit}
        /> : null
      }

    </div>
  );
}

export default App;
