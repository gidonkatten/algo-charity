import React from "react";
import { BackButton } from '../components/BackButton';
import { Search } from '../App';
import TextField from '@material-ui/core/TextField';
import { convertUnixTimeToDate, convertUnixTimeToTime } from '../utils/Utils';
import { microalgosToAlgos } from 'algosdk';

interface FundCampaignProps {
  selectedAddress?: string;
  search: Search
  appState: Map<string, any>;
  exit: () => void;
}

export function FundCampaign(props: FundCampaignProps) {

  const {
    selectedAddress,
    search,
    appState,
    exit,
  } = props;

  const searching = (
    <>Searching...</>
  )

  const notVerified = (
    <>The application couldn't be found or verified</>
  )

  const verified = appState.size > 0 && (
    <>

      <TextField
        label="Selected Address:"
        value={selectedAddress ? selectedAddress : ''}
        helperText="This can be changed in the landing page"
        required
        InputLabelProps={{ required: false }}
        fullWidth
      />

      <p>
        Name: {appState?.get('name')}
      </p>

      <p>
        Start of Campaign: {convertUnixTimeToDate(appState?.get('start'))}
        {convertUnixTimeToTime(appState?.get('start'))}
      </p>

      <p>
        End of Campaign: {convertUnixTimeToDate(appState?.get('expiry'))}
        {convertUnixTimeToTime(appState?.get('expiry'))}
      </p>

      <p>
        Goal: {microalgosToAlgos(appState?.get('goal'))} Algo
      </p>

      <p>
        Raised: {microalgosToAlgos(appState?.get('donated') || 0)} Algo
      </p>
    </>
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
