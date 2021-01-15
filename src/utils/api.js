import config from "../App.config";

const fetchData = async (url) => fetch(url).then(res => res.json());

export const getDiscoveryList = () => {
    const url = `${config.DISCOVER_URL}?api_key=${config.API_KEY}`;
    return fetchData(url);
}