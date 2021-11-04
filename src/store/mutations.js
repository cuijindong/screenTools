import utils from '@/utils/index'

export default {
    setCanvasScale(state, scale) {
        state.canvasScale = scale
    },
    setAcitveComp(state, comp) {
        state.acitveComp = comp
    },
    addCom(state, com) {
        let len = state.compConfig.children.length
        if (len) {
            let lastcom = state.compConfig.children[len -1]
            com.zIndex = lastcom.zIndex + 1
        } else {
            com.zIndex = 1
        }
        state.compConfig.children.push(com)
    },
    deleteCom(state, com) {
        let index = utils.getIndexForArr(state.compConfig.children, com, 'zIndex')
        state.compConfig.children.splice(index, 1)
    },
    changeTierCom(state, com) {
        let index = utils.getIndexForArr(state.compConfig.children, com, 'zIndex')
    },
    updateCom(state, com) {
        let index = com.zIndex
        state.compConfig.children[index] = com
    }
}