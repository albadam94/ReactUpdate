import { formatCurrency } from "../helpers"

type AmountDisplayProps = {
    label: string
    amount: number
    }

function AmountDisplay({ label, amount }: AmountDisplayProps) {
  return (
    <p className="text-2xl text-blue-600 raleway font-bold">
        {label}:{' '} <span className="text-blue-900">{formatCurrency(amount)}</span>
    </p>
  )
}

export default AmountDisplay