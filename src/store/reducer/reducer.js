
const initialState = {
    fetchedMovies: [],
    selectedMovie: null,
    fetchedActors:[],
    selectedActor: null,
    totalPages:null,
    loading: true,
}


const SET_MOVIES = "SET_MOVIES";
const SET_SELECTED_MOVIE = "SET_SELECTED_MOVIE";
const SET_ACTORS = "SET_ACTORS";
const SET_SELECTED_ACTOR = "SET_SELECTED_ACTOR";
const SET_PAGES = "SET_PAGES";

const START_LOADING = "START_LOADING";
const END_LOADING = "END_LOADING";

const ADD_MOVIES = "ADD_MOVIES";

export const setActorsAction = (payload) => ({
    type: SET_ACTORS,
    payload
})
export const setSelectedActorAction = (payload) => ({
    type: SET_SELECTED_ACTOR,
    payload
})

export const setMoviesAction = (payload) => ({
    type: SET_MOVIES,
    payload
})

export const setSelectedMovieAction = (payload) => ({
    type: SET_SELECTED_MOVIE,
    payload
})

export const startLoadingAction = () => ({
    type: START_LOADING,
    payload: undefined,
})

export const setPages = (payload) => ({
    type: SET_PAGES,
    payload,
})


export const endLoadingAction = () => ({
    type: END_LOADING,
    payload: undefined,
})


export const reducer = (state = initialState,action)=>{
    switch (action.type) {

        case SET_MOVIES:
            return {
                ...state,
                fetchedMovies: action.payload
            }

        case SET_SELECTED_MOVIE:
            return {
                ...state,
                selectedMovie: action.payload
            }
        case SET_ACTORS:
            return {
                ...state,
                fetchedActors: action.payload
            }
        case SET_SELECTED_ACTOR:
            return {
                ...state,
                selectedActor: action.payload
            }
        case SET_PAGES:
            return {
                ...state,
                totalPages: action.payload
            }

        case START_LOADING:
            return {
                ...state, loading: true
            }

        case END_LOADING:
            return {
                ...state, loading: false
            }

        default:
           return state;
    }
}