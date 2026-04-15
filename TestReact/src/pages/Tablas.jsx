import TablaPersonas from '../TablaPersonas'
import '../App.css'


function Tablas() {

    return (
        <>
            <h1>Tabla</h1>

            <section style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
                <div style={{ width: '100%', maxWidth: 700 }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Tabla de Personas</h2>
                    <TablaPersonas />
                </div>
            </section>
        </>
    )

}

export default Tablas;