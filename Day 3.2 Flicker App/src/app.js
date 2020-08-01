import React, { useEffect, useState } from 'react';
import { searchForAssest } from './services/search-service';
import Search from './components/search/search';
import Photos from './components/photos/photos';
import Videos from './components/videos/videos';
import './app.scss';

const App = () => {
    const [appState, setAppState] = useState({
        loading: true,
        searchValue: 'car',
        engine: 'flicker',
        photos: []
    })
    useEffect(() => {
        search();
    }, [appState.engine])

    const searchTermChanged = (e) => {
        setAppState({ ...appState, searchValue: e.target.value });
    }

    const searchEngineChanged = (e) => {
        const value = e.target.value;
        setAppState({ ...appState, engine: value });
    }

    const search = () => {
        setAppState({ ...appState, loading: true, photos: [] });
        searchForAssest(appState.searchValue, appState.engine)
            .then(photos => {
                setAppState({ ...appState, loading: false, photos: photos });
            })
            .catch(err => {
                setAppState({ ...appState, loading: false, photos: [] });
            });
    }
    const onImageClick = (e) => {
        //todo
        console.log('onImageClick: ', e.target.id);
    }
    return (
        <div className="App">
            <Search
                search={search}
                engine={appState.engine}
                engineChanged={searchEngineChanged}
                searchTermChanged={searchTermChanged}
                searchValue={appState.searchValue}
            />

            <div>
                {appState.loading && (
                    <div className="loading">Loading...</div>
                )}

                {appState.photos.length === 0 && !appState.loading && (
                    <div>Can't find photos for this search term</div>
                )}

                {appState.photos.length > 0 && !appState.loading && (
                    <React.Fragment>
                        {appState.engine === 'flicker' && (
                            <Photos
                                photos={appState.photos}
                                onImageClick={onImageClick}
                            />
                        )}
                        {appState.engine === 'giphy' && (
                            <Videos
                                videos={appState.photos}
                                onVideoClick={onImageClick}
                            />
                        )}
                    </React.Fragment>
                )}

            </div>
        </div>
    );
}

export default App;
