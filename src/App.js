import logo from './logo.svg';
import './App.css';
import Nav from './Layout/Nav';
import Content from './Layout/Content';
import Footer from './Layout/Footer';

function App() {
  return (
    <>
      <div className='Wrapper'>
        <div className='Nav-block'>
          <Nav></Nav>
        </div>
        <div className='Content-block'>
          <Content></Content>
          <Footer></Footer>
        </div>
      </div>

    </>
  );
}

export default App;
