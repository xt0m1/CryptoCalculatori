function a() {
	var b=parseFloat(document.getElementById("buy").value);
	var c=parseFloat(document.getElementById("bprice").value);
	var g=b*c;
	document.getElementById("buysum").value=g;
}

function b() {
	var y=parseFloat(document.getElementById("sell").value);
	var c=parseFloat(document.getElementById("sprice").value);
	var g=y*c;
	document.getElementById("sellsum").value=g;
}

function c() {
	var a=parseFloat(document.getElementById("buysum").value);
	var b=parseFloat(document.getElementById("sellsum").value);
	var g=b-a;
	document.getElementById("sum").value=g;
	roundN()
}

function cd() {
	var b=parseFloat(document.getElementById("buy").value);
	var d=parseFloat(document.getElementById("sell").value);
	var g=d*100/b;
	document.getElementById("p").value=g;
}

function d() {
	var e=parseFloat(document.getElementById("p").value);
	var f=parseFloat(document.getElementById("buysum").value);
	var g=f/100*e;
	document.getElementById("buytotal").value=g;
}

function f() {
 	var e=parseFloat(document.getElementById("sellsum").value);
	var f=parseFloat(document.getElementById("buytotal").value);
	var g=e-f;
	document.getElementById("sum").value=g;
	roundN()
}

function g() {
	document.getElementById('textarea2').style.visibility = "visible";
}

function gf() {
	document.getElementById('sump').style.visibility = "visible";
	document.getElementById('sum').style.visibility = "visible";
}


function h() {
	window.location.reload();
}


document.getElementById('calculate').onclick = function() {
	var x=parseFloat(document.getElementById("buy").value);
	var z=parseFloat(document.getElementById("sell").value);
	if (x == z) {
		a(); b(); c(); gf()
	} else {
		a(); b(); cd(); d(); f(); gf()
	}

}

function roundN() {
	var num = parseFloat(document.getElementById("sum").value);
	var n = num.toFixed(2);
	document.getElementById("sum").value = n + " €";
}


document.getElementById('save').onclick = function() {
	document.getElementById('textarea2').style.visibility = "visible";
	var x=parseFloat(document.getElementById("buy").value);
	var z=parseFloat(document.getElementById("sell").value);
	if (x == z) {
		var hh="Hankintahinta";
		var a=parseFloat(document.getElementById("buy").value) + "*" + parseFloat(document.getElementById("bprice").value);
		var b="=" + parseFloat(document.getElementById("buysum").value) + " €";
		var c=" ";
		var mh="Myyntihinta";
		var d=parseFloat(document.getElementById("sell").value) + "*" + parseFloat(document.getElementById("sprice").value);
		var e="=" + parseFloat(document.getElementById("sellsum").value) + " €";
		var f=" ";
		var nt="Nettotulo";
		var g=parseFloat(document.getElementById("sellsum").value) + "-" + parseFloat(document.getElementById("buysum").value) + " €";
		var h="=" + parseFloat(document.getElementById("sum").value) + " €";
		var v=[hh, a, b, c, mh, d, e, f, nt, g, h];
		document.getElementById("textarea2").value=v.join("\n");
	} else {
		var hh="Hankintahinta";
		var a=parseFloat(document.getElementById("buy").value) + "*" + parseFloat(document.getElementById("bprice").value);
		var w="=" + parseFloat(document.getElementById("buysum").value) + " €";
		var r=" ";
		var mh="Myyntihinta";
		var d=parseFloat(document.getElementById("sell").value) + "*" + parseFloat(document.getElementById("sprice").value);
		var y="=" + parseFloat(document.getElementById("sellsum").value) + " €";
		var u=" ";
		var mpo="Myyntimäärän prosenttiosuus ostomäärästä";
		var s=parseFloat(document.getElementById("sell").value) + "*100÷" + parseFloat(document.getElementById("buy").value);
		var j="=" + parseFloat(document.getElementById("p").value) + " %";
		var n=" ";
		var mph="Myyntimäärän hankintahinta"
		var x=parseFloat(document.getElementById("buysum").value) + "÷100*" + parseFloat(document.getElementById("p").value);
		var ad="=" + parseFloat(document.getElementById("buytotal").value) + " €";
		var m=" ";
		var nt="Nettotulo"
		var ab=parseFloat(document.getElementById("sellsum").value) + "-" + parseFloat(document.getElementById("buytotal").value);
		var ac="=" + parseFloat(document.getElementById("sum").value) + " €";
		var v=[hh, a, w, r, mh, d, y, u, mpo, s, j, n, mph, x, ad, m, nt, ab, ac];
		document.getElementById("textarea2").value=v.join("\n");
	}
}
