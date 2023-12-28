import { Tag, TagLabel, TagProps, useColorModeValue } from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'

interface PortfolioGithubTagProps extends TagProps {
  linkText: string
  linkUrl: string
}

export const PortfolioGitHubTag: React.FC<PortfolioGithubTagProps> = ({
  linkText,
  linkUrl,
  ...rest
}) => {
  const bgColour = useColorModeValue('gray.600', 'gray.600')
  const hoverColorVal = useColorModeValue('gray.600', 'gray.500')
  return (
    // <Link href={linkUrl}>
    <Tag
      size="md"
      borderRadius="full"
      minW="95px"
      bg={bgColour}
      _hover={{ bg: hoverColorVal }}
      {...rest}
    >
      <FaGithub color="white" />
      <TagLabel ml={2} textColor="white">
        {linkText}
      </TagLabel>
    </Tag>
    // </Link>
  )
}
