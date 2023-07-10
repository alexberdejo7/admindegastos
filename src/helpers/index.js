export const formatearCantidad = (cantidad) => {
    return Number(cantidad).toLocaleString('es-US', {
        style: 'currency',
        currency: 'USD'

    })
}

export const generateId = () => {
    const date = Date.now().toString(36)
    const random = Math.random().toString(36).substring(2)
    return random + date
}

export const formatoFecha = (date) => {{
    const newDate = new Date(date)
    const options = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'

    }
    return newDate.toLocaleDateString('es-Es', options)

}}