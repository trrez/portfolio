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
          Lesbook <Badge>2023</Badge>
        </Title>
        <Center my={6}>
          <Image src="/images/lesbook.png" alt="icon" />
        </Center>
        <P>
            Rest book api
        </P>
  
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Flask</span>
          </ListItem>
        </List>
  
        <SimpleGrid columns={1}>
          <WorkImage src="/images/lesbook.png" alt="Lesbook" />
        </SimpleGrid>
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'