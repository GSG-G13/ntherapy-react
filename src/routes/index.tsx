import { createBrowserRouter } from "react-router-dom";
import { Admin, LandingPage, Login, Signup, Therapists, TherapistPage, LoginAdmin, NotFound } from "../pages/index";
import Layout from "../layout/Layout";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <LandingPage />
            },
            {
                path: "/therapists",
                element: <Therapists />
            },
            {
                path: "/therapist/:id",
                element: <TherapistPage />
            }
        ],

    },
    {
        path: "/signup",
        element: <Signup />

    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/admin",
        element: <Admin />
    },
    {
        path: "/LoginAdmin",
        element: <LoginAdmin />
    }

]);

export default router;