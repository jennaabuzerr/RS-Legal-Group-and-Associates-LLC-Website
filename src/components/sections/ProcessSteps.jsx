export default function ProcessSteps({ steps }) {
  return (
    <ol className="grid gap-10 md:grid-cols-3 md:gap-8">
      {steps.map((step, i) => (
        <li key={i} className="border-t-2 border-burgundy-700 pt-6">
          <p className="font-serif text-h3 text-navy-300" aria-hidden="true">0{i + 1}</p>
          <h3 className="mt-2 text-h3">{step.title}</h3>
          <p className="mt-3 text-navy-100">{step.body}</p>
        </li>
      ))}
    </ol>
  )
}
