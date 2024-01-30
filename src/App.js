import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/Homepage';
import Connexion from './pages/Connexion';
import Contact from './pages/Contact';
import Mentions from './pages/Mentionslegales';
import Recherche from './pages/Recherche';
import Services from './pages/Services';



function App() {
  return (
    <>
        <title>La Bibliothèque d'Hyrule</title>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/login" element={<Connexion />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/mentions" element={<Mentions />} />
        <Route path="/search" element={<Recherche />} />
        <Route path="/services" element={<Services />} />      
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;