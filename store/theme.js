import themeGetters from './theme/getters'
import themeActions from './theme/actions'
import themeMutations from './theme/mutations'
export const state = () => {
  return {
    theme: '', // 'dark' | 'light'
  }
}
export const getters = themeGetters
export const mutations = themeMutations
export const actions = themeActions
