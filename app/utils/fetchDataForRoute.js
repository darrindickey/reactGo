const defaultFetchData = () => Promise.resolve();

function fetchDataForRoute({ routes, params }) {
  const matchedRoute = routes[routes.length - 1];

  const fetchDataHandler = matchedRoute.fetchData || defaultFetchData;

  if (params.username) {
    const fetchDataHandler = matchedRoute.fetchData(params.username) || defaultFetchData;
  }

  return fetchDataHandler(params);
}

export default fetchDataForRoute;

