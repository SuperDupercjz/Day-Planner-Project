let myArr = localStorage.getItem("myArr");
myArr = JSON.parse(myArr);
if (myArr === null){
 myArr = ["", "", "", "", "", "", "", "", ""];

}
for(let i=0; i < 9; i++){
  console.log(i)
document.querySelectorAll("input")[i].value = myArr[i];
}
let toDayEl = $("#currentDay");
toDayEl.text(moment().format("LLLL"));
// let currentTime = 11;
let currentTime = moment().hour();

let hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
for (let i = 0; i < hours.length; i++) {
  let blocktime = $("#" + hours[i]);
  // console.log(hours [i]);

  if (currentTime == hours[i]) {
    console.log(i);
    $("#" + hours[i]).addClass("pinkbackground");
  } else if (currentTime > hours[i]) {
    $("#" + hours[i]).addClass("redbackground");
  } else if (currentTime < hours[i]) {
    $("#" + hours[i]).addClass("blackbackground");
  }
}
$("button").on("click", function (event) {
  event.preventDefault();
  let num = $(this).val();
  console.log($(this).val())
 let text = document.querySelectorAll("input")[num].value;
 myArr[num] = text;
let json = JSON.stringify(myArr);
localStorage.setItem("myArr", json);
});

// if
//  let json = JSON.stringify();
//          localStorage.setItem("", json);})
// moment.now
