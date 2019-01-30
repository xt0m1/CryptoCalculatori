
function a() {
    var b=parseFloat(document.getElementById("oprice").value);
    var c=parseFloat(document.getElementById("cprice").value);
    var g=(b+c)/2;
    document.getElementById("aprice").value=g;
}

function b() {
    var a=parseFloat(document.getElementById("income").value);
    var c=parseFloat(document.getElementById("aprice").value);
    var g=a*c;
    document.getElementById("isum").value=g;
}

function ba() {
    var a=parseFloat(document.getElementById("obprice").value);
    var c=parseFloat(document.getElementById("cbprice").value);
    var g=(a+c)/2;
    document.getElementById("abprice").value=g;
}

function bb() {
    var a=parseFloat(document.getElementById("isum").value);
    var c=parseFloat(document.getElementById("abprice").value);
    var g=a*c;
    document.getElementById("iesum").value=g;
}


function c() {
    var a=parseFloat(document.getElementById("watt").value);
    var b=parseFloat(document.getElementById("time").value);
    var g=a*24/1000*b;
    document.getElementById("kwh").value=g;
}

function ca() {
    var a=parseFloat(document.getElementById("watt").value);
    var g=a*24/1000;
    document.getElementById("kwhs").value=g;
}

function ci() {
    var a=parseFloat(document.getElementById("kwhs").value);
    var b=parseFloat(document.getElementById("kkpt").value);
    var g=a*b;
    document.getElementById("kwhsk").value=g;
}

function kk() {
    var a=parseFloat(document.getElementById("watt").value);
    var b=parseFloat(document.getElementById("kwhkk").value);
    var c=parseFloat(document.getElementById("kkpt").value);
    var g=a*24/1000;
    var f=g*c*100/b;
    document.getElementById("prosentti").value=f;
}

function d() {
    var a=parseFloat(document.getElementById("kwh").value);
    var b=parseFloat(document.getElementById("yleisk").value);
    var g=a*b;
    document.getElementById("yleisku").value=g;
}

function cd() {
    var a=parseFloat(document.getElementById("perusv").value);
    var b=parseFloat(document.getElementById("time").value);
    var c=parseFloat(document.getElementById("prosentti").value);
    var d=parseFloat(document.getElementById("kkpt").value);
    var g=a/12/d*b/100*c;
    document.getElementById("perusve").value=g;
}

function xd() {
    var a=parseFloat(document.getElementById("svero").value);
    var b=parseFloat(document.getElementById("kwh").value);
    var g=b*a;
    document.getElementById("sahkove").value=g;
}

function rt() {
    var a=parseFloat(document.getElementById("senergia").value);
    var b=parseFloat(document.getElementById("kwh").value);
    var g=b*a;
    document.getElementById("sahkoenergia").value=g;
}

function zd() {
    var a=parseFloat(document.getElementById("perusk").value);
    var b=parseFloat(document.getElementById("time").value);
    var c=parseFloat(document.getElementById("prosentti").value);
    var d=parseFloat(document.getElementById("kkpt").value);
    var g=a/d*b/100*c;
    document.getElementById("perusku").value=g;
}

function ne() {
    var a=parseFloat(document.getElementById("netti").value);
    var b=parseFloat(document.getElementById("time").value);
    var d=parseFloat(document.getElementById("kkpt").value);
    var g=a/d*b;
    document.getElementById("nettim").value=g;
}

function yz() {
    var a=parseFloat(document.getElementById("yleisku").value);
    var b=parseFloat(document.getElementById("perusve").value);
    var c=parseFloat(document.getElementById("sahkove").value);
    var d=parseFloat(document.getElementById("sahkoenergia").value);
    var e=parseFloat(document.getElementById("perusku").value);
    var f=parseFloat(document.getElementById("nettim").value);
    var g=a+b+c+d+e+f;
    document.getElementById("tcost").value=g;
}

function e() {
    var a=parseFloat(document.getElementById("iesum").value);
    var b=parseFloat(document.getElementById("tcost").value);
    var g=a-b;
    document.getElementById("sum").value=g;
    roundN()
}

function gf() {
    document.getElementById('sump').style.visibility = "visible";
    document.getElementById('sum').style.visibility = "visible";
}

function roundN() {
    var num = parseFloat(document.getElementById("sum").value);
    var n = num.toFixed(2) + " $";
    document.getElementById("sum").value = n;
}

function h() {
    window.location.reload();
}

document.getElementById('calculate').onclick = function() {
    a(); b(); ba(); bb(); c(); ca(); ci(); kk(); d(); cd(); xd(); rt(); zd(); ne(); yz(); e(); gf()
}

