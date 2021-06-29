import React from "react";
import { BackButton } from '../components/BackButton';

interface FundCampaignProps {
  selectedAddress?: string;
  exit: () => void;
}

export function FundCampaign(props: FundCampaignProps) {

  const { selectedAddress, exit } = props;

  return (
    <div>
      <BackButton onClick={exit}/>
      Fund Campaign
    </div>
  )
}
