$(function(){
	$('button').click(function(){
		var texto, textoSeparado, wordCount, average, uniqueWordCount; 
		texto = $('textarea').val();
		textoSeparado = texto.split(" ");
		wordCount =  textoSeparado.length;
		average = 0
		uniqueWordCount = " ";

		for (var i = 0; i < textoSeparado.length; i++){
			textoSeparado[i] = textoSeparado[i].replace(",","");
			textoSeparado[i] = textoSeparado[i].replace(".","");
			average += textoSeparado[i].length;
			
		}
		average = average/wordCount;

		resultados(wordCount,average, uniqueWordCount);
					
	});
});

function resultados(wordCount, average, uniqueWordCount ){
	$('#wordCount').html(wordCount);
	$('#average').html(average.toFixed(2) + " Caracteres.");
	$('#unique').html(uniqueWordCount);
}


/*function dividirCadena(cadenaADividir,separador) {
   var arregloDeCadenas = cadenaADividir.split(separador);
   document.write('<p>La cadena original es: "' + cadenaADividir + '"');
   document.write('<br>El separador es: "' + separador + '"');
   document.write("<br>El arreglo tiene " + arregloDeCadenas.length + " elementos: ");

   for (var i=0; i < arregloDeCadenas.length; i++) {
      document.write(arregloDeCadenas[i] + " / ");
   }
}

var cadenaVerso = "Oh brave new world that has such people in it.";
var cadenaMeses = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

var espacio = " ";
var coma = ",";

dividirCadena(cadenaVerso, espacio);
dividirCadena(cadenaVerso);
dividirCadena(cadenaMeses, coma);

*/