import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Home from "../pages/Home";
import AddNew from "../pages/AddNew";
import About from "../pages/About";
import Edit from "../pages/EditEmp";
import EditEmp from "../pages/EditEmp";
import ViewEmp from "../pages/ViewEmp";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/new',
                element: <AddNew />
            },
            {
                path: '/edit/:id',
                element: <EditEmp />
            },
            {
                path: '/view',
                element: <ViewEmp />
            },
            {
                path: '/about',
                element: <About />
            }
        ]
    }

])