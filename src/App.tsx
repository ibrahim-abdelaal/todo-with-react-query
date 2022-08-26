import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { HomePage } from './pages/homePage';

const queryClient = new QueryClient();

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <HomePage />
      </QueryClientProvider>
    </div>
  );
}

export default App;
