import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { About, HomeLayout, Landing, Error, Cocktail, Newsletter, SinglePageError } from "./pages";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { loader as drinksLoader } from "./pages/Landing";
import {loader as singleDrinkLoader} from './pages/Cocktail';
import {action as rateAction} from './pages/Newsletter';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000* 60 * 5,
    }
  }
})

const router = createBrowserRouter([
  {
    path: '/',

    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: drinksLoader(queryClient),
        errorElement: <SinglePageError />
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'cocktail/:id',
        errorElement: <SinglePageError />,
        loader: singleDrinkLoader(queryClient),
        element: <Cocktail />,
      },
      {
        path: 'rate',
        action: rateAction,
        element: <Newsletter />,
      },
    ],
  },
]);

const App = () => {
  return (
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
  ) 
};
export default App;
