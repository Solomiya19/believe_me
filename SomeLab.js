function fillTrustTable() {
  var binary = Number(document.getElementById("binary").value);
  var binarytwo = Number(document.getElementById("binarytwo").value);

  document.getElementById("not"). value = !!( binary == binarytwo||!(binarytwo==binary));
  document.getElementById("or").value = !!(binary || binarytwo);
  document.getElementById("and").value = !!(binary && binarytwo);
  document.getElementById("xor").value = !!( ( binary && !binarytwo ) || ( !binary && binarytwo ) );
}
function myTrustTable(){
var row = [], values = ["a", "b", "c"]

                     for (var i = (Math.pow(2, values.length) - 1) ; i >= 0 ; i--) {
                       for (var j = (values.length - 1) ; j >= 0 ; j--) {
                         row[j] = (i & Math.pow(2,j)) ? true : false
                       }
                       print(row)
                     }
}
