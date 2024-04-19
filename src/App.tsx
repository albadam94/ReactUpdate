import { useReducer, useEffect, useMemo } from 'react';
import Form from './components/Form';
import { activityReducer, initialState } from './reducers/activity-reducer';
import ActivityList from './components/ActivityList';
import CalorieTracker from './components/CalorieTracker';

function App() {
    const [state, dispatch] = useReducer(activityReducer, initialState);

    // Almacenar las actividades en localStorage cuando cambian
    useEffect(() => {
        localStorage.setItem('activities', JSON.stringify(state.activities));
    }, [state.activities]);

    // Determinar si se puede reiniciar la aplicación
    const canRestartApp = useMemo(() => state.activities.length > 0, [state.activities]);

    return (
        <>
            <header className="bg-slate-950 py-3">
                <div className="max-w-4xl mx-auto flex justify-between items-center">
                    <h1 className="text-center text-lg font-bold text-white uppercase">
                        Contador de Calorías
                    </h1>
                    <button
                        className={`bg-gray-800 hover:bg-gray-400 p-2 font-bold uppercase text-white cursor-pointer rounded-lg text-sm ${state.activities.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={!canRestartApp}
                        onClick={() => dispatch({ type: 'restart-app' })}
                    >
                        Reiniciar App
                    </button>
                </div>
            </header>

            <section className="bg-gray-800 py-20 px-5">
                <div className="max-w-4xl mx-auto">
                    <Form dispatch={dispatch} state={state} />
                </div>
            </section>

            <section className="bg-gray-800 py-10">
                <div className="max-w-4xl mx-auto">
                    <CalorieTracker activities={state.activities} />
                </div>
            </section>

            <section className="p-10 mx-auto max-w-4xl">
                <ActivityList activities={state.activities} dispatch={dispatch} />
            </section>
        </>
    );
}

export default App;
