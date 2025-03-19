import React, { Suspense } from "react";
import { Route, Routes } from "react-router";
import { ClipLoader } from "react-spinners";

const ApplicationRoutes: React.FC = () => {
    return (
      <Suspense fallback={<ClipLoader />}>
        <Routes>
            <Route>
 
          </Route>
        </Routes>
      </Suspense>
    );
  };


  export default ApplicationRoutes;
