import { Navigate, Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import Loading from "../components/elements/Loading.jsx";
import WithoutLogin from '../layout/Public/index.jsx';


const PublicRoutes = (
    <Suspense fallback={<Loading />}>
        <Routes>
            <Route path='/' Component={WithoutLogin}>
                {/* <Route path='/' Component={() => <h1>Hello</h1>} /> */}
            </Route>
            <Route path='*' Component={() => <Navigate to='/' replace={true} />} />
        </Routes>
    </Suspense>
);

export default PublicRoutes;