var locals = document.querySelectorAll(".local");    
var hovers = document.querySelector(".hover");

for(var i = 0 ; i < locals.length ; i++){
    locals[i].addEventListener("mouseover", changepic);  //이벤트 처리
    /* 
    onclick으로 하면 하나의 요소에 하나의 이벤트만 사용가능
    smallPics[i].onclick = changepic;
    */
}

function changepic(){   //사진 바꾸는 함수
    var localsAttribute = this.getAttribute("src");
    hovers.setAttribute("src", localsAttribute); 
}
