import config from "../App.config";

const fetchData = async (url) => fetch(url).then(res => res.json());

export const getDiscoveryList = () => fetchData(config.DISCOVER_URL);

export const searchMovie = (query) => {
    const url = `${config.SEARCH_URL}&query=${query}`;
    return fetchData(url);
}