import fotoNoMia from '../assets/fotoNoMia.jpg';
import { useAlumnoContext } from "../context/AlumnoContext";

function Acerca() {

    const { alumno } = useAlumnoContext();

    return (
        <div>
            <h1>Acerca</h1>

            <p><strong>Nombre: </strong> {alumno.nombre} </p>
            <p><strong>Carrera: </strong> {alumno.carrea} </p>
            <p><strong>Grupo: </strong> {alumno.grupo} </p>
            <p><strong>Semestre: </strong> {alumno.semestre} </p>

            <p>
                Soy un estudiante de la UAS interesado en desarrollo web enfocado mas al backend.
                Me gusta retarme a mi mismo aprendiendo cosas nuevas.
            </p>

            <h3>Habilidades</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Nest</li>
                <li>PostgreSQL</li>
            </ul>

            <div style={{ marginTop: '20px' }}>
                <img src={fotoNoMia} alt="Mi foto" style={{ width: '250px', borderRadius: '15px', objectFit: 'cover' }} />
            </div>

        </div>
    )
}

export default Acerca;