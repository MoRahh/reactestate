import { ChakraProvider } from '@chakra-ui/react';
import Router from 'next/router'
import Head from 'next/head';
import NProgress from 'nprogress';
import Layout from '../components/Layout';
import '../components/property.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>

      </Head>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  )
}
