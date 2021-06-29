const SERVER_URL = 'https://algo-charity.herokuapp.com';

export async function getApplication(): Promise<{
  statefulBytes: Uint8Array,
  clearBytes: Uint8Array,
}> {
  const res = await fetch(`${SERVER_URL}/application`);
  return await res.json();
}

export async function getEscrowAddress(appId: number): Promise<string> {
  const res = await fetch(`${SERVER_URL}/escrow/${appId}`);
  return await res.json();
}
