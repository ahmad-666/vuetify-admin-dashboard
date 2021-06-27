export default {
  setRtl(vuexContext, rtl) {
    localStorage.setItem('rtl', rtl)
    vuexContext.commit('setRtl', rtl)
  },
  autoRtl(vuexContext) {
    const rtl = localStorage.getItem('rtl')
    if (!rtl || rtl === 'false') vuexContext.dispatch('setRtl', false)
    // default is ltr
    else vuexContext.dispatch('setRtl', true)
  },
}
