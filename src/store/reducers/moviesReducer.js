import actionTypes from "../actions/actionTypes";

// the initial state of the store
const initialState = {
    movies: [],
    genres: [],
    searchResult: [],
    currentMovie: null,
    searchTerm: '',
    searchPage: 1,
    totalSearchPages: 0,
    isSearch: false,
    heroMovie: {
        movie: null,
        movieIndex: -1
    },
    isLoading: true,
    isBackDrop: false,
    isBrowse: false
}

// the reducer function which will handle the different types of actions
const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_HOME_MOVIES:
            return {
                ...state,
                movies: action.payload.movies,
                genres: action.payload.genres,
                heroMovie: {
                    movie: action.payload.heroMovie.movie,
                    movieIndex: action.payload.heroMovie.movieIndex
                },
                isLoading: false
            }
        case actionTypes.FETCH_SEARCH_RESULT:
            return {
                ...state,
                searchResult: action.payload.searchResult,
                searchTerm: action.payload.searchTerm,
                totalSearchPages: action.payload.totalSearchPages,
                searchPage: action.payload.searchPage,
                isSearch: true,
                isLoading: false,
                isBackDrop: false
            }
        case actionTypes.DELETE_SEARCH_RESULT: {
            const empty = [];
            return {
                ...state,
                searchResult: empty,
                searchTerm: '',
                isSearch: false,
                searchPage: 1,
                totalSearchPages: 0,
                isBackDrop: false,
                isLoading: false
            }
        }
        case actionTypes.GET_NEXT_HERO_MOVIE: {
            let currentIndex = state.heroMovie.movieIndex;
            if (currentIndex === state.movies.length - 1)
                currentIndex = -1;
            let nextIndex = currentIndex + 1;
            let nextMovie = state.movies[nextIndex]
            return {
                ...state,
                heroMovie: {
                    movie: nextMovie,
                    movieIndex: nextIndex
                }
            }
        }
        case actionTypes.CHANGE_TO_WAIT :
            return {
                ...state,
                isLoading: true
            }
        case actionTypes.CLEAR_WAIT :
            return {
                ...state,
                isLoading: false
            }
        case actionTypes.SELECT_MOVIE :
            return {
                ...state,
                currentMovie: action.payload.currentMovie
            }
        case actionTypes.TOGGLE_BACK_DROP :
        {
            let isDrop = !state.isBackDrop;
            return {
                ...state,
                isBackDrop: isDrop
            }
        }
        case actionTypes.TOGGLE_BROWSE_MOVIES :
        {
            let isBrowse = !state.isBrowse
            return {
                ...state,
                isBrowse: isBrowse
            }
        }
        case actionTypes.FETCH_BROWSE_RESULT :
            return {
                ...state,
                searchResult: action.payload.searchResult,
                searchTerm: action.payload.searchTerm,
                totalSearchPages: action.payload.totalSearchPages,
                searchPage: action.payload.searchPage,
                isSearch: true,
                isLoading: false,
                isBackDrop: false
            }
        default:
            return state;
    }
}

export default moviesReducer;