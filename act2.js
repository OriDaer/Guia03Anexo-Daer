//SIN TERMINAR
//
function MultMatrix(Ma) {
    let res = [];//creo variable vacia
    for (let i = 0; i < Ma.length; i++) {
        res.push([]);//que a la variable le vaya almacenando a medida de todo el codigo
      for (let j = 0; j < Mb.length; j++) { 
          //que a la variable res con indice de valor i le agregue la suma de las matrices en posicion i y j
          res[i].push( Ma[0][0]*Ma[0][1]); 
      }
    }
    return res;
  }
  //variables de matrices
  let Ma = [
    [3,3], 
    [2,2]];
  //cuardo el tamaño de las matrices en variables
  let cantA= Ma.length;
  console.log(MultMatrix(Ma));//retorno en la consola