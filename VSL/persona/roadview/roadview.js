var i = 1; // 사진 인덱스를 저장할 변수


//대치
$("#daechi_pre").click(function backward() { 
  if(i > 1){
    setTimeout(function(){
    i--;
    document.getElementById("daechi_img").src="./daechi/"+i+".jpg";
    if (i == 1) {
      document.getElementById("georinum").innerText = "0.0 KM";
      document.getElementById("sigannum").innerText = "00:00";
      document.getElementById("pacenum").innerText = "00:00 / Km";
      document.getElementById("shocknum").innerText = "1회";
      document.getElementById("status").style = "width: 0px";
      document.getElementById("currentwitch").style = "left: 145px; top: 370px"
      document.getElementById("moveBtn").style.display = "block";
        return 0;
        }
    else if(i == 7){
      document.getElementById("georinum").innerText = "0.1 KM";
      document.getElementById("sigannum").innerText = "01:12";
      document.getElementById("pacenum").innerText = "11:17 / Km";
      document.getElementById("shocknum").innerText = "4회";
      document.getElementById("status").style = "width: 25px";
      document.getElementById("currentwitch").style = "left: 170px; top: 355px"
      document.getElementById("moveBtn").style.display = "block";
    }
    else if(i == 14){
      document.getElementById("georinum").innerText = "0.1 KM";
      document.getElementById("sigannum").innerText = "01:48";
      document.getElementById("pacenum").innerText = "11:34 / Km";
      document.getElementById("shocknum").innerText = "7회";
      document.getElementById("status").style = "width: 50px";
      document.getElementById("currentwitch").style = "left: 200px; top: 335px"
      document.getElementById("moveBtn").style.display = "block";
    }
    else if(i == 21){
      document.getElementById("georinum").innerText = "0.2 KM";
      document.getElementById("sigannum").innerText = "02:20";
      document.getElementById("pacenum").innerText = "10:26 / Km";
      document.getElementById("shocknum").innerText = "14회";
      document.getElementById("status").style = "width: 75px";
      document.getElementById("currentwitch").style = "left: 230px; top: 310px"
      document.getElementById("moveBtn").style.display = "block";
    }
    else if(i == 35){
      document.getElementById("georinum").innerText = "0.3 KM";
      document.getElementById("sigannum").innerText = "03:24";
      document.getElementById("pacenum").innerText = "11:22 / Km";
      document.getElementById("shocknum").innerText = "18회";
      document.getElementById("status").style = "width: 100px";
      document.getElementById("currentwitch").style = "left: 250px; top: 290px"
      document.getElementById("moveBtn").style.display = "block";
    }
    else if(i == 42){
      document.getElementById("georinum").innerText = "0.3 KM";
      document.getElementById("sigannum").innerText = "04:08";
      document.getElementById("pacenum").innerText = "12:21 / Km";
      document.getElementById("shocknum").innerText = "23회";
      document.getElementById("status").style = "width: 125px";
      document.getElementById("currentwitch").style = "left: 235px; top: 270px"
      document.getElementById("moveBtn").style.display = "block";
    }
    else if(i == 51){
      document.getElementById("georinum").innerText = "0.4 KM";
      document.getElementById("sigannum").innerText = "05:19";
      document.getElementById("pacenum").innerText = "11:57 / Km";
      document.getElementById("shocknum").innerText = "26회";
      document.getElementById("status").style = "width: 150px";
      document.getElementById("currentwitch").style = "left: 215px; top: 270px"
      document.getElementById("moveBtn").style.display = "block";
    }
    else if(i == 61){
      document.getElementById("georinum").innerText = "0.5 KM";
      document.getElementById("sigannum").innerText = "06:09";
      document.getElementById("pacenum").innerText = "10:51 / Km";
      document.getElementById("shocknum").innerText = "33회";
      document.getElementById("status").style = "width: 175px";
      document.getElementById("currentwitch").style = "left: 190px; top: 290px"
      document.getElementById("moveBtn").style.display = "block";
    }
    else if(i == 67){
      document.getElementById("georinum").innerText = "0.6 KM";
      document.getElementById("sigannum").innerText = "06:56";
      document.getElementById("pacenum").innerText = "10:30 / Km";
      document.getElementById("shocknum").innerText = "43회";
      document.getElementById("status").style = "width: 200px";
      document.getElementById("currentwitch").style = "left: 170px; top: 290px"
      document.getElementById("moveBtn").style.display = "block";
    }
    else if(i == 71){
      document.getElementById("georinum").innerText = "0.7 KM";
      document.getElementById("sigannum").innerText = "08:17";
      document.getElementById("pacenum").innerText = "9:58 / Km";
      document.getElementById("shocknum").innerText = "48회";
      document.getElementById("status").style = "width: 220px";
      document.getElementById("currentwitch").style = "left: 150px; top: 245px"
      document.getElementById("moveBtn").style.display = "block";
    }
    else if(i == 77){
      document.getElementById("georinum").innerText = "0.8 KM";
      document.getElementById("sigannum").innerText = "09:15";
      document.getElementById("pacenum").innerText = "14:03 / Km";
      document.getElementById("shocknum").innerText = "52회";
      document.getElementById("status").style = "width: 240px";
      document.getElementById("currentwitch").style = "left: 155px; top: 280px"
      document.getElementById("moveBtn").style.display = "block";
    }
  else{
      document.getElementById("moveBtn").style.display = "none";

      backward(i);
  }
}, 100);
}
});

