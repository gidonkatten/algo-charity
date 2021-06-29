import { encodeUint64, OnApplicationComplete, SuggestedParams } from 'algosdk';
import { algodClient, waitForConfirmation } from './Utils';
import { CallApplTxn, CreateApplTxn, SignedTx } from '@randlabs/myalgo-connect';
import { myAlgoWallet } from './MyAlgoWallet';

async function getParams(): Promise<SuggestedParams> {
  let params: SuggestedParams = await algodClient.getTransactionParams().do();
  params.flatFee = true;
  params.fee = 1000;
  return params;
}

export async function createApplication(
  selectedAddr: string,
  name: string,
  start: number,
  expiry: number,
  goal: number,
  statefulBytes: Uint8Array,
  clearBytes: Uint8Array,
) {
  const params: SuggestedParams = await getParams();

  const enc = new TextEncoder();
  const appArgs: Uint8Array[] = [
    enc.encode(name),
    encodeUint64(start),
    encodeUint64(expiry),
    encodeUint64(goal),
  ];

  // Create and sign txn
  const createApp: CreateApplTxn = {
    ...params,
    flatFee: true,
    type: 'appl',
    from: selectedAddr,
    appApprovalProgram: statefulBytes,
    appClearProgram: clearBytes,
    appLocalInts: 2,
    appLocalByteSlices: 0,
    appGlobalInts: 4,
    appGlobalByteSlices: 2,
    appArgs: appArgs,
  }
  const signedCreateApp: SignedTx = await myAlgoWallet.signTransaction(createApp);

  // Send and wait for confirmation
  const tx = await algodClient.sendRawTransaction(signedCreateApp.blob).do();
  console.log("Transaction: " + tx.txId);
  await waitForConfirmation(tx.txId);

  // Get the new app's id
  const pendingTx = await algodClient.pendingTransactionInformation(tx.txId).do();
  const appId = pendingTx["application-index"];
  console.log("AppId: " + appId);

  return appId;
}

export async function setEscrow(
  selectedAddr: string,
  appId: number,
  escrowAddr: string,
) {
  const params: SuggestedParams = await getParams();

  const enc = new TextEncoder();
  const appArgs: Uint8Array[] = [
    enc.encode('set_escrow'),
    enc.encode(escrowAddr),
  ];

  // Create and sign txn
  const callAppTxn: CallApplTxn = {
    ...params,
    flatFee: true,
    type: "appl",
    from: selectedAddr,
    appIndex: appId,
    appOnComplete: OnApplicationComplete.NoOpOC,
    appArgs: appArgs,
  }
  const signedCallApp: SignedTx = await myAlgoWallet.signTransaction(callAppTxn);

  // Send and wait for confirmation
  const tx = await algodClient.sendRawTransaction(signedCallApp.blob).do();
  console.log("Transaction: " + tx.txId);
  await waitForConfirmation(tx.txId);
}

export async function match() {

}

export async function donate() {

}

export async function recover() {

}

export async function claim() {

}