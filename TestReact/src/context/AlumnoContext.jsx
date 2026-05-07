import { createContext, useContext, useState } from "react";

const AlumnoContext = createContext();

export function AlumnoProvider({ children }) {
    const [alumno, setAlumno] = useState({
        nombre: "Bryan Gallardo",
        carrera: "Licenciatura en Informatica",
        grupo: "4-1",
        semestre: "8to"
    });

    const actualizarAlumno = (nuevosDatos) => {
        setAlumno(nuevosDatos);
    };

    return (
        <AlumnoContext.Provider value={{ alumno, actualizarAlumno }}>
            {children}
        </AlumnoContext.Provider>
    );
}

export function useAlumnoContext() {
    return useContext(AlumnoContext);
}