$("#daechi_next").click(function forward() {
  if(i < 77){
  setTimeout(function(){
    i++;
    document.getElementById("daechi_img").src="./daechi/"+i+".jpg";
    if (i == 1) {
      document.getElementById("georinum").innerText = "0.0 KM";
      document.getElementById("sigannum").innerText = "00:00";
      document.getElementById("pacenum").innerText = "00:00 / Km";
      document.getElementById("shocknum").innerText = "1회";
      document.getElementById("status").style = "width: 0px";
      document.getElementById("currentwitch").style = "left: 145px; top: 370px"
      document.getElementById("moveBtn").style.display = "block";
        return 0;
        }
    else if(i == 7){
      document.getElementById("georinum").innerText = "0.1 KM";
      document.getElementById("sigannum").innerText = "01:12";
      document.getElementById("pacenum").innerText = "11:17 / Km";
      document.getElementById("shocknum").innerText = "4회";
      document.getElementById("status").style = "width: 25px";
      document.getElementById("currentwitch").style = "left: 170px; top: 355px"
      document.getElementById("moveBtn").style.display = "block";
    }
    else if(i == 14){
      document.getElementById("georinum").innerText = "0.1 KM";
      document.getElementById("sigannum").innerText = "01:48";
      document.getElementById("pacenum").innerText = "11:34 / Km";
      document.getElementById("shocknum").innerText = "7회";
      document.getElementById("status").style = "width: 50px";
      document.getElementById("currentwitch").style = "left: 200px; top: 335px"
      document.getElementById("moveBtn").style.display = "block";
    }
    else if(i == 21){
      document.getElementById("georinum").innerText = "0.2 KM";
      document.getElementById("sigannum").innerText = "02:20";
      document.getElementById("pacenum").innerText = "10:26 / Km";
      document.getElementById("shocknum").innerText = "14회";
      document.getElementById("status").style = "width: 75px";
      document.getElementById("currentwitch").style = "left: 230px; top: 310px"
      document.getElementById("moveBtn").style.display = "block";
    }
    else if(i == 35){
      document.getElementById("georinum").innerText = "0.3 KM";
      document.getElementById("sigannum").innerText = "03:24";
      document.getElementById("pacenum").innerText = "11:22 / Km";
      document.getElementById("shocknum").innerText = "18회";
      document.getElementById("status").style = "width: 100px";
      document.getElementById("currentwitch").style = "left: 250px; top: 290px"
      document.getElementById("moveBtn").style.display = "block";
    }
    else if(i == 42){
      document.getElementById("georinum").innerText = "0.3 KM";
      document.getElementById("sigannum").innerText = "04:08";
      document.getElementById("pacenum").innerText = "12:21 / Km";
      document.getElementById("shocknum").innerText = "23회";
      document.getElementById("status").style = "width: 125px";
      document.getElementById("currentwitch").style = "left: 235px; top: 270px"
      document.getElementById("moveBtn").style.display = "block";
    }
    else if(i == 51){
      document.getElementById("georinum").innerText = "0.4 KM";
      document.getElementById("sigannum").innerText = "05:19";
      document.getElementById("pacenum").innerText = "11:57 / Km";
      document.getElementById("shocknum").innerText = "26회";
      document.getElementById("status").style = "width: 150px";
      document.getElementById("currentwitch").style = "left: 215px; top: 270px"
      document.getElementById("moveBtn").style.display = "block";
    }
    else if(i == 61){
      document.getElementById("georinum").innerText = "0.5 KM";
      document.getElementById("sigannum").innerText = "06:09";
      document.getElementById("pacenum").innerText = "10:51 / Km";
      document.getElementById("shocknum").innerText = "33회";
      document.getElementById("status").style = "width: 175px";
      document.getElementById("currentwitch").style = "left: 190px; top: 290px"
      document.getElementById("moveBtn").style.display = "block";
    }
    else if(i == 67){
      document.getElementById("georinum").innerText = "0.6 KM";
      document.getElementById("sigannum").innerText = "06:56";
      document.getElementById("pacenum").innerText = "10:30 / Km";
      document.getElementById("shocknum").innerText = "43회";
      document.getElementById("status").style = "width: 200px";
      document.getElementById("currentwitch").style = "left: 170px; top: 290px"
      document.getElementById("moveBtn").style.display = "block";
    }
    else if(i == 71){
      document.getElementById("georinum").innerText = "0.7 KM";
      document.getElementById("sigannum").innerText = "08:17";
      document.getElementById("pacenum").innerText = "09:58 / Km";
      document.getElementById("shocknum").innerText = "48회";
      document.getElementById("status").style = "width: 220px";
      document.getElementById("currentwitch").style = "left: 150px; top: 245px"
      document.getElementById("moveBtn").style.display = "block";
    }
    else if(i == 77){
      document.getElementById("georinum").innerText = "0.8 KM";
      document.getElementById("sigannum").innerText = "09:15";
      document.getElementById("pacenum").innerText = "14:03 / Km";
      document.getElementById("shocknum").innerText = "52회";
      document.getElementById("status").style = "width: 240px";
      document.getElementById("currentwitch").style = "left: 155px; top: 280px"
      document.getElementById("moveBtn").style.display = "block";
    }
  else{
      document.getElementById("moveBtn").style.display = "none";
      forward(i);
  }
}, 100);
  }
});





