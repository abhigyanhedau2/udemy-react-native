import { createContext, useState } from "react";

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => { },
    removeFavorite: (id) => { }
});

export default function FavoritesContextProvider(props) {
    const [favoriteMealIds, setFavoriteMealIds] = useState([]);

    function addFavorite(id) {
        setFavoriteMealIds(prev => [id, ...prev]);
    }

    function removeFavorite(id) {
        setFavoriteMealIds(prev => prev.filter((mealId) => mealId !== id));
    }

    const value = {
        ids: favoriteMealIds,
        addFavorite,
        removeFavorite
    }

    return <FavoritesContext.Provider value={value}>
        {props.children}
    </FavoritesContext.Provider>
}