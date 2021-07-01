import React, { useState } from "react";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import { IntegerInput } from "./NumberInput";


export function SearchFundCampaign() {

  const [appId, setAppId] = useState<number>(NaN);

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
                onClick={() => console.log('clicked')}
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
