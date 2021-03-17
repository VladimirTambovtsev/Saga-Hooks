
export const typesEntries = {
    ADD_ENTRY: 'ADD_ENTRY',
    REMOVE_ENTRY: 'REMOVE_ENTRY',
    UPDATE_ENTRY: 'UPDATE_ENTRY',
    GET_ALL_ENTRIES: 'GET_ALL_ENTRIES', // make request to server
    POPULATE_ALL_ENTRIES: 'POPULATE_ALL_ENTRIES', // show entries that fetched from 'GET_ALL_ENTRIES'
    POPULATE_ALL_ENTRIES_VALUES: 'POPULATE_ALL_ENTRIES_VALUES' // show values for entries that fetched from 'GET_ALL_ENTRIES'
}

export const addEntryCreator = (payload) => {
    return {type: typesEntries.ADD_ENTRY, payload}
}
export const removeEntryCreator = (payload) => {
    return {type: typesEntries.REMOVE_ENTRY, payload}
}
export const updateEntryCreator = (id, entry) => {
    return {type: typesEntries.UPDATE_ENTRY, payload: {id, entry}}
}
export const getAllEntries = (payload) => {
    return { type: typesEntries.GET_ALL_ENTRIES }
}
export const populateEntries = (entries) => {
    return { type: typesEntries.POPULATE_ALL_ENTRIES, payload: entries }
}
export const populateEntriesDetails = (id, entry) => {
    return {type: typesEntries.POPULATE_ALL_ENTRIES_VALUES, payload: {id, entry}}
}