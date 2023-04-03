import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Card, CardBody, CardFooter, CardHeader, Container, Divider, Flex, Grid, GridItem, Heading, Highlight, HStack, Link, SimpleGrid, Skeleton, Spacer, Stack, StackDivider, Switch, Text, theme, VStack } from "@chakra-ui/react"
import { LinkIcon } from "@chakra-ui/icons"
import { AnimatePresence, motion } from "framer-motion"
import { NavLink, Route, Routes, useLocation } from "react-router-dom"
import { createContext, useContext, useState } from "react"

const dark = 'blackAlpha.900'
const light = 'whiteAlpha.900'

const baseThemeBackgroundL = 'whiteAlpha.900'
const baseThemeBackgroundD = 'blackAlpha.900'

const headerBackgroundL = '#E2E8F0'
const headerBackgroundD = '#171923'

type Theme = boolean | any
export const ThemeContext = createContext<Theme>(true)

function App() {
  const location = useLocation()
  const [theme, setTheme] = useState<Theme>(true)

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Grid
        templateAreas={`"header header" "nav main" "footer footer"`}
        gridTemplateRows={'65px 1fr 35px'}
        gridTemplateColumns={'180px 1fr'}
        height={'100%'}
        margin={'0px'}
        position={'fixed'}
        width={'100%'}
        gap={0}
        fontSize={'x-large'}
        fontFamily={'monospace'}
        bg={theme ? baseThemeBackgroundL : baseThemeBackgroundD}
        textColor={theme ? dark : light}>
        <GridItem area={'header'} borderBottom={'1px'} bg={theme ? headerBackgroundL : headerBackgroundD} >
          <Flex mt={1} mr={1} alignItems={'center'}>
            <Heading
              borderColor={theme ? headerBackgroundD : headerBackgroundL}
              fontFamily={'mono'}
              ml={1}
              p={'5px'}
              borderWidth={'1px'}
              borderRadius={'5px'}>Portfolio Website V2.2</Heading>
            <Spacer />
            <Button
              ml={1}
              onClick={() => { setTheme(!theme) }}
              borderColor={theme ? headerBackgroundD : headerBackgroundL}
              fontFamily={'sans-serif'}
              _hover={{ bg: 'inherit' }}
              _active={{ bg: 'inherit', transform: 'scale(0.95)' }}
              bg='inherit'
              variant={'outline'}>{theme ? 'Dark' : 'Light'}</Button>
          </Flex>
        </GridItem>
        <GridItem area={'nav'}>
          <HStack
            mt={1}
            ml={1}
            alignItems={'start'}
            textAlign={'start'}
            height={'99%'}
            width={'100%'}
            borderColor={theme ? headerBackgroundD : headerBackgroundL}
            borderWidth={'1px'}
            borderRadius={'5px'}>
            <Stack ml={8} spacing={2}>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Text as={NavLink} to={'/'}>
                  Home
                </Text>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Text as={NavLink} to={'/about'}>
                  About
                </Text>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Text as={NavLink} to={'/skills'}>
                  Skills
                </Text>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Text as={NavLink} to={'/education'}>
                  Education
                </Text>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Text as={NavLink} to={'/projects'}>
                  Projects
                </Text>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Text as={NavLink} to={'/experience'}>
                  Experience
                </Text>
              </motion.div>
            </Stack>
          </HStack>
        </GridItem>
        <GridItem area={'main'} top={0} left={0} p={2}>
          <AnimatePresence>
            <Routes location={location} key={location.pathname}>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/skills' element={<Skills />} />
              <Route path='/education' element={<Education />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/experience' element={<Experience />} />
            </Routes>
          </AnimatePresence>
        </GridItem>
        <GridItem area={'footer'} zIndex={'toast'} borderTop={'1px'} bg={theme ? headerBackgroundL : headerBackgroundD}>
        </GridItem>
      </Grid>
    </ThemeContext.Provider>
  )
}

export const infoStyles = {
  position: 'absolute',
  overflowX: 'hidden',
  paddingBottom: 16
}

export const pageVariants = {
  initial: {
    opacity: 0,
    x: '-100vw',
    scale: 0.8,
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    x: '100vw',
    sclae: 1.2
  }
}

export const pageTransitionBody = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5
}

export const pageTranstionHeader = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.4
}

