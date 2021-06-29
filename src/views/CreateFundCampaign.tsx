import React, { useState } from "react";
import { BackButton } from '../components/BackButton';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { KeyboardDateTimePicker } from "@material-ui/pickers";
import { AlgoNumberInput } from '../components/NumberInput';

interface CreateFundCampaignProps {
  exit: () => void;
}

export function CreateFundCampaign(props: CreateFundCampaignProps) {

  const [name, setName] = useState<string>('');
  const [start, setStart] = useState(null);
  const [expiry, setExpiry] = useState(null);
  const [goal, setGoal] = useState(0);

  const { exit } = props;

  const clearForm = () => {
    setName('');
    setStart(null);
    setExpiry(null);
    setGoal(0);
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // check values
    if(name.length === 0 || !start || !expiry || goal === 0) return;

    clearForm();
  }

  const handleStartChange = (date) => setStart(date);
  const handleExpiryChange = (date) => setExpiry(date)

  return (
    <div>
      <BackButton onClick={exit}/>

      <form onSubmit={handleSubmit}>

        <Grid container spacing={3}>

          <Grid item xs={7}>
            <TextField
                label="Name:"
                value={name}
                onChange={e => setName(e.target.value)}
                required
                fullWidth
                inputProps={{ maxLength: 63 }}
                InputLabelProps={{ required: false }}
            />
          </Grid>

          <Grid item xs={5}>
            <TextField
                label="Fund Goal (Algo):"
                value={goal}
                onChange={e => setGoal(Number(e.target.value))}
                required
                fullWidth
                InputProps={{ inputComponent: AlgoNumberInput }}
                InputLabelProps={{ required: false }}
            />
          </Grid>

          <Grid item xs={6}>
            <KeyboardDateTimePicker
              clearable
              label="Start date:"
              value={start}
              onChange={handleStartChange}
              disablePast
              format="yyyy/MM/dd HH:mm"
              required
              InputLabelProps={{ required: false }}
              fullWidth
            />
          </Grid>

          <Grid item xs={6}>
            <KeyboardDateTimePicker
              clearable
              label="Expiry Date:"
              value={expiry}
              onChange={handleExpiryChange}
              disablePast
              format="yyyy/MM/dd HH:mm"
              required
              InputLabelProps={{ required: false }}
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              style={{ margin: '8px 0px' }}
              fullWidth
            >
              Create
            </Button>
          </Grid>

        </Grid>

      </form>

    </div>
  )
}
