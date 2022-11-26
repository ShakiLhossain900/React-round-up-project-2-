import { createContext,useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
});

function FavoritesContextProvider(props) {

    const [userFavorites, setUserFavorites] = useState([]);


    function addFavorateHandler (favoriteMeetup){
        // setUserFavorites(userFavorites.concat(favoriteMeetup))
        //uper one use na kore amara  jodi function use kori letest one amra pabu
       setUserFavorites((prevUserFavorites)=>{
        return prevUserFavorites.concat(favoriteMeetup);
       })
    }



    function removeFavorateHandler (){}
    
    function itemIsFavoriteHandler () {}


    const context= {
        favorites:userFavorites,
         totalFavorites:userFavorites.length,
    }





    return (
    <FavoritesContext.Provider value={context} >
        {props.children}
    </FavoritesContext.Provider>
  );
}