//가양
$("#gayang_pre").click(function backward() { 
  if(i > 1){
    setTimeout(function(){
      i--;
      document.getElementById("gayang_img").src="./gayang/"+i+".jpg";
      if (i == 1) {
        document.getElementById("georinum").innerText = "0.00 KM";
        document.getElementById("sigannum").innerText = "00:00";
        document.getElementById("pacenum").innerText = "00:00 / Km";
        document.getElementById("shocknum").innerText = "0회";
        document.getElementById("status").style = "width: 0px";
        document.getElementById("currentwitch").style = "left: 215px; top: 350px";
        document.getElementById("moveBtn").style.display = "block";
          }
      else if(i == 4){
        document.getElementById("georinum").innerText = "0.01 KM";
        document.getElementById("sigannum").innerText = "00:03";
        document.getElementById("pacenum").innerText = "09:18 / Km";
        document.getElementById("shocknum").innerText = "1회";
        document.getElementById("status").style = "width: 40px";
        document.getElementById("currentwitch").style = "left: 195px; top: 325px";
        document.getElementById("moveBtn").style.display = "block";
      }
      else if(i == 7){
        document.getElementById("georinum").innerText = "0.02 KM";
        document.getElementById("sigannum").innerText = "00:08";
        document.getElementById("pacenum").innerText = "09:18 / Km";
        document.getElementById("shocknum").innerText = "2회";
        document.getElementById("status").style = "width: 80px";
        document.getElementById("currentwitch").style = "left: 185px; top: 310px";
        document.getElementById("moveBtn").style.display = "block";
      }
      else if(i == 11){
        document.getElementById("georinum").innerText = "0.04 KM";
        document.getElementById("sigannum").innerText = "00:15";
        document.getElementById("pacenum").innerText = "09:18 / Km";
        document.getElementById("shocknum").innerText = "3회";
        document.getElementById("status").style = "width: 120px";
        document.getElementById("currentwitch").style = "left: 170px; top: 295px";
        document.getElementById("moveBtn").style.display = "block";
      }
      else if(i == 15){
        document.getElementById("georinum").innerText = "0.05 KM";
        document.getElementById("sigannum").innerText = "00:24";
        document.getElementById("pacenum").innerText = "09:18 / Km";
        document.getElementById("shocknum").innerText = "4회";
        document.getElementById("status").style = "width: 160px";
        document.getElementById("currentwitch").style = "left: 160px; top: 280px";
        document.getElementById("moveBtn").style.display = "block";
      }
      else if(i == 19){
        document.getElementById("georinum").innerText = "0.07 KM";
        document.getElementById("sigannum").innerText = "00:45";
        document.getElementById("pacenum").innerText = "09:18 / Km";
        document.getElementById("shocknum").innerText = "5회";
        document.getElementById("status").style = "width: 200px";
        document.getElementById("currentwitch").style = "left: 135px; top: 250px";
        document.getElementById("moveBtn").style.display = "block";
      }
      else if(i == 22){
        document.getElementById("georinum").innerText = "0.08 KM";
        document.getElementById("sigannum").innerText = "00:55";
        document.getElementById("pacenum").innerText = "09:18 / Km";
        document.getElementById("shocknum").innerText = "6회";
        document.getElementById("status").style = "width: 240px";
        document.getElementById("currentwitch").style = "left: 130px; top: 245px";
        document.getElementById("moveBtn").style.display = "block";
      }
    else{
        document.getElementById("moveBtn").style.display = "none";
        backward(i);
    }
  }, 100);
  }
});

