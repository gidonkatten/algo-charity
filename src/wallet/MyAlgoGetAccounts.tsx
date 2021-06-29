import React from "react";
import { connectToMyAlgo } from './MyAlgoWallet';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

interface MyAlgoGetAccountsProps {
  addresses: string[];
  setAddresses: any;
  selectedAddress?: string;
  setSelectedAddress: any;
}

export const MyAlgoGetAccounts = (props: MyAlgoGetAccountsProps) => {

  const {
    addresses,
    setAddresses,
    selectedAddress,
    setSelectedAddress,
  } = props;

  const connect = async () => {
    connectToMyAlgo().then(addrs => {
      setAddresses(addrs);
      if (addrs.length > 0) setSelectedAddress(addrs[0]);
    });
  }

  const handleSelectAddress = async (e) => {
    const addr = e.target.value;
    if (addr) setSelectedAddress(addr);
  }

  return (
    <div>

      <Button
        variant="contained"
        color="primary"
        onClick={connect}
        fullWidth
      >
        Connect To MyAlgo Wallet
      </Button>

      <FormControl component="fieldset">
        <RadioGroup value={selectedAddress ? selectedAddress : ''} onChange={handleSelectAddress}>
          {addresses.map((addr) => {
            return (
              <FormControlLabel
                key={addr}
                value={addr}
                control={<Radio/>}
                label={addr}
              />
            )
          })}
        </RadioGroup>
      </FormControl>

    </div>
  )
};