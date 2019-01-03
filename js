function appendChildren(decorateDivFunction) {
  var allDivs = document.getElementsByTagName("a");

  for (var i = 0; i < allDivs.length; i++) {
    var newDiv = document.createElement("b");
    decorateDivFunction(newdiv);
    allDivs[i].appendChild(newdiv);
  }
}

// Example case. 
document.body.innerHTML = `
<div id="a">
  <div id="b">
  </div>
</div>`;

//appendChildren(function(div) {});
console.log(document.body.innerHTML);
