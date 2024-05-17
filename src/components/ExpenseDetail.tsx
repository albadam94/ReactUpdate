import { LeadingActions as SwipeLeadingActions, SwipeableList, SwipeableListItem, SwipeAction, TrailingActions as SwipeTrailingActions } from 'react-swipeable-list';
import "react-swipeable-list/dist/styles.css";
import { useMemo } from "react";
import { formatDate } from "../helpers";
import { Expense } from "../types";
import AmountDisplay from "./AmountDisplay";
import { categories } from "../data/categories";
import { useBudget } from '../hooks/useBudget';

type ExpenseDetailProps = {
    expense: Expense;
};

export default function ExpenseDetail({ expense }: Readonly<ExpenseDetailProps>) {
    const { dispatch } = useBudget();

    const categoryInfo = useMemo(() => {
        return categories.find(cat => cat.id === expense.category);
    }, [expense]);

    const leadingActions = () => (
        <SwipeLeadingActions>
            <SwipeAction onClick={() => dispatch({ type: 'get-expense-by-id', payload: { id: expense.id } })}>
                Actualizar
            </SwipeAction>
        </SwipeLeadingActions>
    );

    const trailingActions = () => (
        <SwipeTrailingActions>
            <SwipeAction onClick={() => dispatch({ type: 'remove-expense', payload: { id: expense.id } })}>
                Eliminar
            </SwipeAction>
        </SwipeTrailingActions>
    );

    return (
        <SwipeableList>
            <SwipeableListItem
                maxSwipe={30}
                leadingActions={leadingActions()}
                trailingActions={trailingActions()}
            >
                <div className="bg-white shadow-lg p-10 w-full border-b border-gray-200 flex gap-5 items-center">
                    <div>
                        {categoryInfo && (
                            <img src={`/icono_${categoryInfo.icon}.svg`} 
                                 alt="icono Gasto"
                                 className="w-20" 
                            />
                        )}
                    </div>
                    <div className="flex-1 space-y-2">
                        <p className="text-sm font-bold uppercase text-slate-500">
                            {categoryInfo ? categoryInfo.name : 'Categoría desconocida'}
                        </p>
                        <p>{expense.expenseName}</p>
                        <p className="text-slate-600 text-sm">
                            {expense.date ? formatDate(expense.date.toString()) : 'Fecha desconocida'}
                        </p>
                    </div>
                    <AmountDisplay amount={expense.amount} />
                </div>
            </SwipeableListItem>
        </SwipeableList>
    );
}
