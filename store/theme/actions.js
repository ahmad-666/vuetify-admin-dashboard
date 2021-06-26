export default {
  setTheme(vuexContext, theme) {
    localStorage.setItem('theme', theme)
    vuexContext.commit('setTheme', theme)
  },
  autoTheme(vuexContext) {
    const theme = localStorage.getItem('theme')
    if (!theme || theme === 'dark') vuexContext.dispatch('setTheme', 'dark')
    else vuexContext.dispatch('setTheme', 'light')
  },
}
