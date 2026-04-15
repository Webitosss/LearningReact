import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// Arreglo con más de 5 elementos (2 menores de edad: edad <= 17)
const personas = [
  { nombre: 'Carlos', apellido: 'García', edad: 25 },
  { nombre: 'María', apellido: 'López', edad: 15 },    // Menor de edad
  { nombre: 'Juan', apellido: 'Martínez', edad: 30 },
  { nombre: 'Ana', apellido: 'Rodríguez', edad: 16 },   // Menor de edad
  { nombre: 'Pedro', apellido: 'Hernández', edad: 42 },
  { nombre: 'Lucía', apellido: 'Fernández', edad: 28 },
];

export default function TablaPersonas() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="tabla de personas">
        <TableHead>
          <TableRow>
            <TableCell><strong>Nombre</strong></TableCell>
            <TableCell><strong>Apellido</strong></TableCell>
            <TableCell align="right"><strong>Edad</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {personas.map((persona, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {persona.nombre}
              </TableCell>
              <TableCell>{persona.apellido}</TableCell>
              <TableCell align="right">{persona.edad}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
