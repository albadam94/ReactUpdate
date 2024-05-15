export function formatCurrency(amount: number) {
  return new Intl.NumberFormat('en-CO', {
    style: 'currency',
    currency: 'COP',
  }).format(amount)
}

export function formatDate (dateStr:string):string {
    const dateObj = new Date(dateStr)
    const options:Intl.DateTimeFormatOptions={
        year:'numeric',
        month:'long',
        day:'numeric',
        weekday:'long',
    }
    return new Intl.DateTimeFormat('es-ES',options).format(dateObj)
}