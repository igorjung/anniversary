import { useEffect, useState } from "react"

export default function Timer() {
  const [days, setDays] = useState(0)

  useEffect(() => {
    const date1 = new Date('05/11/2024')
    const date2 = new Date()
    const diffDays =  Math.round((date2.getTime() - date1.getTime()) / (1000 * 3600 * 24))
    setDays(diffDays)
  }, [])

  return (
    <div className="d-flex align-items-center justify-content-center m-4">
      <p>~ {days} Dias ~</p>
    </div>
  );
}
  