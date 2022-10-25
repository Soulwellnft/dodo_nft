export const candyMachineAddress = "0xb0c25580975b1ba425a95c309e0a44b912cfd32331c1ce451959e88edf357850";
export const collectionName = "Aptos Croak"; // Case sensitive!
export const collectionCoverUrl = "https://gateway.pinata.cloud/ipfs/QmXA15EJwSsKpHKYTuxWFyTRr1iaJnoMFUzFbeaFhj5sGi";
export const mode = "mainnet"; // "dev" or "test" or "mainnet"

export let NODE_URL;
export const CONTRACT_ADDRESS = "0xc071ef709539f7f9372f16050bf984fe6f11850594b8394f11bc74d22f48836b";
export const COLLECTION_SIZE = 666
let FAUCET_URL;
if (mode == "dev") {
    NODE_URL = "https://fullnode.devnet.aptoslabs.com/v1";
    FAUCET_URL = "https://faucet.devnet.aptoslabs.com";
} else if (mode === "test") {
    NODE_URL = "https://fullnode.testnet.aptoslabs.com/v1";
    FAUCET_URL = "https://faucet.testnet.aptoslabs.com";
} else {
    NODE_URL = "https://fullnode.mainnet.aptoslabs.com/v1";
    FAUCET_URL = null;
}

