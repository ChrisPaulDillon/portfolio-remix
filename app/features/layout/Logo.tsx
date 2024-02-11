import { Image } from '@chakra-ui/react'
import { Link } from '@remix-run/react'

interface LogoProps {
  width?: number
  height?: number
}

export const Logo: React.FC<LogoProps> = props => (
  <Link to="/">
    <Image
      alt="logo"
      src="/images/logo.svg"
      boxSize="sm"
      {...props}
    />
  </Link>
)
