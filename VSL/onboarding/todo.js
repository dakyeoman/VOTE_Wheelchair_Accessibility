const OBSTACLE_KEY = "obstacles";
//var result = "";
//얘는 보존해야 함(로컬에 저장)
function save_clicked(clicked_id){
    //alert(clicked_id);
    window.localStorage.setItem("OBSTACLE_KEY",clicked_id);
    //const obstacles = localStorage.getItem("OBSTACLE_KEY");
    //꺄아악 document.getElementById("OBSTACLE_KEY").value
    if(localStorage.getItem("OBSTACLE_KEY")== "box1"){
        var result_text = "승강기 때문에 불편을 겪으셨군요.";
        //console.log(result_text);
        localStorage.setItem("RESULT", result_text);
    }
    
    else if(localStorage.getItem("OBSTACLE_KEY") == "box2"){
        var result_text = "경사로 때문에 불편을 겪으셨군요.";
        //console.log(result_text);
        localStorage.setItem("RESULT", result_text);
    }

    else if(localStorage.getItem("OBSTACLE_KEY") == "box3"){
        var result_text = "교통수단 때문에 불편을 겪으셨군요.";
        localStorage.setItem("RESULT", result_text);
    }

    else if(localStorage.getItem("OBSTACLE_KEY") == "box4"){
        var result_text = "투표용지 때문에 불편을 겪으셨군요.";
        localStorage.setItem("RESULT", result_text);
    }

    else if(localStorage.getItem("OBSTACLE_KEY") == "box5"){
        var result_text = "투표도구 때문에 불편을 겪으셨군요.";
        localStorage.setItem("RESULT", result_text);
    }

    else if(localStorage.getItem("OBSTACLE_KEY") == "box6"){
        var result_text = "특별히 문제는 없으셨군요!";
        localStorage.setItem("RESULT", result_text);
    }
}

console.log(localStorage.getItem("RESULT"));
const result = localStorage.getItem("RESULT");
document.getElementById("result").innerHTML=result;

//여기까지 장애물 선택 



