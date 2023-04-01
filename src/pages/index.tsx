import Layout from '@/layout/layout'
import Head from 'next/head'
import React from 'react'
import { Content, Hero, Sidebar } from '@/components'
import { Box } from '@mui/material'

const IndexPage = () => {
  return (
    <Layout>
      <Head>
        <title>Home Page</title>
      </Head>
      <Hero />
      <Box sx={{ display: 'flex', gap: '20px', flexDirection: { xs: 'column', md: 'row' }, padding: '20px' }}>
        <Sidebar />
        <Content />
      </Box>
    </Layout>
  )
}

export default IndexPage