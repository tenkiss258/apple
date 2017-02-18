// ￥大导航
var search=$(".search");
var as=$(".yincang");
var close=$(".delete");
var searchBox=$(".search-box");
// var lis=$(".search-box .search-bottom li");
// lis.each(function (i, o) {
//     $(o).css({
//         transitionDelay:i*1+"s"
//
//     })
// });
search.click(function () {
    as.addClass("scale");
    close.show(1000);
    searchBox.show(1000);
    // lis.addClass("huiqu");
});
close.click(function () {
    as.removeClass("scale");
    close.hide(0);
    searchBox.hide(0);
});
// ￥小导航
var xbtn=$(".small-btn");
var ul2=$(".ul2");
var wh=$(window).height();
var ul1=$(".ul1");
var gwdd=$(".gwdd");
var flag=true;
xbtn.click(function(){
    if(flag){
        ul2.css("height",wh-48+"px");
        ul1.css("background","rgba(0,0,0,1)");
        gwdd.css({
            transform:"translateX("+50+"px)"
        });
    }else{
        ul2.css("height",0);
        gwdd.css("transform","translateX("+0+")");
        ul1.css("background","rgba(0,0,0,.8)");
    }
    flag=!flag;

});
// ￥轮播
var box=$(".banner-tubox");
var bannertu=$(".banner-tu");
var bannerleft=$(".banner-left");
var bannerright=$(".banner-right");
var bannerbtn=$(".banner-btn a");
var dianji=$(".banner-btn");
var t=setInterval(move,2000);
bannerbtn.eq(0).css("background","#808080");
var aa=0;
var next=0;
var z=10;
function move(){
    next++;
    if (next==bannertu.length) {
        next=0;
    };
    bannerbtn.eq(aa).css("background","#fff").end().eq(next).css("background","#000");
    bannertu.eq(next).css({left:800,zIndex:z++}).animate({left:0},500).end().eq(aa).animate({left:-800},500);
    aa=next;
}
box.hover(function(){clearInterval(t);},function(){t=setInterval(move,2000);});
dianji.click(function(){
    next=$(this).index();
    if (next>aa) {
        var l=800;
    }else if(next<aa){
        var l=-800;
    };
    bannerbtn.eq(aa).css("background","#fff").end().eq(next).css("background","#000");
    bannertu.eq(next).css({left:l,zIndex:z++}).animate({left:0},500).end().eq(aa).animate({left:-l},500);
    aa=next;
});
bannerleft.click(function(){
    next++;
    if (next==bannertu.length) {
        next=0;
    };
    bannerbtn.eq(aa).css("background","#fff").end().eq(next).css("background","#000");
    bannertu.eq(next).css({left:800,zIndex:z++}).animate({left:0},500).end().eq(aa).animate({left:-800},500);
    aa=next;

});
bannerright.click(function(){
    next--;
    if (next==-1) {
        next=bannertu.length-1;
    };
    bannerbtn.eq(aa).css("background","#fff").end().eq(next).css("background","#000");
    bannertu.eq(next).css({left:800,zIndex:z++}).animate({left:0},500).end().eq(aa).animate({left:-800},500);
    aa=next;

});








// ￥底部按钮
// var footbtn=$(".foot-box .footer h3");
// var foottu=$(".foot-box .footer ul");
// footbtn.click(function(){
//     foottu.css({
//         height:0,
//         overflow:"hidden"
//     })
// })
var footbox=document.getElementsByClassName("foot-box")[0];
var footbtn=footbox.getElementsByTagName("h3");
var foottu=footbox.getElementsByTagName("ul");
function aaa(i){
    var laa=true;
    footbtn[i].onclick=function(){
        if(laa){
            foottu[i].style.height="auto";
            foottu[i].style.overflow="";
        }else{
            foottu[i].style.height=0;
            foottu[i].style.overflow="hidden";
        }
        laa=!laa;
    }
}
for( i = 0; i < foottu.length; i++){
    aaa(i);
}










