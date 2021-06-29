import React from "react";
import { MyAlgoGetAccounts } from '../wallet/MyAlgoGetAccounts';
import { HowItWorks } from './HowItWorks';

interface LandingProps {
  addresses: string[];
  setAddresses: any;
  selectedAddress?: string;
  setSelectedAddress: any;
  enterCreate: () => void;
  enterCampaign: () => void;
}

export function Landing(props: LandingProps) {

  const {
    addresses,
    setAddresses,
    selectedAddress,
    setSelectedAddress,
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
    </div>
  )
}
