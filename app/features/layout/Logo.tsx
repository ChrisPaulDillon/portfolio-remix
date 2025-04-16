import { Image } from '@chakra-ui/react'
import { Link } from '@remix-run/react'
import { useAssetUrl } from '../../hooks/useAssetUrl'

interface LogoProps {
  width?: string | number
  height?: string | number
}

export const Logo: React.FC<LogoProps> = props => {
  const logoUrl = useAssetUrl('/images/logo.svg')
  
  return (
    <Link to="/">
      <Image
        alt="logo"
        src={logoUrl}
        height="50px"
        width="50px"
        {...props}
      />
    </Link>
  )
}