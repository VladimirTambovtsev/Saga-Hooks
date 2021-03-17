
export const typesModals = {
    OPEN_EDIT_MODAL: 'OPEN_EDIT_MODAL',
    CLOSE_EDIT_MODAL: 'CLOSE_EDIT_MODAL'
}

export const openEditModalCreator = (id) => {
   return {type: typesModals.OPEN_EDIT_MODAL, payload: { id }}
}
export const closeEditModalCreator = (payload) => {
    return {type: typesModals.CLOSE_EDIT_MODAL, payload}
}