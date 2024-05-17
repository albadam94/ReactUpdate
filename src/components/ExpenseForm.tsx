import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import { categories } from '../data/categories';
import ErrorMessage from './ErrorMessage';
import { DraftExpense, Value } from '../types';
import { useBudget } from '../hooks/useBudget';

const ExpenseForm = () => {
    const [expense, setExpense] = useState<DraftExpense>({
        expenseName: '',
        amount: 0,
        category: '',
        date: new Date()
    });

    const [error, setError] = useState<string | null>(null);
    const { dispatch, state, remainingBudget } = useBudget();
    const [previousAmount, setPreviousAmount] = useState<number>(0);

    useEffect(() => {
        if (state.editingID) {
            const editingExpense = state.expenses.find(currentExpense => currentExpense.id === state.editingID);
            if (editingExpense) {
                setExpense(editingExpense);
                setPreviousAmount(editingExpense.amount);
            }
        }
    }, [state.editingID, state.expenses]);

    useEffect(() => {
        if (previousAmount > remainingBudget) {
            setExpense(prevExpense => ({
                ...prevExpense,
                amount: previousAmount
            }));
        }
    }, [previousAmount, remainingBudget]);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        const isAmountField = name === 'amount';
        setExpense(prevExpense => ({
            ...prevExpense,
            [name]: isAmountField ? Number(value) : value
        }));
    };

    const handleChangeDate = (value: Value) => {
        setExpense(prevExpense => ({
            ...prevExpense,
            date: value instanceof Date ? value : new Date()
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!expense.expenseName || expense.amount <= 0 || !expense.category) {
            setError('Todos los campos son obligatorios');
        } else {
            if (state.editingID) {
                dispatch({ type: 'update-expense', payload: { expense: { id: state.editingID, ...expense } } });
            } else {
                dispatch({ type: 'add-expense', payload: { expense } });
            }
            setExpense({
                expenseName: '',
                amount: 0,
                category: '',
                date: new Date()
            });
            setError(null);
        }
    };

    if (expense.amount > remainingBudget) {
        return (
            <ErrorMessage>
                No puedes gastar más de lo que tienes disponible
            </ErrorMessage>
        );
    }

    return (
        <form className="space-y-5 raleway" onSubmit={handleSubmit}>
            <legend className="uppercase text-center text-2xl font-black border-b-4 border-blue-500 py-2">
                {state.editingID ? 'Guardar Cambios' : 'Nuevo Gasto'}
            </legend>
            {error && (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                    <ErrorMessage>{error}</ErrorMessage>
                </div>
            )}

            <div className="flex flex-col gap-2">
                <label htmlFor="expenseName" className="text-xl">
                    Nombre del Gasto
                </label>
                <input
                    type="text"
                    id="expenseName"
                    className="bg-slate-100 p-2"
                    placeholder="Ej. Transporte"
                    name="expenseName"
                    value={expense.expenseName}
                    onChange={handleChange}
                />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="amount" className="text-xl">
                    Cantidad
                </label>
                <input
                    type="number"
                    id="amount"
                    className="bg-slate-100 p-2"
                    placeholder="Añade la cantidad"
                    name="amount"
                    value={expense.amount}
                    onChange={handleChange}
                />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="category" className="text-xl">
                    Categoría
                </label>
                <select
                    id="category"
                    className="bg-slate-100 p-2"
                    name="category"
                    value={expense.category}
                    onChange={handleChange}
                >
                    <option value="">Seleccione una categoría</option>
                    {categories.map(category => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="date" className="text-xl">
                    Fecha Gasto:
                </label>
                <DatePicker
                    id="date"
                    className="bg-slate-100 p-2 border-0"
                    value={expense.date}
                    onChange={handleChangeDate}
                />
            </div>
            <input
                type="submit"
                value={state.editingID ? 'Guardar Cambios' : 'Nuevo Gasto'}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold p-2 cursor-pointer raleway"
            />
        </form>
    );
};

export default ExpenseForm;