$("#gayang_next").click(function forward() {
  if(i < 24){
  setTimeout(function(){
    i++;
    document.getElementById("gayang_img").src="./gayang/"+i+".jpg";
    if (i == 1) {
      document.getElementById("georinum").innerText = "0.00 KM";
      document.getElementById("sigannum").innerText = "00:00";
      document.getElementById("pacenum").innerText = "00:00 / Km";
      document.getElementById("shocknum").innerText = "0회";
      document.getElementById("status").style = "width: 0px";
      document.getElementById("currentwitch").style = "left: 215px; top: 350px";
      document.getElementById("moveBtn").style.display = "block";
        }
    else if(i == 4){
      document.getElementById("georinum").innerText = "0.01 KM";
      document.getElementById("sigannum").innerText = "00:03";
      document.getElementById("pacenum").innerText = "09:18 / Km";
      document.getElementById("shocknum").innerText = "1회";
      document.getElementById("status").style = "width: 40px";
      document.getElementById("currentwitch").style = "left: 195px; top: 325px";
      document.getElementById("moveBtn").style.display = "block";
    }
    else if(i == 7){
      document.getElementById("georinum").innerText = "0.02 KM";
      document.getElementById("sigannum").innerText = "00:08";
      document.getElementById("pacenum").innerText = "09:18 / Km";
      document.getElementById("shocknum").innerText = "2회";
      document.getElementById("status").style = "width: 80px";
      document.getElementById("currentwitch").style = "left: 185px; top: 310px";
      document.getElementById("moveBtn").style.display = "block";
    }
    else if(i == 11){
      document.getElementById("georinum").innerText = "0.04 KM";
      document.getElementById("sigannum").innerText = "00:15";
      document.getElementById("pacenum").innerText = "09:18 / Km";
      document.getElementById("shocknum").innerText = "3회";
      document.getElementById("status").style = "width: 120px";
      document.getElementById("currentwitch").style = "left: 170px; top: 295px";
      document.getElementById("moveBtn").style.display = "block";
    }
    else if(i == 15){
      document.getElementById("georinum").innerText = "0.05 KM";
      document.getElementById("sigannum").innerText = "00:24";
      document.getElementById("pacenum").innerText = "09:18 / Km";
      document.getElementById("shocknum").innerText = "4회";
      document.getElementById("status").style = "width: 160px";
      document.getElementById("currentwitch").style = "left: 160px; top: 280px";
      document.getElementById("moveBtn").style.display = "block";
    }
    else if(i == 19){
      document.getElementById("georinum").innerText = "0.07 KM";
      document.getElementById("sigannum").innerText = "00:45";
      document.getElementById("pacenum").innerText = "09:18 / Km";
      document.getElementById("shocknum").innerText = "5회";
      document.getElementById("status").style = "width: 200px";
      document.getElementById("currentwitch").style = "left: 135px; top: 250px";
      document.getElementById("moveBtn").style.display = "block";
    }
    else if(i == 22){
      document.getElementById("georinum").innerText = "0.08 KM";
      document.getElementById("sigannum").innerText = "00:55";
      document.getElementById("pacenum").innerText = "09:18 / Km";
      document.getElementById("shocknum").innerText = "6회";
      document.getElementById("status").style = "width: 240px";
      document.getElementById("currentwitch").style = "left: 130px; top: 245px";
      document.getElementById("moveBtn").style.display = "block";
    }
  else{
      document.getElementById("moveBtn").style.display = "none";
      forward(i);
  }
}, 100);
  }
});






