import React from "react";
import { BackButton } from '../components/BackButton';
import { Search } from '../App';

interface FundCampaignProps {
  selectedAddress?: string;
  search: Search
  appState?: Map<string, any>;
  exit: () => void;
}

export function FundCampaign(props: FundCampaignProps) {

  const {
    selectedAddress,
    search,
    exit,
  } = props;

  const searching = (
    <>Searching...</>
  )

  const notVerified = (
    <>The application couldn't be found or verified</>
  )

  const verified = (
    <>verified</>
  )

  return (
    <div>

      <BackButton onClick={exit}/>

      {search === Search.SEARCHING ? searching : null}
      {search === Search.NOT_VERIFIED ? notVerified : null}
      {search === Search.VERIFIED ? verified : null}

    </div>
  )
}
