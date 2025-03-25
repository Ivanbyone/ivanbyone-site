import Menu from './components/Menu';
import './App.css';
import MainContainer from './components/Container';
import About from './components/About';
import Contacts from './components/Contacts';

function App() {
  return (
    <>
      <header>
        <Menu />
      </header>
      <main id="main" className="main">
        <h2><a href="https://github.com/Ivanbyone" className="ivanbyone">@ivanbyone</a></h2>
        <h2>Backend Developer</h2>
        <About />
        <MainContainer />
        <Contacts />
      </main>
      <footer id="footer">
      </footer>
    </>
  );
}

export default App;
