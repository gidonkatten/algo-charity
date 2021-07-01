import React, { useState } from "react";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import { IntegerInput } from "./NumberInput";
import { algodClient, extractAppState } from '../algorand/Utils';
import { getApplication, getEscrowAddress } from '../utils/Requests';
import { Search } from '../App';

interface SearchFundCampaignProps {
  enterCampaign: () => void;
  setSearch: any;
  setAppState: any;
}

export function SearchFundCampaign(props: SearchFundCampaignProps) {

  const [appId, setAppId] = useState<number>(NaN);

  const { enterCampaign, setSearch, setAppState } = props;

  const search = async () => {
    setSearch(Search.SEARCHING);
    enterCampaign();

    // verify app
    const { statefulBytes, clearBytes } = await getApplication();
    const approval =  Buffer.from(Uint8Array.from(Object.values(statefulBytes))).toString('base64');
    const clear =  Buffer.from(Uint8Array.from(Object.values(clearBytes))).toString('base64');
    let params;
    try {
      params = (await algodClient.getApplicationByID(appId).do())["params"];
      if (approval !== params["approval-program"] || clear !== params["clear-state-program"]) {
        setSearch(Search.NOT_VERIFIED);
        return
      }
    } catch (err) {
      console.log(err);
      setSearch(Search.NOT_VERIFIED);
      return;
    }

    // verify escrow
    const appState = extractAppState(params["global-state"]);
    const escrowAddr = await getEscrowAddress(appId);
    if (appState.get("escrow") !== escrowAddr) {
      setSearch(Search.NOT_VERIFIED);
      return
    }

    setSearch(Search.VERIFIED);
    setAppState(appState);
  }

  return (
      <TextField
        label="Search..."
        variant="outlined"
        value={appId || ''}
        onChange={e => setAppId(parseInt(e.target.value))}
        InputProps={{
          inputComponent: IntegerInput,
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={search}
                edge="end"
                aria-label="search"
              >
                <SearchIcon/>
              </IconButton>
            </InputAdornment>
          )
        }}
        required
        fullWidth
        InputLabelProps={{ required: false }}
      />
  )
}
