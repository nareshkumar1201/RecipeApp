const TOGGLE_FAVORITE='TOGGLE_FAVORITE',

export const MealsAction =(id)=>{
 return {
     type:'TOGGLE_FAVORITE',
     payload:id
 }
}