document.getElementById('save').onclick = function() {
    document.getElementById('textarea2').style.visibility = "visible";
    var kkb="Keskikurssi btc";
    var a="(" + parseFloat(document.getElementById("oprice").value) + "+" + parseFloat(document.getElementById("cprice").value) + ")/2"; 
    var b="=" + parseFloat(document.getElementById("aprice").value) + " btc";
    var c=" ";
    var btb="Bruttotulo btc";
    var d=parseFloat(document.getElementById("income").value) + "*" + parseFloat(document.getElementById("aprice").value);
    var e="=" + parseFloat(document.getElementById("isum").value) + " btc";
    var f=" ";
    var kke="Keskikurssi $";
    var ab="(" + parseFloat(document.getElementById("obprice").value) + "+" + parseFloat(document.getElementById("cbprice").value) + ")/2"; 
    var abp="=" + parseFloat(document.getElementById("abprice").value) + " $";
    var o=" ";
    var bbe="Bruttotulo $";
    var ba=parseFloat(document.getElementById("isum").value) + "*" + parseFloat(document.getElementById("abprice").value);
    var bap="=" + parseFloat(document.getElementById("iesum").value) + " $";
    var y=" ";
    var xz="Louhintalaitteiden kWh";
    var g=parseFloat(document.getElementById("watt").value) + "*24/1000*" + parseFloat(document.getElementById("time").value);
    var h="=" + parseFloat(document.getElementById("kwh").value) + " kWh";
    var i=" ";
    var eha="Kiinteistön kWh";
    var erha=parseFloat(document.getElementById("kwhkk").value) + " kWh";
    var erta=" ";
    var sdf="Prosenttiosuus Perusmaksuista"
    var ewq=parseFloat(document.getElementById("kwhs").value) + "*" + parseFloat(document.getElementById("kkpt").value) + "=" + parseFloat(document.getElementById("kwhsk").value)
    var srq= parseFloat(document.getElementById("kwhsk").value) + "*100/" + parseFloat(document.getElementById("kwhkk").value);
    var qrw="=" + parseFloat(document.getElementById("prosentti").value) + " %";
    var qw=" ";
    var ax="Yleissiirto kulutusmaksu snt/kWh";
    var j=parseFloat(document.getElementById("kwh").value) + "*" + parseFloat(document.getElementById("yleisk").value);
    var k="=" + parseFloat(document.getElementById("yleisku").value) + " $";
    var sa=" ";
    var za="Perusmaksu $/v";
    var as=parseFloat(document.getElementById("perusv").value) + "/12/" + parseFloat(document.getElementById("kkpt").value) + "*" + parseFloat(document.getElementById("time").value) + "/100*" + parseFloat(document.getElementById("prosentti").value);
    var ka="=" + parseFloat(document.getElementById("perusve").value) + " $";
    var ls=" ";
    var ko="Sähkövero snt/kWh";
    var u=parseFloat(document.getElementById("kwh").value) + "×" + parseFloat(document.getElementById("svero").value);
    var p="=" + parseFloat(document.getElementById("sahkove").value) + " $";
    var x=" ";
    var ey="Energiamaksu snt/kWh";
    var et=parseFloat(document.getElementById("kwh").value) + "×" + parseFloat(document.getElementById("senergia").value);
    var er="=" + parseFloat(document.getElementById("sahkoenergia").value) + " $";
    var yz=" ";
    var iz="Perusmaksu $/kk";
    var po=parseFloat(document.getElementById("perusk").value) + "/" + parseFloat(document.getElementById("kkpt").value) + "*" + parseFloat(document.getElementById("time").value) + "/100*" + parseFloat(document.getElementById("prosentti").value);
    var pi="=" + parseFloat(document.getElementById("perusku").value) + " $";
    var tr=" ";
    var ne="Nettimaksu $/kk";
    var tt=parseFloat(document.getElementById("netti").value) + "/" + parseFloat(document.getElementById("kkpt").value) + "*"  + parseFloat(document.getElementById("time").value);
    var im="=" + parseFloat(document.getElementById("nettim").value) + " $";
    var ta=" ";
    var ix="Kulut Yht.";
    var ui=parseFloat(document.getElementById("yleisku").value) + "+" + parseFloat(document.getElementById("perusve").value) + "+" + parseFloat(document.getElementById("sahkove").value) + "+" + parseFloat(document.getElementById("sahkoenergia").value) + "+" + parseFloat(document.getElementById("perusku").value) + "+" + parseFloat(document.getElementById("nettim").value);
    var iu="=" + parseFloat(document.getElementById("tcost").value) + " $";
    var ce=" ";
    var dz="Nettotulo";
    var m=parseFloat(document.getElementById("iesum").value) + "-" + parseFloat(document.getElementById("tcost").value);
    var n="=" + parseFloat(document.getElementById("sum").value) + " $";
    var v=[kkb, a, b, c, btb, d, e, f, kke, ab, abp, o, bbe, ba, bap, y, xz, g, h, i, eha, erha, erta, sdf, ewq, srq, qrw, qw, ax, j, k, sa, za, as, ka, ls, ko, u, p, x, ey, et, er, yz, iz, po, pi, tr, ne, tt, im, ta, ix, ui, iu, ce, dz, m, n];
    document.getElementById("textarea2").value=v.join("\n");
}
