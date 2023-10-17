import NextLink from 'next/link'
import { Container, Box, Heading, Image, Link, SimpleGrid, Icon, List, ListItem, Button, useColorModeValue } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import { GridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import {
    IoLogoTwitter,
    IoLogoInstagram,
    IoLogoGithub,
    IoLogoLinkedin
} from 'react-icons/io5'

const Page = () => {
    return(
        <Layout>
            <Container>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                    Hello, I&apos;m a backend developer based in Chile
                </Box>

                <Box display={{md:'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as='h2' variant="page-title">
                            Tatiana Gutierrez
                        </Heading>
                        <p>Trrez - Developer</p>
                    </Box>
                    <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md:6}} align="center">
                        <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px"
                        display="inline-block" borderRadius="full" src="/images/footPrintImg.png"
                        alt="Profile Image"/>
                    </Box>
                </Box>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Work
                    </Heading>
                    <Paragraph>Hello! I'm Tatiana Gutiérrez, an informatics student focusing on backend development. Passionate about tackling challenges and crafting efficient solutions. My goal is to contribute to the digital world with my knowledge and creativity. </Paragraph>
                </Section>
                <Box align="center" my={4}>
                    <Button
                        as={NextLink}
                        href="/works"
                        scroll={false}
                        rightIcon={<ChevronRightIcon />}
                        colorScheme="teal"
                    >
                        My Portfolio
                    </Button>
                </Box>

                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>2023</BioYear>
                        The Frontend Developer Career Path - Scrimba
                    </BioSection>
                    <BioSection>
                        <BioYear>2023</BioYear>
                        Python Full-Stack - Coding Dojo
                    </BioSection>
                    <BioSection>
                        <BioYear>2022 to Present</BioYear>
                        Tecnico Informatica - Iplacex
                    </BioSection>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        On the web
                    </Heading>
                    <List>
                        <ListItem>
                            <Link href='https://github.com/trrez' target='_blank'>
                                <Button variant="ghost" colorScheme='teal' leftIcon={<Icon as={IoLogoGithub} />}>@trrez</Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href='https://twitter.com/trrez15' target='_blank'>
                                <Button variant="ghost" colorScheme='teal' leftIcon={<Icon as={IoLogoTwitter} />}>@trrez15</Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href='https://linkedin.com/in/trrez' target='_blank'>
                                <Button variant="ghost" colorScheme='teal' leftIcon={<Icon as={IoLogoLinkedin} />}>@trrez</Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href='https://instagram.com/trrez15' target='_blank'>
                                <Button variant="ghost" colorScheme='teal' leftIcon={<Icon as={IoLogoInstagram} />}>@trrez</Button>
                            </Link>
                        </ListItem>
                    </List>
                </Section>

            </Container>
        </Layout>
    )
}

export default Page