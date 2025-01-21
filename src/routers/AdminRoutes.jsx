import { Navigate, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loading from "../components/elements/Loading.jsx";

// const ApplicationError = lazy(() => import("../pages/common/Error/index.tsx"));
const AdminLayout = lazy(() => import("../layout/Admin/index.jsx"));


const PublicRoutes = (
    <Suspense fallback={<Loading />}>
        <Routes>
            <Route path='/' Component={AdminLayout}>
            </Route>
            {/* <Route path='/error/:message' element={<ApplicationError />} /> */}
            <Route path='*' Component={() => <Navigate to='/' replace={true} />} />
        </Routes>
    </Suspense>
);

export default PublicRoutes;