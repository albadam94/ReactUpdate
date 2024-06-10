import { usePatientStore } from "../store";
import PatientDetail from "./PatientDetail";

export default function PatientList() {
  const patients = usePatientStore((state) => state.patients);

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
          {patients.map((patient) => (
            <PatientDetail key={patient.id} patient={patient} />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-lg mt-5 text-center">
            Añade <span className="text-indigo-600 font-bold">pacientes</span> para comenzar
          </p>
        </>
      )}
    </div>
  );
}
