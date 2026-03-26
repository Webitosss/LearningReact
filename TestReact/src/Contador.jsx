import { useState, useEffect } from 'react'

function Contador() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (count > 10) {
      alert('¡El valor no puede ser mayor a 10! Se restablecerá a 10.')
      setCount(10)
    }
    if (count < 0) {
      setCount(0)
    }
  }, [count])

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1rem',
      padding: '2rem',
      borderRadius: '12px',
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
    }}>
      <h2 style={{ margin: 0, fontSize: '1.5rem' }}>Contador</h2>
      <p style={{
        fontSize: '3rem',
        fontWeight: 'bold',
        margin: 0,
        color: '#646cff',
      }}>
        {count}
      </p>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <button onClick={() => setCount(count - 1)}>
          ➖ Decrementar
        </button>
        <button onClick={() => setCount(count + 1)}>
          ➕ Incrementar
        </button>
      </div>
      <small style={{ opacity: 0.6 }}>Rango permitido: 0 – 10</small>
    </div>
  )
}

export default Contador