const Home = () => {
  const { theme } = useContext(ThemeContext)

  return (
    //@ts-ignore
    <Container {...infoStyles} w={'100%'} maxW={'100%'} maxH={'100vh'}>
      <Box w={'80%'}>
        <motion.div
          initial={'initial'}
          animate={'in'}
          exit={'out'}
          variants={pageVariants}
          transition={pageTranstionHeader}>
          <Heading fontSize={'5xl'} mb={4} textAlign={'start'} fontFamily={'mono'}>Landing Page</Heading>
        </motion.div>
        <motion.div initial={'initial'} animate={'in'} exit={'out'} variants={pageVariants} transition={pageTransitionBody}>
          <Stack>
            <Heading fontFamily={'mono'}>Eamon Laughton-Eagan</Heading>
            <Divider />
            <Text>eamonlaughtoneagan@gmail.com</Text>
            <Link isExternal={true} href='https://github.com/EamonLaughtonEagan?tab=repositories'><LinkIcon /> GitHub</Link>
          </Stack>
          <Highlight query={['skills', 'education', 'highlighted projects', 'experience']} styles={{ fontWeight: 'bold ', textColor: theme ? dark : light }} >
            Hello, and welcome to my portfolio project!
            Here is where you will find the most up to date list of hard skills,
            current education level, highlighted projects I have completed through out the years,
            and real world industry experience.
          </Highlight>
        </motion.div>
      </Box>
    </Container>
  )
}

const About = () => {
  return (
    //@ts-ignore
    <Container {...infoStyles} maxW={'100%'} maxH={'100vh'}>
      <Box w={'80%'}>
        <motion.div
          initial={'initial'}
          animate={'in'}
          exit={'out'}
          variants={pageVariants}
          transition={pageTranstionHeader}>
          <Heading fontSize={'5xl'} mb={4} textAlign={'start'} fontFamily={'mono'}>About</Heading>
        </motion.div>
        <motion.div initial={'initial'} animate={'in'} exit={'out'} variants={pageVariants} transition={pageTransitionBody}>
          <Divider />
          <Text>
            I was inspired to create my own portfolio website becuase I thought to myself it would be obvious
            to create a web application which hosted my resume & portfolio which would act as both a fun personal project to work on but also
            a practical project in which I could display some of the web development skills & tricks that I have learned while messing around with React.
          </Text>
        </motion.div>
      </Box>
    </Container>
  )
}

const Skills = () => {

  return (
    //@ts-ignore    
    <Container {...infoStyles} maxW={'100%'} maxH={'100vh'}>
      <motion.div
        initial={'initial'}
        animate={'in'}
        exit={'out'}
        variants={pageVariants}
        transition={pageTranstionHeader}>
        <Heading fontSize={'5xl'} mb={4} textAlign={'start'} fontFamily={'mono'}>Skills</Heading>
      </motion.div>
      <Accordion allowMultiple defaultIndex={0}>
        <motion.div initial={'initial'} animate={'in'} exit={'out'} variants={pageVariants} transition={pageTransitionBody}>
          <Stack spacing={2} maxW={'80%'}>
            <motion.div whileHover={{ scale: 1.01 }}>
              <AccordionItem>
                <AccordionButton>
                  <Box as={'span'} flex={'1'} textAlign={'left'}>
                    <Heading fontSize={'5xl'} fontFamily={'mono'}>Programming Languages</Heading>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel>
                  <Heading fontFamily={'mono'}>Advanced (2+ Years)</Heading>
                  <Text>Python, JavaScript, Typescript, Java</Text>
                  <Heading fontFamily={'mono'}>Proficient (1-2 Years)</Heading>
                  <Text>C, C++, Lisp, Scheme</Text>
                </AccordionPanel>
              </AccordionItem>
            </motion.div>
            <motion.div whileHover={{ scale: 1.01 }}>
              <AccordionItem border={'1px'} borderRadius={'5px'}>
                <AccordionButton _hover={{ bg: 'inherit' }}>
                  <Box as={'span'} flex={'1'} textAlign={'left'}>
                    <Heading fontSize={'5xl'} fontFamily={'mono'}>Frameworks and Libraries</Heading>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel>
                  <Heading fontFamily={'mono'}>Javascript / Typescript</Heading>
                  <Text>React, React-Native, Chakra-UI, Framer-Motion, React-Router</Text>
                  <Heading fontFamily={'mono'}>Python</Heading>
                  <Text>PyTorch, Pandas, Django, Django Ninja (Fast API)</Text>
                  <Heading fontFamily={'mono'}>Java</Heading>
                  <Text>Spring Tool Suite, Toad</Text>
                </AccordionPanel>
              </AccordionItem>
            </motion.div>
            <motion.div whileHover={{ scale: 1.01 }}>
              <AccordionItem border={'1px'} borderRadius={'5px'}>
                <AccordionButton _hover={{ bg: 'inherit' }}>
                  <Box as={'span'} flex={'1'} textAlign={'left'}>
                    <Heading fontSize={'5xl'} fontFamily={'mono'}>Database and Tools</Heading>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel>
                  <Stack spacing={4}>
                    <Divider />
                    <Text>Git, MongoDB, PostgreSQL, QLite, AWS, Docker, kubernetes, Elastic Search, NGINX, Oracle</Text>
                    <Divider />
                    <Text>Windows, Linux (Ubuntu)</Text>
                  </Stack>
                </AccordionPanel>
              </AccordionItem>
            </motion.div>
          </Stack>
        </motion.div>
      </Accordion>
    </Container>
  )
}

