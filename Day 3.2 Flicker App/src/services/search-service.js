import { flickerSearch } from './flicker-service';
import { giphySearch } from './giphy-service';

export const searchForAssest = (term, engine) => {
    if (engine === 'flicker') {
        return flickerSearch(term);
    } else if(engine === 'giphy') {
        return giphySearch(term);
    }
};
