import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbLesbook from '../public/images/lesbook.png'
import thumbLinkInBio from '../public/images/linkInBio.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
            <Section>
            <WorkGridItem id="lesbook" title="Lesbook" thumbnail={thumbLesbook} href="https://github.com/trrez/LesBook">
                Rest book api
            </WorkGridItem>
            </Section>
            <Section>
            <WorkGridItem
                id="linkInBio"
                title="Link in Bio"
                thumbnail={thumbLinkInBio}
            >
            Link In Bio page
          </WorkGridItem>
        </Section>
        </SimpleGrid>
     </Container>
    </Layout>
)

export default Works