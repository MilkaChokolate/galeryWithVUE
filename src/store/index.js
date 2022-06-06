import {createStore} from "vuex";

export  default createStore({
    state: {
        favorites: JSON.parse(localStorage.getItem('Favorites'))
    },
    getters: {
        getFavorites: state => state.favorites
    },
    mutations: {
        addToFavorites(state, photo){
            state.favorites.push(photo);
            localStorage.setItem('Favorites', JSON.stringify(state.favorites));
        },
        removeFromFavorites(state, id){
            for (let i = 0; i < state.favorites.length; i++){
                if (state.favorites[i].id === id) {
                    state.favorites.splice(i, 1);
                }
            }
            localStorage.setItem('Favorites', JSON.stringify(state.favorites));
        }
    },
    mounted(){
        console.log(this.favorites)
    }
})