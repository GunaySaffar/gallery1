function MyFunct(count,mainWidth,itemWidth,itemHeight,Float ) {
var gallery=document.createElement("div");
gallery.setAttribute("class","gallery");
gallery.style.width=mainWidth+"px";
document.body.appendChild(gallery);

for (var i = 0; i <=count; i++){
	a=Math.floor((Math.random()*200);
	b=Math.floor((Math.random()*200);
	c=Math.floor((Math.random()*200);
	var item=document.createElement("div");
	item.setAttribute("class","item");
	item.style.backgroundColor = rgb("+a+","+b+","+c+");
	item.style.width=itemWidth +"px";
	item.style.height=itemHeight+ "px";
	item.style.float=Float;
	gallery.appendChild(item);

}
}
MyFunct(10,1000,100,"left")


