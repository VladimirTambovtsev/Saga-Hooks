import {useState, useEffect} from 'react'
import {useDispatch} from "react-redux";
import {addEntryCreator, updateEntryCreator} from "../redux/actions/entries.actions";
import {v4 as uuid} from "uuid";
import {closeEditModalCreator} from "../redux/actions/modals.actions";

export const useEntryDetails = (desc= '', val = '', isExp = '') => {
    const [description, setDescription] = useState(desc);
    const [value, setValue] = useState(val);
    const [isExpense, setIsExpense] = useState(isExp);

    const dispatch = useDispatch()

    useEffect(() => {
        setDescription(desc)
        setValue(val)
        setIsExpense(isExp)
    }, [desc, val, isExp])

    const addEntry = () => {
        dispatch(addEntryCreator({
            id: uuid(),
            value, description, isExpense
        }))
        resetValues()
    }

    const updateEntry = (id) => {
        dispatch(updateEntryCreator(
            id,
            {
                id,
                description,
                value,
                isExpense
            }
        ))
        dispatch(closeEditModalCreator())
        resetValues()
    }

    function resetValues() {
        setDescription('')
        setValue('')
        setIsExpense(false)
    }

    return {
        description, setDescription,
        value, setValue,
        isExpense, setIsExpense,
        addEntry,
        updateEntry
    }
}