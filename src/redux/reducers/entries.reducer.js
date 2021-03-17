import {typesEntries as types} from "../actions/entries.actions";

export const entriesReducer = (state = [], action) => {
    switch (action.type) {
        case types.ADD_ENTRY:
            const newEntries = state.concat({...action.payload})
            return newEntries
        case types.REMOVE_ENTRY:
            const filteredEntries = state.filter(entry => entry.id !== action.payload)
            return filteredEntries
        case types.POPULATE_ALL_ENTRIES_VALUES:
        case types.UPDATE_ENTRY:
            const editedEntries = [...state]
            const index = editedEntries.findIndex(entry => entry.id === action.payload.id)
            editedEntries[index] = { ...editedEntries[index], ...action.payload.entry}
            return editedEntries
        case types.POPULATE_ALL_ENTRIES:
            return action.payload
        default:
            return state
    }
}
