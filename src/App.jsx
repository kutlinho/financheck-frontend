import { PrimeReactProvider } from 'primereact/api';
import {BrowserRouter, Route, Routes} from "react-router";
import MainLayout from "./layout/MainLayout.jsx";
import PublicRoute from "./routes/PublicRoute.jsx";
import Login from "./pages/auth/Login.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import NotFound from "./pages/NotFound.jsx";


function App() {

  return (
    <PrimeReactProvider>
        <BrowserRouter>
            <Routes>

                {/* PUBLIC ROUTES */}
                    <Route path="/login" element={<Login />} />
                <Route element={<PublicRoute />}>
                    <Route path="/register" element={<Login isRegister={true} />} />
                </Route>

                {/* PROTECTED ROUTES */}
                <Route element={<PrivateRoute />}>
                    <Route element={<MainLayout />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                        {/*<Route path="/transactions" element={<Transactions />} />*/}
                        {/*<Route path="/accounts" element={<Accounts />} />*/}
                        {/*<Route path="/reports" element={<Reports />} />*/}
                    </Route>
                </Route>

                {/* FALLBACK */}
                <Route path="*" element={<NotFound />} />

            </Routes>
        </BrowserRouter>

    </PrimeReactProvider>
  )
}

export default App
