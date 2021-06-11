import Nav from './components/nav';
import Footer from './components/footer';
import StepsPage from './pages/steps/index';

function App() {
  return (
    <div>
      <body>
        <Nav />
        <main style={{ display: "flex", textAlign: "center" }}>
          <StepsPage/>
        </main>
        <Footer />
      </body>
    </div>
  );
}

export default App;
