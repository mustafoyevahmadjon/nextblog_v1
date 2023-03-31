import Layout from '@/layout/layout'
import Head from 'next/head'
import React from 'react'
import { Hero } from '@/components'

const IndexPage = () => {
  return (
    <Layout>
      <Head>
        <title>Home Page</title>
      </Head>
      <Hero />
    </Layout>
  )
}

export default IndexPage