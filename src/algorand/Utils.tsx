import { TealKeyValue } from 'algosdk/dist/types/src/client/v2/algod/models/types';

const algosdk = require('algosdk');

const algodServer = 'https://testnet.algoexplorerapi.io/'
const indexerServer = 'https://testnet.algoexplorerapi.io/idx2'
const port = 443;
export const algodClient = new algosdk.Algodv2('', algodServer, port);
export const indexerClient = new algosdk.Indexer('', indexerServer, port);

/**
 * Utility function to wait on a transaction to be confirmed
 * the timeout parameter indicates how many rounds do you wish to check pending transactions for
 */
export const waitForConfirmation = async function (txId: string, timeout: number = 1000) {
  if (algodClient == null || txId == null || timeout < 0) {
    throw new Error("Bad arguments.");
  }

  const status = (await algodClient.status().do());
  if (status === undefined) throw new Error("Unable to get node status");

  const startround = status["last-round"] + 1;
  let currentround = startround;

  while (currentround < (startround + timeout)) {
    let pendingInfo = await algodClient.pendingTransactionInformation(txId).do();
    if (pendingInfo !== undefined) {
      if (pendingInfo["confirmed-round"] !== null && pendingInfo["confirmed-round"] > 0) {
        //Got the completed Transaction
        return pendingInfo;
      }
      else {
        if (pendingInfo["pool-error"] != null && pendingInfo["pool-error"].length > 0) {
          // If there was a pool error, then the transaction has been rejected!
          throw new Error("Transaction Rejected pool error" + pendingInfo["pool-error"]);
        }
      }
    }
    await algodClient.statusAfterBlock(currentround).do();
    currentround++;
  }

  throw new Error("Transaction not confirmed after " + timeout + " rounds!");
};

/**
 * Extract app state given TealKeyValue[]
 */
export function extractAppState(state?: TealKeyValue[] | undefined): Map<string, any> {
  const map: Map<string, any> = new Map();

  if (state) {
    // Check if has a state
    if (state) {
      state.forEach(pair => {
        const key: string = atob(pair.key);
        let value: number | bigint | string;
        if (pair.value.type === 1) value = atob(pair.value.bytes);
        else value = pair.value.uint;
        map.set(key, value);
      })
    }
  }

  return map;
}
