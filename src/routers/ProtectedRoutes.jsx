import { Navigate, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import Layout from '../layout/Protected/index.jsx';
import Loading from "../components/elements/Loading.jsx";


const ProtectedRoutes = (
    <Suspense fallback={<Loading />}>
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route path='*' Component={() => <Navigate to='/' replace={true} />} />
            </Route>
            {/* <Route path='/error/:message' element={<ApplicationError />} /> */}
            {/* <Route path='/welcome' Component={Welcome} /> */}
        </Routes>
    </Suspense>
);

export default ProtectedRoutes;