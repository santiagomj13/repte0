const text = `A la classe, atendre a les explicacions és fonamental per a aprenendre. Per això, la mestra demana atenció en començar la lliçó. Durant la lectura, és important que els alumnes prestin atenció a les paraules difícils per entendre millor el contingut. Al final de la classe, es dedica un temps a revisar quina atenció ha prestat cada alumne a la lliçó impartida per assegurar que tots han entès els conceptes. Mantenir l'atenció és clau perquè els estudiants comprenguin i retinguin la informació, i per això la mestra valora molt l'atenció activa de tots els seus alumnes.`;
const repeticio = "la";
// Comptem quantes vegades apareix la paraula "atenció"
const comptador = text.split(repeticio).length - 1;
console.log(comptador);
