import {take, call, put, fork} from "@redux-saga/core/effects";
import axios from "axios";
import {populateEntries, populateEntriesDetails, typesEntries} from "../actions/entries.actions";



export function* getAllEntries() {
    yield take(typesEntries.GET_ALL_ENTRIES)
    console.log('saga!!')
    const {data} = yield call(axios, 'http://localhost:3001/entries')
    yield put(populateEntries(data))
}

export function* getAllEntriesDetails() {
    const { payload } = yield take(typesEntries.POPULATE_ALL_ENTRIES)
    for (let entry of payload) {
        yield fork(getEntryDetails, entry.id)
    }
}

export function* getEntryDetails(id) {
    const {data} = yield call(axios, `http://localhost:3001/values/${id}`)
    console.log('data: ', data)
    yield put(populateEntriesDetails(id, data))
}