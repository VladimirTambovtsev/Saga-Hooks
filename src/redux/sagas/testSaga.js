import {put, take, delay, call} from "@redux-saga/core/effects";

function double(number) {
    return number * 2
}

export function* testSaga() {
    while (true) {
        console.log("Starting saga!")
        const state = yield take('TEST_MESSAGE')
        const a = yield call(double, 2)
        const b = yield double(3)
        console.log('a: ', a)
        console.log('b: ', b)
        console.log("Finishing saga! with state: ", state)
    }
}

export function* dispatchTest() {
    while (true) {
        yield delay(1000)
        yield put({ type: 'TEST_MESSAGE', payload: 1000 })
    }
}