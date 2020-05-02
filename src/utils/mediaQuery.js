import { useEffect, useState } from "react"

export const useMediaQuery = query => {
  const [matches, setMatches] = useState(null)
  useEffect(() => {
    const mediaMatch = window.matchMedia(query)
    const handler = e => setMatches(e.matches)
    mediaMatch.addListener(handler)
    return () => mediaMatch.removeListener(handler)
  })
  return matches
}
