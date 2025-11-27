let binario = "11110010";


binario = binario.replace(/1/g, "2");

binario= binario.replace(/0/g, "1");
binario = binario.replace(/2/g, "0");

console.log(binario); // "00001100"
