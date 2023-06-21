//sumo 2 matrices si son de igual tamaño,caso contrario devolve -1
function SumMatrix(Ma, Mb) {
  let res = [];//creo variable vacia
  for (let i = 0; i < Ma.length; i++) {
      res.push([]);//que a la variable le vaya almacenando a medida de todo el codigo
    for (let j = 0; j < Mb.length; j++) { 
        if(cantA===cantB){ //Corroboro si la matriz 1 tiene igual cantidad de lugares q la matriz2
        //res.push([])
        //que a la variable res con indice de valor i le agregue la suma de las matrices en posicion i y j
        res[i].push(Ma[i][j] + Mb[i][j]); 
        }else{
            return Falso;//si no tiene el mismo tamaño,devolve -1
        } 
    }
  }
  return res;
}
//variables de matrices
let Ma = [[3,5,8], [82,12,1]];
let Mb = [[15,2,4], [11,23,9]];
//cuardo el tamaño de las matrices en variables
let cantA= Ma.length;
let cantB=Mb.length;
//variable en caso de ser falso
let Falso=-1;
console.log(SumMatrix(Ma, Mb));//retorno en la consola