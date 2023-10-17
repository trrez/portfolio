import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    SimpleGrid,
    UnorderedList,
    Heading,
    Center,
    Image
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  import { Title, WorkImage, Meta } from '../../components/work'
  import P from '../../components/paragraph'
  
  const Work = () => (
    <Layout title="amembo">
      <Container>
        <Title>
          Link In Bio <Badge>2023</Badge>
        </Title>
        <Center my={6}>
          <Image src="/images/linkInBio.png" alt="icon" />
        </Center>
        <P>
            Link In Bio Page
        </P>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
          </ListItem>
        </List>
  
        <SimpleGrid columns={1}>
          <WorkImage src="/images/linkInBio.png" alt="LinkInBio" />
        </SimpleGrid>
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'