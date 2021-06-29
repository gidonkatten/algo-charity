import React from "react";
import { BackButton } from '../components/BackButton';

interface CreateFundCampaignProps {
  exit: () => void;
}

export function CreateFundCampaign(props: CreateFundCampaignProps) {

  const { exit } = props;

  return (
    <div>
      <BackButton onClick={exit}/>
      Create Fund Campaign
    </div>
  )
}
