const runtimeConfig = useRuntimeConfig()
const envData = runtimeConfig.public.envData
export const baseUrl = envData.VITE_BASEURL