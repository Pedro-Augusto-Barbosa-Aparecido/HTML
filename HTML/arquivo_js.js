function soma(n1, n2){
	var res = n1 + n2;
	document.write(res);
}
function _time(){

	var tempo = new Date();
	var mes = new Array{Janeiro, fevereiro, março, maio, abril, junho, julho, agosto, setembro, outubro, novembro, desembro};
	var dia = new Array{domingo, segunda, terça, quarta, quinta, sexta, sábado};

	document.write("Data: " + dia[tempo.getDay()] + tempo.getDate() + "/" + mes[tempo.getMonth()] + "/" + tempo.getFullYear());

}