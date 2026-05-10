import { acceptHMRUpdate, defineStore } from 'pinia'

export const useAppStore = defineStore(
  'appStore',
  () => {
    const collapsed = ref(false)
    function toggleCollapsed() {
      collapsed.value = !collapsed.value
    }
    const transitionName = ref('fade')
    const reloadFlag = ref(false)
    async function reload(delay = 300) {
      reloadFlag.value = true
      await nextTick()
      if (delay) {
        setTimeout(() => {
          reloadFlag.value = false
        }, delay)
      }
      else {
        reloadFlag.value = false
      }
    }
    return {
      collapsed,
      toggleCollapsed,
      transitionName,
      reloadFlag,
      reload,
    }
  },
  {
    persist: {
      key: '__APP_STORE_PERSIST__',
      pick: [''],
    },
  },
)

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
}
