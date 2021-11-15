export const state = () => ({
    token: null,
    modal: false,
    actionType: 'create',
})

export const mutations = {
    setModal(state, actionType) {
        state.modal = true
        state.actionType = actionType
    },
    hideModal(state){
        state.modal = false
    }
}

export const actions = {

} 

export const getters = {
    modal: s => s.modal
}