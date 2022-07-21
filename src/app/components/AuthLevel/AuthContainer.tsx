import FooterContainer from '../FooterContainer';
import HeaderContainer from '../HeaderContainer';
import MainContainer from '../MainContainer';

const AuthContainer: React.FC = () => {
  return (
    <div className="App auth-container">
      <header className="App-header">
        <HeaderContainer />
      </header>
      <main>
        <MainContainer />
      </main>
      <footer>
        <FooterContainer />
      </footer>
    </div>
  );
};

export default AuthContainer;
