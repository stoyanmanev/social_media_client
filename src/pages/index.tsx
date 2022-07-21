import type { NextPage } from 'next'
import Head from 'next/head'
import AuthContainer from '../app/components/AuthLevel/AuthContainer'
import NotAuthContainer from '../app/components/AuthLevel/NotAuthContainer'

const IndexPage: NextPage = () => {
  const auth = false;

  
  if(auth) return <AuthContainer />

  return (
    <div className="App">
      <NotAuthContainer />
    </div>
  );
}

export default IndexPage
