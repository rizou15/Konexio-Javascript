
var voiture = {
    marque: 'Citroen',
    modèle: {
        a:'turbo D',
        b:'Aircross'
    },
    année : 2014,

}


voiture.modèle.c = 'C3';
voiture.pneu = [1,2,3,4];
var arr2 = voiture.pneu.map(myFunction(roue));

function myFunction(roue){
    return roue + 2;
}
console.log(arr2);

console.log(voiture);
console.log(voiture.marque);
console.log(voiture.modèle);