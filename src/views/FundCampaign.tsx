import React from "react";
import { BackButton } from '../components/BackButton';

interface FundCampaignProps {
  exit: () => void;
}

export function FundCampaign(props: FundCampaignProps) {

  const { exit } = props;

  return (
    <div>
      <BackButton onClick={exit}/>
      Fund Campaign
    </div>
  )
}
