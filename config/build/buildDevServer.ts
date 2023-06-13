import type { Configuration as DebServerConfiguration } from 'webpack-dev-server'
import { BuildOptions } from './types/config'

export function buildDevServer(options: BuildOptions): DebServerConfiguration {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true,
  }
}
