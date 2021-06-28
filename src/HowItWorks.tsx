import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import React from 'react';

export function HowItWorks() {
  return (
    <>
      <h2>How It Works</h2>

      <p className={"content"}>
        Algo Charity is a platform specifically for match funding campaigns.
        Match funding is a great way to encourage more people to give and for
        people to give more as all donations received are multiplied! One has
        the ability to make an even bigger difference!
      </p>

      <p className={"content"}>
        Blockchain technology guarantees that your contributions are matched to
        give you the peace of mind that your money matters.
      </p>

      <Grid container>
        <Grid item xs={5}>
          <h3>Matcher</h3>
          Become a matcher and commit to matching donations up to a certain
          amount with a chosen ratio.
        </Grid>
        <Grid item xs={2}>
          <Divider orientation="vertical" style={{ margin: 'auto'}} />
        </Grid>
        <Grid item xs={5}>
          <h3>Donor</h3>
          Become a donor and have your donation automatically matched.
        </Grid>
      </Grid>
    </>
  )
}
