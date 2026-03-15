export const FB_PIXEL_ID = "887947774232817"

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

export const pageview = (): void => {
  if (!window.fbq) return
  window.fbq("track", "PageView")
}

export const event = (
  name: string,
  options?: Record<string, unknown>
): void => {
  if (!window.fbq) return
  window.fbq("track", name, options)
}
