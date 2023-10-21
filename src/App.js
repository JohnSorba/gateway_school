import AppRouter from "./components/AppRouter";
import { SubpageProvider } from "./Contexts/SubpageContext";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div>
      <SubpageProvider>
        <AppRouter></AppRouter>
      </SubpageProvider>
    </div>
  );
}

export default App;
