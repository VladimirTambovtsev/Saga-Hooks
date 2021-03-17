import {takeLatest, call, put} from "@redux-saga/core/effects";
import {typesEntries} from "../actions/entries.actions";
import axios from "axios";

export function* addEntrySaga() {
    yield takeLatest(typesEntries.ADD_ENTRY, addEntryToServer)
}

function* addEntryToServer({payload}) {
    yield call(addEntry, payload)
    yield call(addEntryDetails, payload)
    // yield put({type: typesEntries.ADD_ENTRY, payload})
}

async function addEntry({id, description}) {
    await axios.post(`http://localhost:3001/entries`, {
        id, description
    })
}

async function addEntryDetails({id, isExpense, value}) {
    await axios.post(`http://localhost:3001/values`, {
        id, isExpense, value
    })
}