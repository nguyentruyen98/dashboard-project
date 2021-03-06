import Layout from 'pages/layout';
import React, {lazy} from 'react';
import {Outlet} from 'react-router';
import {useRoutes} from 'react-router-dom';
import WapperRouteComponent from 'routes/config';
import {ROUTES} from 'routes/routes';
const HomePage = lazy(() => import('pages/home'));
const GamePage = lazy(() => import('pages/game'));
const FoodPage = lazy(() => import('pages/food'));
const CreateFoodPage = lazy(() => import('pages/food/create'));
const WeatherPage = lazy(() => import('pages/weather'));
const NotFoundPage = lazy(() => import('pages/404'));

const element = {
  path: '',
  element: <Layout />,
  children: [
    {
      path: ROUTES.HOME,
      element: <WapperRouteComponent element={<HomePage />} title="Home" />,
    },
    {
      path: ROUTES.GAME,
      element: <WapperRouteComponent element={<GamePage />} title="Game" />,
    },
    {
      path: ROUTES.FOOD,
      element: <Outlet />,
      children: [
        {
          path: '',
          element: <WapperRouteComponent element={<FoodPage />} title="Food" />,
        },
        {
          path: ROUTES.CREATE_FOOD,
          element: (
            <WapperRouteComponent
              element={<CreateFoodPage />}
              title="Create Food"
            />
          ),
        },
      ],
    },
    {
      path: ROUTES.WEATHER,
      element: (
        <WapperRouteComponent element={<WeatherPage />} title="Weather" />
      ),
    },
    {
      path: ROUTES.NOT_FOUND,
      element: (
        <WapperRouteComponent element={<NotFoundPage />} title="Not Found" />
      ),
    },
  ],
};

const RenderRouter = () => {
  const elements = useRoutes([element]);
  return elements;
};
export default RenderRouter;
