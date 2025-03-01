import { CdpAction, CdpActionSchemaAny } from "./cdp-action";

import { DeployNftAction } from "./deploy-nft";
import { DeployTokenAction } from "./deploy-token";
import { GetBalanceAction } from "./get-balance";
import { GetWalletDetailsAction } from "./get-wallet-details";
import { MintNftAction } from "./mint-nft";
import { RegisterBasenameAction } from "./register-basename";
import { RequestFaucetFundsAction } from "./request-faucet-funds";
import { TradeAction } from "./trade";
import { TransferAction } from "./transfer";

export function getAllCdpActions(): CdpAction<CdpActionSchemaAny, any>[] {
  return [
    new GetWalletDetailsAction(),
    new DeployNftAction(),
    new DeployTokenAction(),
    new GetBalanceAction(),
    new MintNftAction(),
    new RegisterBasenameAction(),
    new RequestFaucetFundsAction(),
    new TradeAction(),
    new TransferAction(),
  ];
}

export const CDP_ACTIONS = getAllCdpActions();

export * from "./types";
export * from "./cdp-action";