const Education = () => {

  return (
    //@ts-ignore
    <Container {...infoStyles} maxW={'100%'} maxH={'100vh'}>
      <motion.div
        initial={'initial'}
        animate={'in'}
        exit={'out'}
        variants={pageVariants}
        transition={pageTranstionHeader}>
        <Heading fontSize={'5xl'} mb={4} textAlign={'start'} fontFamily={'mono'}>Education</Heading>
      </motion.div>
      <Accordion allowMultiple defaultIndex={0}>
        <motion.div initial={'initial'} animate={'in'} exit={'out'} variants={pageVariants} transition={pageTransitionBody}>
          <Stack spacing={6} maxW={'80%'}>
            <Box height={'min'} maxWidth={'100vw'} bg={'inherit'}>
              <Heading fontSize={'5xl'} fontFamily={'mono'}>Carleton University</Heading>
              <Divider />
              <Text fontWeight={'bold'}>B.C.S. Honours Major - Psychology Minor</Text>
              <Text></Text>
              <Text fontStyle={'italic'}>January 2022</Text>
              <Heading fontSize={'5xl'} mt={'40px'} mb={'-20px'} fontFamily={'mono'}>Highlighted Courses</Heading>
            </Box>
            <motion.div whileHover={{ scale: 1.01 }}>
              <AccordionItem border={'1px'} borderRadius={'5px'}>
                <AccordionButton _hover={{ bg: 'inherit' }}>
                  <Box as={'span'} flex={'1'} textAlign={'left'}>
                    <Heading fontFamily={'mono'}>Design & Analysis of Algorithms</Heading>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>

                <AccordionPanel>
                  <Text>
                    Explored & discovered various Algorithms (Djikstra's, Depth First Search, Breadth First Search).
                    Leanred about various forms of calculating worst case scenario runtime of algorithms using Big-O notation.
                  </Text>
                </AccordionPanel>
              </AccordionItem>
            </motion.div>
            <motion.div whileHover={{ scale: 1.01 }}>
              <AccordionItem border={'1px'} borderRadius={'5px'}>
                <AccordionButton _hover={{ bg: 'inherit' }}>
                  <Box as={'span'} flex={'1'} textAlign={'left'}>
                    <Heading fontFamily={'mono'}>Fundamentals of Web Development</Heading>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel>
                  <Text>
                    Discovered the basics of web development (HTTP protocols, DNS, IP & Ports).
                    Created express servers while learning the basics of javascript, html, and css.
                  </Text>
                </AccordionPanel>
              </AccordionItem>
            </motion.div>
            <motion.div whileHover={{ scale: 1.01 }}>
              <AccordionItem border={'1px'} borderRadius={'5px'}>
                <AccordionButton _hover={{ bg: 'inherit' }}>
                  <Box as={'span'} flex={'1'} textAlign={'left'}>
                    <Heading fontFamily={'mono'}>Machine Learning & Artificial Intelligence</Heading>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel>
                  <Text>
                    Leanred about fundemental machin learning algorithms (naive bayes, minimax) among other agent learning models.
                    Developed feed-forward and back-propigation machine learning algorithms.
                    Calulated small node feed-forward networks by hand.
                  </Text>
                </AccordionPanel>
              </AccordionItem>
            </motion.div>
            <motion.div whileHover={{ scale: 1.01 }}>
              <AccordionItem border={'1px'} borderRadius={'5px'}>
                <AccordionButton _hover={{ bg: 'inherit' }}>
                  <Box as={'span'} flex={'1'} textAlign={'left'}>
                    <Heading fontFamily={'mono'}>Introduction to Databases</Heading>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel>
                  <Text>
                    Learned the fundementals of both relational and non-relational databases (SQL, MongoDB).
                    Explored the syntax of SQL based databases and how to use them in a practical real world style application.
                    Discovered pros and cons for using a relational database vs. a non-relational document based database.
                  </Text>
                </AccordionPanel>
              </AccordionItem>
            </motion.div>
          </Stack>
        </motion.div>
      </Accordion>
    </Container>
  )
}

const Projects = () => {
  const { theme } = useContext(ThemeContext)
  return (
    //@ts-ignore
    <Container {...infoStyles} maxW={'100%'} maxH={'100vh'}>
      <motion.div
        initial={'initial'}
        animate={'in'}
        exit={'out'}
        variants={pageVariants}
        transition={pageTranstionHeader}>
        <Heading fontSize={'5xl'} mb={4} textAlign={'start'} fontFamily={'mono'}>Projects</Heading>
      </motion.div>
      <Accordion allowMultiple defaultIndex={0}>
        <motion.div initial={'initial'} animate={'in'} exit={'out'} variants={pageVariants} transition={pageTransitionBody}>
          <Stack maxW={'80%'}>
            <motion.div whileHover={{ scale: 1.01 }}>
              <AccordionItem border={'1px'} borderRadius={'5px'}>
                <Box height={'min'} maxWidth={'100vw'} bg={'inherit'}>
                  <AccordionButton _hover={{ bg: 'inherit' }}>
                    <Box as={'span'} flex={'1'} textAlign={'left'}>
                      <Heading fontFamily={'mono'}>Portfolio React App</Heading>
                      <Text fontStyle='italic'>January (2023) - February (2023)</Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel>
                    <Divider />
                    <Highlight query={['single', 'page', 'application', 'typescript', 'javascript', 'type', 'chakra ui', 'components', 'react', 'router', 'client', 'framer', 'motion']} styles={{ fontWeight: 'bold', textColor: theme ? dark : light }}>
                      Developed & designed single page application react web app for hosting portfolio.
                      Typescript was used instead of Javascript in order to assure type safety not natively found in base Javascript.
                      Chakra UI was used for cleaner components and for additional built in accessability features.
                      React-Router is set-up for each tab in order to provide components to be rendered on the client and easily plug & removed when switching tabs.
                      Framer-Motion was used in conjuction with chakra to provide smooth page transitions as per standerd in modern web development.
                    </Highlight>
                  </AccordionPanel>
                </Box>
              </AccordionItem>
            </motion.div>
            <motion.div whileHover={{ scale: 1.01 }}>
              <AccordionItem border={'1px'} borderRadius={'5px'}>
                <Box height={'min'} maxWidth={'100vw'} bg={'inherit'}>
                  <AccordionButton _hover={{ bg: 'inherit' }}>
                    <Box as={'span'} flex={'1'} textAlign={'left'}>
                      <Heading fontFamily={'mono'}>Fourth Year Honours Project (Capstone)</Heading>
                      <Text fontStyle='italic'>January (2021) - April (2021)</Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel>
                    <Divider />
                    <Highlight query={['python', 'pandas', 'plotly', 'json', 'heroku']} styles={{ fontWeight: 'bold', textColor: theme ? dark : light }}>
                      Designed & developed scalable data visualization network graph in Python using Pandas and Plotly.
                      Data was stored as JSON objects, server was handled with Heroku cloud storage.
                    </Highlight>
                  </AccordionPanel>
                </Box>
              </AccordionItem>
            </motion.div>
            <motion.div whileHover={{ scale: 1.01 }}>
              <AccordionItem border={'1px'} borderRadius={'5px'}>
                <Box height={'min'} maxWidth={'100vw'} bg={'inherit'}>
                  <AccordionButton _hover={{ bg: 'inherit' }}>
                    <Box as={'span'} flex={'1'} textAlign={'left'}>
                      <Heading fontFamily={'mono'}>Multi-Class Text Classifier</Heading>
                      <Text fontStyle='italic'>January (2021) - April (2021)</Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel>
                    <Highlight query={['sklearn', 'vectorized', 'corpus', 'naïve', 'bayes', 'classifier', 'label-less', 'k-fold', 'cross', 'validation', 'normalization']} styles={{ fontWeight: 'bold', textColor: theme ? dark : light }}>
                      Developed Text classifier using sklearn where I vectorized text from corpus which trained naïve bayes classifier
                      model in order to predict likely classes for label-less classes.
                      Model used k-fold cross validation and normalization in order to bolster the accuracy of the model.
                    </Highlight>
                  </AccordionPanel>
                </Box>
              </AccordionItem>
            </motion.div>
            <motion.div whileHover={{ scale: 1.01 }}>
              <AccordionItem border={'1px'} borderRadius={'5px'}>
                <Box height={'min'} maxWidth={'100vw'} bg={'inherit'}>
                  <AccordionButton _hover={{ bg: 'inherit' }}>
                    <Box as={'span'} flex={'1'} textAlign={'left'}>
                      <Heading fontFamily={'mono'}>Chess Playing Agent(s)</Heading>
                      <Text fontStyle='italic'>September (2020) - December (2021)</Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel>
                    <Divider />
                    <Highlight query={['adversarial', 'agent', 'naïve', 'bayes', 'minimax', 'stockfish', 'api']} styles={{ fontWeight: 'bold', textColor: theme ? dark : light }}>
                      Developed artificial intelligence agents using principles of adversarial agent networks, naïve bayes classifiers,
                      and minimax. Implemented Stockfish API for list of opening moves which would train the agents based off of a combination
                      of predetermined value of chess piece and board state.
                    </Highlight>
                  </AccordionPanel>
                </Box>
              </AccordionItem>
            </motion.div>
            <motion.div whileHover={{ scale: 1.01 }}>
              <AccordionItem border={'1px'} borderRadius={'5px'}>
                <Box height={'min'} maxWidth={'100vw'} bg={'inherit'}>
                  <AccordionButton _hover={{ bg: 'inherit' }}>
                    <Box as={'span'} flex={'1'} textAlign={'left'}>
                      <Heading fontFamily={'mono'}>Service Management App</Heading>
                      <Text fontStyle='italic'>September (2020) - December (2020)</Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel>
                    <Divider />
                    <Highlight query={['react-native', 'Android', 'IOS', 'SQLite', 'hooks', 'AWS']} styles={{ fontWeight: 'bold', textColor: theme ? dark : light }}>
                      Developed React-native service management app for Android & IOS with SQLite database backed which used
                      hooks in order to communicate state. SQLite database hosted on AWS.
                    </Highlight>
                  </AccordionPanel>
                </Box>
              </AccordionItem>
            </motion.div>
          </Stack>
        </motion.div>
      </Accordion>
    </Container>
  )
}

const Experience = () => {
  const { theme } = useContext(ThemeContext)
  return (
    //@ts-ignore
    <Container {...infoStyles} maxW={'100%'} maxH={'100vh'}>
      <motion.div
        initial={'initial'}
        animate={'in'}
        exit={'out'}
        variants={pageVariants}
        transition={pageTranstionHeader}>
        <Heading fontSize={'5xl'} mb={4} textAlign={'start'} fontFamily={'mono'}>Experience</Heading>
      </motion.div>
      <Accordion allowMultiple defaultIndex={0}>
        <motion.div initial={'initial'} animate={'in'} exit={'out'} variants={pageVariants} transition={pageTransitionBody}>
          <Stack spacing={4} maxW={'80%'}>
            <motion.div whileHover={{ scale: 1.01 }}>
              <AccordionItem border={'1px'} borderRadius={'5px'}>
                <Box height={'min'} maxWidth={'100vw'} bg={'inherit'}>
                  <AccordionButton _hover={{ bg: 'inherit' }}>
                    <Box as={'span'} flex={'1'} textAlign={'left'}>
                      <Heading fontFamily={'mono'}>IT Technician, Software Solutions</Heading>
                      <Text fontStyle='italic'>February (2022) - Current</Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel>
                    <Highlight query={['react', 'django', 'nginx', 'CI/CD', 'typescript-react', 'api', 'Fast api', 'webserver', 'client']} styles={{ fontWeight: 'bold', textColor: theme ? dark : light }}>
                      Played a key role in building & designing UI for react frontend, Django backend user management platform.
                      Used NGINX as a proxy and webserver.
                      Developed CI/CD pipeline for pushing code changes.
                      Created Typescript-React front end UI as part of a usermanagement service.
                      Used DJango as a server backend supplier of API endpoints.
                      Fast API used to mediate fest request from the server to client.
                    </Highlight>
                  </AccordionPanel>
                </Box>
              </AccordionItem>
            </motion.div>
            <motion.div whileHover={{ scale: 1.01 }}>
              <AccordionItem border={'1px'} borderRadius={'5px'}>
                <Box height={'min'} maxWidth={'100vw'} bg={'inherit'}>
                  <AccordionButton _hover={{ bg: 'inherit' }}>
                    <Box as={'span'} flex={'1'} textAlign={'left'}>
                      <Heading fontFamily={'mono'}>QA Tester Co-op</Heading>
                      <Text fontStyle='italic'>September (2015) - April (2016)</Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel>
                    <Text>Completed QA tickets using Jenkins.</Text>
                    <Text>Tested key client feature on pre-live server while checking off task within Jenkins pipeline.</Text>
                  </AccordionPanel>
                </Box>
              </AccordionItem>
            </motion.div>
          </Stack>
        </motion.div>
      </Accordion>
    </Container>

  )
}

export default App
