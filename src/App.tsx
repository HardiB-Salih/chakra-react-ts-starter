import React, { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoadingScreen from "./pages/LoadingScreen";
import Layout from "./layout/Layout";

// Lazy loading higher-order component
const Loadable = (Component: React.ComponentType<any>) => (props: any) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        {/* Add other routes here */}
      </Route>
      <Route path="404" element={<Page404 />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
};

export default App;

// Lazy loaded components
const HomePage = Loadable(lazy(() => import("./pages/Home")));
const AboutUsPage = Loadable(lazy(() => import("./pages/AboutUs")));
const Page404 = Loadable(lazy(() => import("./pages/Page404")));
