const userProfile = ref<any>()
const isWalletConnected = ref(true)

export const useWallet = () => {
  const set = (user: any) => {
    userProfile.value = user
  }

  const get = () => {
    return userProfile.value
  }

  return {
    isWalletConnected: readonly(isWalletConnected),
    set,
    get,
  }
}
