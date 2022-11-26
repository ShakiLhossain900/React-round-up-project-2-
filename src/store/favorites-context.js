import { createContext,useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,

  addFavorite:(favoriteMeetup) => {},
  removeFavorite:(meetupId) => {},
  itemIsFavorite:(meetupId) => {},

});

export function FavoritesContextProvider(props) {

    const [userFavorites, setUserFavorites] = useState([]);


    function addFavorateHandler (favoriteMeetup){
        // setUserFavorites(userFavorites.concat(favoriteMeetup))
        //uper one use na kore amara  jodi function use kori letest one amra pabu
       setUserFavorites((prevUserFavorites)=>{
        return prevUserFavorites.concat(favoriteMeetup);  //The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
       })
    }



    function removeFavorateHandler (meetupId){
     setUserFavorites(prevUserFavorites=>{
        return prevUserFavorites.filter(meetup=>meetup.id !== meetupId);
    });
    }
    
    function itemIsFavoriteHandler (meetupId) {
        return userFavorites.some(meetup=>meetup.id === meetupId);
    }


    const context= {
        favorites:userFavorites,
         totalFavorites:userFavorites.length,
         addFavorite: addFavorateHandler,
         removeFavorite:removeFavorateHandler,
         itemIsFavorite:itemIsFavoriteHandler
    }


    return (
    <FavoritesContext.Provider value={context} >
        {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;