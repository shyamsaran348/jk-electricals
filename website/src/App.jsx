import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./components/ScrollToTop";
import { Toaster } from "react-hot-toast";

function App() {
 return (
 <>
 <Toaster position="top-right" />
 <ScrollToTop />
 <AppRoutes />
 </>
 );
}

export default App;