//난곡
$("#nangok_pre").click(function backward() { 
  if(i > 1){
    setTimeout(function(){
      i--;
      document.getElementById("nangok_img").src="./nangok/"+i+".jpg";
      if (i == 1) {
        document.getElementById("georinum").innerText = "0.0K M";
        document.getElementById("sigannum").innerText = "00:00";
        document.getElementById("pacenum").innerText = "00:00 / Km";
        document.getElementById("status").style = "width: 0px";
        document.getElementById("currentwitch").style = "left: 113px; top: 253px";
        document.getElementById("moveBtn").style.display = "block";
          }
      else if(i == 6){
        document.getElementById("georinum").innerText = "0.0 KM";
        document.getElementById("sigannum").innerText = "00:20";
        document.getElementById("pacenum").innerText = "10:27 / Km";
        document.getElementById("status").style = "width: 40px";
        document.getElementById("currentwitch").style = "left: 117px; top: 270px";
        document.getElementById("moveBtn").style.display = "block";
      }
      else if(i == 12){
        document.getElementById("georinum").innerText = "0.0 KM";
        document.getElementById("sigannum").innerText = "00:52";
        document.getElementById("pacenum").innerText = "08:49 / Km";
        document.getElementById("status").style = "width: 80px";
        document.getElementById("currentwitch").style = "left: 130px; top: 300px";
        document.getElementById("moveBtn").style.display = "block";
      }
      else if(i == 18){
        document.getElementById("georinum").innerText = "0.1 KM";
        document.getElementById("sigannum").innerText = "01:25";
        document.getElementById("pacenum").innerText = "10:31 / Km";
        document.getElementById("status").style = "width: 130px";
        document.getElementById("currentwitch").style = "left: 165px; top: 295px";
        document.getElementById("moveBtn").style.display = "block";
      }
      else if(i == 24){
        document.getElementById("georinum").innerText = "0.2 KM";
        document.getElementById("sigannum").innerText = "02:21";
        document.getElementById("pacenum").innerText = "14:09 / Km";
        document.getElementById("status").style = "width: 180px";
        document.getElementById("currentwitch").style = "left: 220px; top: 315px";
        document.getElementById("moveBtn").style.display = "block";
      }
      else if(i == 30){
        document.getElementById("georinum").innerText = "0.3 KM";
        document.getElementById("sigannum").innerText = "03:05";
        document.getElementById("pacenum").innerText = "16:00 / Km";
        document.getElementById("status").style = "width: 210px";
        document.getElementById("currentwitch").style = "left: 260px; top: 335px";
        document.getElementById("moveBtn").style.display = "block";
      }
      else if(i == 35){
        document.getElementById("georinum").innerText = "0.3 KM";
        document.getElementById("sigannum").innerText = "03:30";
        document.getElementById("pacenum").innerText = "12:47 / Km";
        document.getElementById("status").style = "width: 240px";
        document.getElementById("currentwitch").style = "left: 260px; top: 335px";
        document.getElementById("moveBtn").style.display = "block";
      }
    else{
        document.getElementById("moveBtn").style.display = "none";
        backward(i);
    }
  }, 100);
}
});

