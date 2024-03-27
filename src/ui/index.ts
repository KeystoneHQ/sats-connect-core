import { Config } from '@sats-connect/ui';
import { SupportedWallet } from 'src/provider';

export const xverseIcon =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyIiBoZWlnaHQ9IjEwMiIgdmlld0JveD0iMCAwIDEwMiAxMDIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGlkPSJJY29uX0FydCAoRWRpdCBNZSkiPgo8cmVjdCB3aWR0aD0iMTAyIiBoZWlnaHQ9IjEwMiIgZmlsbD0iIzE4MTgxOCIvPgo8ZyBpZD0iTG9nby9FbWJsZW0iIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8yMF8xMjIzKSI+CjxwYXRoIGlkPSJWZWN0b3IiIGQ9Ik03NC42NTQyIDczLjg4ODNWNjUuMjMxMkM3NC42NTQyIDY0Ljg4OCA3NC41MTc3IDY0LjU2MDYgNzQuMjc0NSA2NC4zMTc0TDM3LjQzOTcgMjcuNDgyNUMzNy4xOTY1IDI3LjIzOTIgMzYuODY5MSAyNy4xMDI4IDM2LjUyNTggMjcuMTAyOEgyNy44NjlDMjcuNDQxNiAyNy4xMDI4IDI3LjA5MzggMjcuNDUwNiAyNy4wOTM4IDI3Ljg3OFYzNS45MjExQzI3LjA5MzggMzYuMjY0NCAyNy4yMzAyIDM2LjU5MTcgMjcuNDczNCAzNi44MzVMNDAuNjk1MiA1MC4wNTY3QzQwLjk5NzUgNTAuMzU5MSA0MC45OTc1IDUwLjg1MDEgNDAuNjk1MiA1MS4xNTI0TDI3LjMyMTEgNjQuNTI2NUMyNy4xNzU2IDY0LjY3MiAyNy4wOTM4IDY0Ljg2OTggMjcuMDkzOCA2NS4wNzQ0VjczLjg4ODNDMjcuMDkzOCA3NC4zMTUzIDI3LjQ0MTYgNzQuNjYzNSAyNy44NjkgNzQuNjYzNUg0Mi4zMzQyQzQyLjc2MTYgNzQuNjYzNSA0My4xMDk0IDc0LjMxNTMgNDMuMTA5NCA3My44ODgzVjY4LjY5NThDNDMuMTA5NCA2OC40OTEyIDQzLjE5MTIgNjguMjkzNSA0My4zMzY4IDY4LjE0NzlMNTAuNTExNCA2MC45NzMzQzUwLjgxMzggNjAuNjcwOSA1MS4zMDQ4IDYwLjY3MDkgNTEuNjA3MiA2MC45NzMzTDY0LjkxOTggNzQuMjg2MUM2NS4xNjMxIDc0LjUyOTMgNjUuNDkwNCA3NC42NjU4IDY1LjgzMzcgNzQuNjY1OEg3My44NzY3Qzc0LjMwNDIgNzQuNjY1OCA3NC42NTE5IDc0LjMxNzYgNzQuNjUxOSA3My44OTA2TDc0LjY1NDIgNzMuODg4M1oiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGlkPSJWZWN0b3JfMiIgZD0iTTU1LjM1OCAzOC41NjcySDYyLjYwMzFDNjMuMDMyOCAzOC41NjcyIDYzLjM4MjkgMzguOTE3MyA2My4zODI5IDM5LjM0NjlWNDYuNTkyMUM2My4zODI5IDQ3LjI4NzcgNjQuMjI0IDQ3LjYzNTUgNjQuNzE1MSA0Ny4xNDIyTDc0LjY1NDEgMzcuMTg3M0M3NC43OTk0IDM3LjA0MTggNzQuODgxNiAzNi44NDQgNzQuODgxNiAzNi42MzcxVjI3LjkxODlDNzQuODgxNiAyNy40ODkyIDc0LjUzMzQgMjcuMTM5MSA3NC4xMDE3IDI3LjEzOTFMNjUuMjUzOCAyNy4xMjc3QzY1LjA0NyAyNy4xMjc3IDY0Ljg0OTIgMjcuMjA5NiA2NC43MDE0IDI3LjM1NTFMNTQuODA1NiAzNy4yMzVDNTQuMzE0NSAzNy43MjYgNTQuNjYyMyAzOC41NjcyIDU1LjM1NTcgMzguNTY3Mkg1NS4zNThaIiBmaWxsPSIjRUU3QTMwIi8+CjwvZz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8yMF8xMjIzIj4KPHJlY3Qgd2lkdGg9IjQ3LjgxMjUiIGhlaWdodD0iNDcuODEyNSIgZmlsbD0id2hpdGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI3LjA5MzggMjcuMDkzOCkiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K';

export function createDefaultConfig(providers: SupportedWallet[]): Config {
  const config: Config = { providers: [] };
  // Xverse
  const xverseProvider = providers.find(
    (provider) => provider.id === 'XverseProviders.BitcoinProvider'
  );
  config.providers.push(
    xverseProvider
      ? xverseProvider
      : {
          id: 'XverseProviders.BitcoinProvider',
          name: 'Xverse',
          icon: xverseIcon,
          isInstalled: false,
          chromeWebStoreUrl:
            'https://chromewebstore.google.com/detail/xverse-wallet/idnnbdplmphpflfnlkomgpfbpcgelopg',
          googlePlayStoreUrl:
            'https://play.google.com/store/apps/details?id=com.secretkeylabs.xverse',
          iOSAppStoreUrl: 'https://apps.apple.com/app/xverse-bitcoin-web3-wallet/id1552272513',
          webUrl: 'https://www.xverse.app/',
        }
  );

  // Unisat
  const unisatProvider = providers.find((provider) => provider.id === 'unisat');
  if (unisatProvider && unisatProvider.isInstalled) {
    config.providers.push(unisatProvider);
  }

  // Rest
  config.providers.concat(
    providers.filter((provider) => {
      return provider.id !== 'xverseProviders.bitcoinProvider' && provider.id !== 'unisat';
    })
  );

  return config;
}
