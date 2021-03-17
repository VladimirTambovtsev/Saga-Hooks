import React, {useState, useEffect} from 'react';
import './App.css';
import {Container} from 'semantic-ui-react'
import MainHeader from "./components/MainHeader";
import EntryForm from "./components/EntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLines from "./components/EntryLines";
import ModalEdit from "./components/ModalEdit";
import {useDispatch, useSelector} from "react-redux";
import {getAllEntries} from "./redux/actions/entries.actions";


function App() {
    const [entry, setEntry] = useState();
    const [totalIncome, setIncomeTotal] = useState(0);
    const [totalExpense, setExpenseTotal] = useState(0);
    const [total, setTotal] = useState(0);

    const {isOpen, id} = useSelector((state => state.modals))
    const entries = useSelector(state => state.entries)

    useEffect(() => {
        const index = entries.findIndex(entry => entry.id === id)
        setEntry(entries[index])
    }, [isOpen, id, entries])

    useEffect(() => {
        let totalIncome = 0
        let totalExpense = 0
        entries.map(entry => {
            if (entry.isExpense) {
                return (totalExpense += Number(entry.value))
            } else {
                return (totalIncome += Number(entry.value))
            }
        })
        let total = totalIncome - totalExpense

        setExpenseTotal(totalExpense)
        setIncomeTotal(totalIncome)
        setTotal(total)

    }, [entries]);

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllEntries())
    }, [dispatch]);


    return (
    <Container>
        <MainHeader title={'Budget'} />
        <DisplayBalance size={'small'} color={'black'} title={'Your Balance'} value={'2,550.53'} />

        <DisplayBalances totalIncome={totalIncome} totalExpense={totalExpense}  />
        <MainHeader title={'History'} type={'h3'} />

        <EntryLines entries={entries} />

        <MainHeader title={'Add new transaction'} type={'h3'} />
        <EntryForm />

        <ModalEdit isOpen={isOpen} {...entry} id={id} />
    </Container>
  );
}

export default App;

