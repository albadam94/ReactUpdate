export function formatCurrency(amount: number) {
  return new Intl.NumberFormat('en-CO', {
    style: 'currency',
    currency: 'COP',
  }).format(amount)
}