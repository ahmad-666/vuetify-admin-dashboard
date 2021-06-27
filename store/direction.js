import directionGetters from './direction/getters'
import directionActions from './direction/actions'
import directionMutations from './direction/mutations'
export const state = () => {
  return {
    rtl: false,
  }
}
export const getters = directionGetters
export const mutations = directionMutations
export const actions = directionActions
