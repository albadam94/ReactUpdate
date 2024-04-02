const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
  ]

export default function TipPercentageForm() {
  return (
    <div>
        <h3 className="poppins font-black text-2xl">Propina:</h3>
        <form>
            {tipOptions.map(tip =>(
                <div key={tip.id} className="flex gap-2">
                       <input
                     id={tip.id}
                    type="radio"
                    name="tip"
                    value={tip.value}
                    />
                    
                    
                    <label htmlFor={tip.id}>{tip.label}</label>
                 
                </div>
            ))}
           

        </form>
    </div>
  )
}
