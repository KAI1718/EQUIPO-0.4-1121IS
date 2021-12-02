function ordenar(arreglo) {
    if(arreglo.length < 1) {
        return [];
    }
    var menor = [];
    var mayor = [];
    var igual = [];
    for(var i= 1; i< arreglo.length; i++) {
        if(arreglo[i] < igual) {
            mayor.push(arreglo[i]);
        }else{
            menor.push(arreglo[i]);
        }
}
 return ordenar(mayor).concat(igual, ordenar(menor));
}
console.log(ordenar([1,2,3,20,55,68,7,89,9,10]));