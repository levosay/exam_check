import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()
const { apiEndpoint } = publicRuntimeConfig

export const CONFIG = {
  apiEndpoint
}
