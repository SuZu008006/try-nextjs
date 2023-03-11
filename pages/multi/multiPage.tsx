import { useRouter } from 'next/router'

export default function MultiPage() {
  const router = useRouter()
  let step: number = Number(router.query.step)
  if (isNaN(step)) {
    step = 0
  }

  const goToStep = async (_step: number, asPath: string) => {
    await router.push(`/multi/multiPage?step=${_step}`, asPath)
  }

  return (
    <div>
      {step == 0 && (
        <>
          <h3>Step {step}</h3>
          <button onClick={() => goToStep(1, '/personal')}>Next Step</button>
        </>
      )}
      {step == 1 && (
        <>
          <h3>Step {step}</h3>
          <button onClick={() => goToStep(2, '/confirm')}>Next Step</button>
        </>
      )}
      {step == 2 && (
        <>
          <h3>Step {step}</h3>
          <button onClick={() => goToStep(2, '/multipage')}>Next Step</button>
        </>
      )}
    </div>
  )
}