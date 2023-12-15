import { createStore } from 'redux';

//initial Object
const Initial = {
    pcolor: 'white',
    scolor: 'rgb(220, 220, 220)',
    tcolor: 'black'
}
//action constants
const DARK_THEME = 'DARK_THEME';
const LIGHT_THEME = 'LIGHT_THEME';
//action creator:
function setDarkColor() {
    return {
        type: DARK_THEME
    }
}
function setLightColor() {
    return {
        type: LIGHT_THEME
    }
}

//reducer
const reducer = (state = Initial, action) => {
    switch (action.type) {
        case DARK_THEME:
            return { pcolor: 'black', scolor: 'rgb(48, 47, 47)', tcolor: 'white' };
        case LIGHT_THEME:
            return { pcolor: 'white', scolor: 'rgb(220, 220, 220)', tcolor: 'black' };
        default: return state;
    }
}

//store
const store = createStore(reducer);


export { store, setDarkColor, setLightColor, DARK_THEME, LIGHT_THEME }