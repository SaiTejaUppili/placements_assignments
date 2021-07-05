function myFunction2() {
    var x = document.createElement("LINK");
    x.setAttribute("rel", "stylesheet");
    x.setAttribute("type", "text/css");
    x.setAttribute("href", "/css/style.css");
    document.head.appendChild(x);
}
myFunction2()

document.write(`
    <div id="heading">
    <p id="back"> &#8592</p>
    <img src="/imagess/Z.png" style="width:50px; height:50px; align:left;">
    <p style="font-size:23px; transform: translate(125px,-45px);"> Zene Perry </p> 
    <p style="font-size:13px; transform: translate(125px,-45px);"> +91 9876543210</p> 
    </div>
  `)