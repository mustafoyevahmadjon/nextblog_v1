import { Box, Typography } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import { format } from 'date-fns'
import Image from 'next/image'
import React from 'react'

const Content = () => {
  return (
    <Box width={{ xs: '100%', md: '70%' }}>
      {data.map(item => (
        <Box key={item.image} sx={{ backgroundColor: "rgba(0,0,0,.5)", padding: "20px", marginTop: "20px", borderRadius: "8px", boxShadow: "0px 8px 16px rgba(255, 255, 255, .1)" }}>
          <Box position={"relative"} width={"100%"} height={"50vh"}>
            <Image src={item.image} alt={item.title} fill style={{ objectFit: "cover", borderRadius: "10px" }} />
          </Box>
          <Typography variant="h4" marginTop={"30px"}>{item.title}</Typography>
          <Typography variant="body1" marginTop={"10px"} color={'gray'}>{item.exerpt}</Typography>
          <Divider sx={{ marginTop: "20px" }} />
          <Box sx={{ display: 'flex', gap: '10px', marginTop: '20px' }} height={{ xs: '30vh', md: '50vh' }}>
            <Avatar alt={item.author.name} src={item.author.image} />
            <Box>
              <Typography>{item.author.name}</Typography>
              <Box color={'gray'}>{format(new Date(), 'dd MMMMMMM, yyyy')} &#x2022; 10min read</Box>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  )
}

export default Content

const data = [
  {
    image: 'https://media.graphassets.com/MxJZhmooRRuudoErkQ38',
    title: 'Technical SEO with Hygraph',
    exerpt: 'Get started with your SEO implementation when using a Headless CMS',
    author: {
      name: 'Samar Badriddinov',
      image: 'https://media.graphassets.com/DkfNqQNGRz2F4UFntKQx',
    },
  },
  {
    image: 'https://media.graphassets.com/bh3K2NNtTHCN260Xfq9h',
    title: 'Union Types and Sortable Relations with Hygraph',
    exerpt: 'Learn more about Polymorphic Relations and Sortable Relations with Hygraph',
    author: {
      name: 'Samar Badriddinov',
      image: 'https://media.graphassets.com/DkfNqQNGRz2F4UFntKQx',
    },
  },
];