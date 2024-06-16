import { PartsScreen } from 'app/features/parts/parts-screen'
import Head from 'next/head'

import { NextPageWithLayout } from 'pages/_app'

export const Page: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Parts</title>
      </Head>
      <PartsScreen />
    </>
  )
}

// Page.getLayout = (page) => <YourLayout>{page}</YourLayout>

export default Page
