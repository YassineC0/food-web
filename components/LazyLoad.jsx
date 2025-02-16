"use client"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

export default function LazyLoad({ children }) {
  const [isClient, setIsClient] = useState(false)
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "200px 0px",
  })

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return <div ref={ref} />
  }

  return <div ref={ref}>{inView ? children : null}</div>
}

