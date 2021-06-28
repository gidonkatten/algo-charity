import MyAlgo, { Accounts } from '@randlabs/myalgo-connect';

export const myAlgoWallet = new MyAlgo();

/*Warning: Browser will block pop-up if user doesn't trigger myAlgoWallet.connect() with a button interation */
export const connectToMyAlgo = async () => {
  try {
    const accounts: Accounts[] = await myAlgoWallet.connect();
    return accounts.map(account => account.address);
  } catch (err) {
    console.error(err);
    return [];
  }
}