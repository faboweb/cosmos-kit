import logo from './logo.png';
import { Wallet } from '@cosmos-kit/core';

export const Coin98ExtensionInfo: Wallet = {
  name: 'coin98-extension',
  prettyName: 'Coin98',
  logo: logo,
  mode: 'extension',
  //Enable for dapp browser
  mobileDisabled: false,
  rejectMessage: {
    source: 'Request rejected',
  },
  downloads: [
    {
      device: 'desktop',
      browser: 'chrome',
      link: 'https://chrome.google.com/webstore/detail/aeachknmefphepccionboohckonoeemg',
    },
    {
      link: 'https://coin98.com/wallet',
    },
  ],
};
