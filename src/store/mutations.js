export default {
    setCanvasScale(state, scale) {
        state.canvasScale = scale
    },
    addCom(state, com) {
        state.compConfig.children.push(com)
    }
}