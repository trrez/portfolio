import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import VoxelPorscheLoader from '../voxel-porsche-loader'

const LazyVoxelPorsche = dynamic(() => import('../voxel-porsche'), {
  ssr: false,
  loading: () => <VoxelPorscheLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Tatiana's homepage" />
        <meta name="author" content="Tatiana Gutierrez" />
        <meta name="author" content="trrez" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Tatiana Gutierrez" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@trrez15" />
        <meta name="twitter:creator" content="@trrez15" />
        <meta property="og:site_name" content="Tatiana Gutierrez" />
        <meta name="og:title" content="Tatiana Gutierrez" />
        <meta property="og:type" content="website" />
        <title>Tatiana Gutierrez - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <LazyVoxelPorsche />

        {children}

      </Container>
    </Box>
  )
}

export default Main