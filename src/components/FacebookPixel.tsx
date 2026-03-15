"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { pageview } from "@/src/lib/pixel"

export default function FacebookPixel(): null {
  const pathname = usePathname()

  useEffect(() => {
    pageview()
  }, [pathname])

  return null
}