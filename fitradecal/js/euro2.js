function a() {
  var b=parseFloat(document.getElementById("totalbtc").value);
  var c=parseFloat(document.getElementById("btcprice").value);
  var g=b*c;
  document.getElementById("buysum").value=g;
}

function b() {
  var y=parseFloat(document.getElementById("totalstc").value);
  var c=parseFloat(document.getElementById("stcprice").value);
  var g=y*c;
  document.getElementById("sellsum").value=g;
}

function cd() {
  var a=parseFloat(document.getElementById("buysum").value);
  var b=parseFloat(document.getElementById("sellsum").value);
  var g=b-a;
  document.getElementById("sum").value=g;
  roundN()
}

function re() {
  var b=parseFloat(document.getElementById("buy").value);
  var c=parseFloat(document.getElementById("bprice").value);
  var g=b*c;
  document.getElementById("totalbtc").value=g;

}

function rqw() {
  var a=parseFloat(document.getElementById("totalbtc").value);
  var b=parseFloat(document.getElementById("btcprice").value);
  var g=a*b;
  document.getElementById("buysum").value=g;
}


function se() {
  var b=parseFloat(document.getElementById("sell").value);
  var c=parseFloat(document.getElementById("sprice").value);
  var g=b*c;
  document.getElementById("totalstc").value=g;

}

function sqw() {
  var a=parseFloat(document.getElementById("totalstc").value);
  var b=parseFloat(document.getElementById("stcprice").value);
  var g=a*b;
  document.getElementById("sellsum").value=g;
}



function c() {
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

function roundN() {
  var num = parseFloat(document.getElementById("sum").value);
  var n = num.toFixed(2);
  document.getElementById("sum").value = n + " €";
}

document.getElementById('calculate').onclick = function() {
  var x=parseFloat(document.getElementById("buy").value);
  var z=parseFloat(document.getElementById("sell").value);
  if (x == z) {
    re(); a(); se(); b(); cd(); gf()
  } else {
    re(); rqw(); se(); sqw(); c(); d(); f(); gf()
  }

}

document.getElementById('save').onclick = function() {
  document.getElementById('textarea2').style.visibility = "visible";
  var x=parseFloat(document.getElementById("buy").value);
  var z=parseFloat(document.getElementById("sell").value);
  if (x == z) {
    var hhb="Hankintahinta btc";
    var a=parseFloat(document.getElementById("buy").value) + "*" + parseFloat(document.getElementById("bprice").value);
    var b="=" + parseFloat(document.getElementById("totalbtc").value) + " btc";
    var c=" ";
    var hhe="Hankintahinta €"
    var ba=parseFloat(document.getElementById("totalbtc").value) + "*" + parseFloat(document.getElementById("btcprice").value);
    var cd="=" + parseFloat(document.getElementById("buysum").value) + " €";
    var we=" ";
    var mhb="Myyntihinta btc";
    var d=parseFloat(document.getElementById("sell").value) + "*" + parseFloat(document.getElementById("sprice").value);
    var e="=" + parseFloat(document.getElementById("totalstc").value) + " btc";
    var f=" ";
    var mhe="Myyntihinta €";
    var bu=parseFloat(document.getElementById("totalstc").value) + "*" + parseFloat(document.getElementById("stcprice").value);
    var cy="=" + parseFloat(document.getElementById("sellsum").value) + " €";
    var df=" ";
    var nt="Arvonnousu";
    var g=parseFloat(document.getElementById("sellsum").value) + "-" + parseFloat(document.getElementById("buysum").value);
    var h="=" + parseFloat(document.getElementById("sum").value) + " €";
    var v=[hhb, a, b, c, hhe, ba, cd, we, mhb, d, e, f, mhe, bu, cy, df, nt, g, h];
    document.getElementById("textarea2").value=v.join("\n");
  } else {
    var hhb="Hankintahinta btc";
    var a=parseFloat(document.getElementById("buy").value) + "*" + parseFloat(document.getElementById("bprice").value);
    var w="=" + parseFloat(document.getElementById("totalbtc").value) + " btc";
    var r=" ";
    var hhe="Hankintahinta €"
    var qw=parseFloat(document.getElementById("totalbtc").value) + "*" + parseFloat(document.getElementById("btcprice").value);
    var ow="=" + parseFloat(document.getElementById("buysum").value) + " €";
    var yt=" ";
    var mhb="Myyntihinta btc";
    var ty=parseFloat(document.getElementById("sell").value) + "*" + parseFloat(document.getElementById("sprice").value);
    var yk="=" + parseFloat(document.getElementById("totalstc").value) + " btc";
    var ky=" ";
    var mhe="Myyntihinta €";
    var tw=parseFloat(document.getElementById("totalstc").value) + "*" + parseFloat(document.getElementById("stcprice").value);
    var wt="=" + parseFloat(document.getElementById("sellsum").value) + " €";
    var sr=" ";
    var mpo="Myyntimäärän prosenttiosuus ostomäärästä";
    var s=parseFloat(document.getElementById("sell").value) + "*100÷" + parseFloat(document.getElementById("buy").value);
    var j="=" + parseFloat(document.getElementById("p").value) + " %";
    var n=" ";
    var mmh="Myyntimäärän hankintahinta";
    var x=parseFloat(document.getElementById("buysum").value) + "÷100*" + parseFloat(document.getElementById("p").value);
    var ad="=" + parseFloat(document.getElementById("buytotal").value) + " €";
    var m=" ";
    var nt="Arvonnousu";
    var ab=parseFloat(document.getElementById("sellsum").value) + "-" + parseFloat(document.getElementById("buytotal").value);
    var ac="=" + parseFloat(document.getElementById("sum").value) + " €";
    var v=[hhb, a, w, r, hhe, qw, ow, yt, mhb, ty, yk, ky, mhe, tw, wt, sr, mpo, s, j, n, mmh, x, ad, m, nt, ab, ac];
    document.getElementById("textarea2").value=v.join("\n");
  }
}
