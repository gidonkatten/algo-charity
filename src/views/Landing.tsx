import React from "react";
import { MyAlgoGetAccounts } from '../algorand/MyAlgoGetAccounts';
import { HowItWorks } from './HowItWorks';
import { SearchFundCampaign } from '../components/SearchFundCampaign';
import Button from '@material-ui/core/Button';

interface LandingProps {
  addresses: string[];
  setAddresses: any;
  selectedAddress?: string;
  setSelectedAddress: any;
  setSearch: any;
  setAppState: any;
  enterCreate: () => void;
  enterCampaign: () => void;
}

export function Landing(props: LandingProps) {

  const {
    addresses,
    setAddresses,
    selectedAddress,
    setSelectedAddress,
    setSearch,
    setAppState,
    enterCreate,
    enterCampaign,
  } = props;

  return (
    <div>
      <MyAlgoGetAccounts
        addresses={addresses}
        setAddresses={setAddresses}
        selectedAddress={selectedAddress}
        setSelectedAddress={setSelectedAddress}
      />

      <HowItWorks/>

      <h2>Usage</h2>

      <p className={"content"}>
        Connect your MyAlgo wallet (TestNet) and then either search for an existing
        campaign or create your own!
      </p>

      <SearchFundCampaign
        enterCampaign={enterCampaign}
        setSearch={setSearch}
        setAppState={setAppState}
      />

      <br/><br/>

      <Button
      variant="contained"
      color="primary"
      onClick={enterCreate}
      fullWidth
      >
        Create Fund Campaign
      </Button>

    </div>
  )
}
