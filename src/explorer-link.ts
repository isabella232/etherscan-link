import prefixForNetwork from './prefix-for-network'

export = function getExplorerLink(hash: string, network: string): string {
  const prefix = prefixForNetwork(network)
  return `https://${prefix}etherscan.io/tx/${hash}`
}
