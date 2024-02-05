import {
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  TabsProps,
  Text
} from '@chakra-ui/react'
import { WORK_EXPERIENCE_DATA } from './const'

export const WorkExperienceTabs: React.FC<
  Omit<TabsProps, 'children'>
> = props => (
  <Tabs
    mt={5}
    size="md"
    variant="line"
    colorScheme="red"
    orientation="vertical"
    {...props}
  >
    <TabList aria-orientation="vertical">
      {WORK_EXPERIENCE_DATA.map((tab, idx) => (
        <Tab key={idx} minW="200px" textAlign="left">
          <Text textAlign="left">{tab.companyName}</Text>
        </Tab>
      ))}
    </TabList>
    <TabPanels>
      {WORK_EXPERIENCE_DATA.map((tab, idx) => (
        <TabPanel key={idx}>
          <Heading size="sm">
            {tab.role} @ {tab.companyName}
          </Heading>
          <Text fontWeight="thin">{tab.date}</Text>
          {/* <Flex>
              {tab?.techStack?.map((tech, idx) => (
                <Text key={idx} fontWeight="thin" mx={1}>
                  {tech}
                </Text>
              ))}
            </Flex> */}
        </TabPanel>
      ))}
    </TabPanels>
  </Tabs>
)
