import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/Homepage';
import Connexion from './pages/Connexion';
import Contact from './pages/Contact';
import Mentions from './pages/Mentionslegales';
import Panier from './pages/Panier';
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
        <Route path="/panier" element={<Panier />} />
        <Route path="/services" element={<Services />} />      
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;