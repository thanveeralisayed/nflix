import { Api_Key} from "./Constants/Constants";





export const originals = `discover/movie?api_key=${Api_Key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_providers=Netflix&with_watch_monetization_types=flatrate`;

export function more(pgnum)
    {
        return `discover/movie?api_key=${Api_Key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pgnum}&with_watch_providers=Amazon&with_watch_monetization_types=flatrate`
    }








