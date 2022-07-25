import type { NextPage } from 'next'
import { useCookies } from 'react-cookie';
import AuthContainer from '../app/components/AuthLevel/AuthContainer'
import NotAuthContainer from '../app/components/AuthLevel/NotAuthContainer'
import jwt from 'jsonwebtoken';

const IndexPage: NextPage = () => {
  // const dispatch = useAppDispatch()
  // const user = useAppSelector(selectUser)

  const auth = false;

  if(auth) return <AuthContainer />

  return (
    <div className="App">
      <NotAuthContainer />
    </div>
  );
}

export default IndexPage
