import { useLocation } from '@remix-run/react'

export function useAssetUrl(assetPath: string) {
  const location = useLocation()
  const baseUrl = location.pathname === '/' ? '' : '..'
  return `${baseUrl}${assetPath}`
}