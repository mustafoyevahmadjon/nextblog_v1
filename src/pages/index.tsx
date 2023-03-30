import Layout from '@/layout/layout'
import Head from 'next/head'
import React from 'react'
import { Button } from "@mui/material"

const IndexPage = () => {
  return (
    <Layout>
      <Head>
        <title>Home Page</title>
      </Head>
      <Button>Click</Button>
    </Layout>
  )
}

export default IndexPage