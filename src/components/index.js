import bar from './bar'

const components = [
  ...bar,
]

function install (Vue) {
  components.forEach(com => {
    Vue.component(com.name, com)
  })
}

export default install