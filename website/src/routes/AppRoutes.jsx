import { Routes, Route } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../pages/Home';
import About from '../pages/About';
import Products from '../pages/Products';
import Brands from '../pages/Brands';
import Industries from '../pages/Industries';
import Projects from '../pages/Projects';
import Clients from '../pages/Clients';
import Resources from '../pages/Resources';
import Contact from '../pages/Contact';
import ProductDetail from '../pages/ProductDetail';

const AppRoutes = () => {
 return (
 <Routes>
 <Route path="/" element={<Layout />}>
 <Route index element={<Home />} />
 <Route path="about" element={<About />} />
 <Route path="products" element={<Products />} />
 <Route path="products/:slug" element={<ProductDetail />} />
 <Route path="brands" element={<Brands />} />
 <Route path="industries" element={<Industries />} />
 <Route path="projects" element={<Projects />} />
 <Route path="clients" element={<Clients />} />
 <Route path="resources" element={<Resources />} />
 <Route path="contact" element={<Contact />} />
 </Route>
 </Routes>
 );
};

export default AppRoutes;
