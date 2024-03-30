export function formatCurrency(quantity:number){
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP'
        }).format(quantity)
}