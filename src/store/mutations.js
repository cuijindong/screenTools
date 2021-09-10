export default {
    setCanvasScale(state, scale) {
        state.canvasScale = scale
    },
    setAcitveComp(state, comp) {
        state.acitveComp = comp
    },
    addCom(state, com) {
        com.zIndex = state.compConfig.children.length
        state.compConfig.children.push(com)
    },
    updateCom(state, com) {
        let index = com.zIndex
        state.compConfig.children[index] = com
    }
}