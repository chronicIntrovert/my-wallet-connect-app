import { EthereumClient } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { WagmiConfig } from 'wagmi'

import { App } from './App'
import bitskiLogo from './assets/bitski.svg';
import { chains, client, walletConnectProjectId } from './wagmi'

const ethereumClient = new EthereumClient(client, chains)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WagmiConfig client={client}>
      <App />
      <Web3Modal
        projectId={walletConnectProjectId}
        ethereumClient={ethereumClient}
        mobileWallets={[
          {
            id: 'bitski',
            name: 'Bitski',
            links: {
              native: 'bitski://',
              universal: 'https://wallet.bitski.com/walletconnect',
            }
          }
        ]}
        desktopWallets={[
          {
            id: 'bitski',
            name: 'Bitski',
            links: {
              native: 'https://chrome.google.com/webstore/detail/bitski/feejiigddaafeojfddjjlmfkabimkell',
              universal: 'https://wallet.bitski.com',
            }
          }
        ]}
        walletImages={{
          bitski: bitskiLogo
        }}
      />
    </WagmiConfig>
  </React.StrictMode>,
)
