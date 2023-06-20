import React, { useState } from 'react'
import { CalculadoraScreen } from './src/screens/CalculadoraScreen';



export const App = () => {
  return (
    <CalculadoraScreen/> 
  )
}

// Route::get('operacion/{numero1}/{numero2}/{operacion}', function ($numero1, $numero2, $operacion) {

//   if($operacion == 1){
//       return $numero1 + $numero2;
//   }
  
//   if($operacion == 2){
//       return $numero1 - $numero2;
//   }
  
//   if($operacion == 3){
//       return $numero1 * $numero2;
//   }
  
//   if($operacion == 4){
//       return $numero1 / $numero2;
//   }

  
// })->name('operacion');