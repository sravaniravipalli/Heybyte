import useInView from '../hooks/useInView'
import useCountUp from '../hooks/useCountUp'

export default function CountUp({ end, suffix = '' }) {
  const [ref, seen] = useInView()
  const v = useCountUp(end, seen)
  return <strong ref={ref}>{v}{suffix}</strong>
}
