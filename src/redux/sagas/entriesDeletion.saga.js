import {take, call, put} from "@redux-saga/core/effects";
import {typesEntries} from "../actions/entries.actions";
import axios from "axios";

export function* deleteEntrySaga() {
    while (true) {
        const { payload } = yield take(typesEntries.REMOVE_ENTRY)
        yield call(deleteEntry, payload)
        yield put({type: typesEntries.REMOVE_ENTRY, payload: {id: payload}})
    }
}

async function deleteEntry(id) {
    await axios.delete(`http://localhost:3001/entries/${id}`)
    await axios.delete(`http://localhost:3001/values/${id}`)
}