$("#nangok_next").click(function forward() {
  if(i < 35){
  setTimeout(function(){
    i++;
    document.getElementById("nangok_img").src="./nangok/"+i+".jpg";
    if (i == 1) {
      document.getElementById("georinum").innerText = "0.0 KM";
      document.getElementById("sigannum").innerText = "00:00";
      document.getElementById("pacenum").innerText = "00:00 / Km";
      document.getElementById("status").style = "width: 0px";
      document.getElementById("currentwitch").style = "left: 113px; top: 253px";
      document.getElementById("moveBtn").style.display = "block";
        }
    else if(i == 6){
      document.getElementById("georinum").innerText = "0.0 KM";
      document.getElementById("sigannum").innerText = "00:20";
      document.getElementById("pacenum").innerText = "10:27 / Km";
      document.getElementById("status").style = "width: 40px";
      document.getElementById("currentwitch").style = "left: 117px; top: 270px";
      document.getElementById("moveBtn").style.display = "block";
    }
    else if(i == 12){
      document.getElementById("georinum").innerText = "0.0 KM";
      document.getElementById("sigannum").innerText = "00:52";
      document.getElementById("pacenum").innerText = "08:49 / Km";
      document.getElementById("status").style = "width: 80px";
      document.getElementById("currentwitch").style = "left: 130px; top: 300px";
      document.getElementById("moveBtn").style.display = "block";
    }
    else if(i == 18){
      document.getElementById("georinum").innerText = "0.1 KM";
      document.getElementById("sigannum").innerText = "01:25";
      document.getElementById("pacenum").innerText = "10:31 / Km";
      document.getElementById("status").style = "width: 130px";
      document.getElementById("currentwitch").style = "left: 165px; top: 295px";
      document.getElementById("moveBtn").style.display = "block";
    }
    else if(i == 24){
      document.getElementById("georinum").innerText = "0.2 KM";
      document.getElementById("sigannum").innerText = "02:21";
      document.getElementById("pacenum").innerText = "14:09 / Km";
      document.getElementById("status").style = "width: 180px";
      document.getElementById("currentwitch").style = "left: 220px; top: 315px";
      document.getElementById("moveBtn").style.display = "block";
    }
    else if(i == 30){
      document.getElementById("georinum").innerText = "0.3 KM";
      document.getElementById("sigannum").innerText = "03:05";
      document.getElementById("pacenum").innerText = "16:00 / Km";
      document.getElementById("status").style = "width: 210px";
      document.getElementById("currentwitch").style = "left: 260px; top: 335px";
      document.getElementById("moveBtn").style.display = "block";
    }
    else if(i == 35){
      document.getElementById("georinum").innerText = "0.3 KM";
      document.getElementById("sigannum").innerText = "03:30";
      document.getElementById("pacenum").innerText = "12:47 / Km";
      document.getElementById("status").style = "width: 240px";
      document.getElementById("currentwitch").style = "left: 260px; top: 335px";
      document.getElementById("moveBtn").style.display = "block";
    }
  else{
      document.getElementById("moveBtn").style.display = "none";
      forward(i);
  }
}, 100);
  }
});

