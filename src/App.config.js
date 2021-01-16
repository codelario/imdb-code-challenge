/** 
 * Add App configs  here
*/

/** 
 * Api config properties
*/
const API_KEY = 'ab9dc8c97207e33320e41a1c3f60a9f8';
const API_URL = 'https://api.themoviedb.org/3';
const DISCOVER_URL = `${API_URL}/discover/movie?api_key=${API_KEY}`;
const SEARCH_URL = `${API_URL}/search/movie?api_key=${API_KEY}`;

/** 
 * Images config properties
 */
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
const PREVIEW_URL = 'https://image.tmdb.org/t/p/w200';

const config = {
    API_KEY,
    API_URL,
    DISCOVER_URL,
    SEARCH_URL,
    IMAGE_URL,
    PREVIEW_URL,
}

export default config;