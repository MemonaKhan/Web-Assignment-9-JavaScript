// // Assignment # 38-42

// // Task # 1

// function power(a,b){
//     var ans = 1;
//     for(var i = 1; i<=b; i++){
//         ans = ans*a;
//     }
//     return ans;
// }

// alert("3 raise to the power 4 is "+power(3,4));


// // Task # 2

// function checkLeapYear(year){
//     if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
//         return "Leap Year";
//     }
//     else{
//         return "not a Leap Year";
//     }
// }

// var year = prompt("Enter the year","Year hear");
// alert(year + " is "+checkLeapYear(year));


// // Task # 3

// function calcS(a, b, c){
//     var sum = a+b+c;
//     return sum/2;

// }
// function calcArea(a, b, c){
//     var S = calcS(a, b, c);
//     var area = S*(S - a)*(S - b)*(S - c);
//     return area;
// }

// var a = +prompt("Enter value of side a");
// var b = +prompt("Enter value of side b");
// var c = +prompt("Enter value of side c");
// alert("Area of triangle is "+calcArea(a,b,c));


// // Task # 4




// // Task # 5
// // Task # 6
// // Task # 7
// // Task # 8
// // Task # 9
// // Task # 10
// // Task # 11



// // Assignment # 43-48


// // Task # 1



// // Task # 2



// // Assignment # 49-52

// // Task # 1


// // Task # 2



// // Task # 3

// function add() {
//     var table = document.getElementById("data");
//     var row = table.insertRow(1);
//     var cell1 = row.insertCell(0);
//     var cell2 = row.insertCell(1);
//     var cell3 = row.insertCell(2);
//     var cell4 = row.insertCell(3);
//     var cell5 = row.insertCell(4);
//     cell1.innerHTML = document.getElementById("index").value;
//     cell2.innerHTML = document.getElementById("name").value;
//     cell3.innerHTML = document.getElementById("level").value;
//     cell4.innerHTML = "<button id='edit' type='button' onclick='edit(this)'>Edit</button>";
//     cell5.innerHTML = "<button id='del' type='button' onclick='del(this)'>Delete</button>";
// }
// function del(cell){
//     var row = cell.parentNode.parentNode;
//     row.parentNode.removeChild(row);

// }
// function edit(cell){
//     var row = cell.parentNode.parentNode;
//     document.getElementById("index").value = row.cells[0].innerHTML;
//     document.getElementById("name").value = row.cells[1].innerHTML;
//     document.getElementById("level").value = row.cells[2].innerHTML;
// }



// // Assignment # 53-57

// // Task # 1


// var images = document.getElementById("images");
// var paths = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.png", "img/5.jpg", "img/6.jpg", "img/7.png", "img/8.jpg", "img/9.jpg", "img/10.jpg", "img/11.jpg", "img/12.jpg", "img/13.jpg", "img/14.png", "img/15.jpg"];
// for (var i = 0; i < paths.length; i++) {
//     images.innerHTML += "<img class = 'format' src=" + paths[i] + " alt='imageError' onclick='getModel(this)'>";
// }
// function getModel(path) {
//     var modal = document.getElementById('modal');
//     modal.classList.add('modal-open');
//     modal.classList.remove('modal-close');
//     modal.style.display= "block";
//     document.getElementById("modal-img").src = path.src;
//     console.log(path);
// }
// function onClosedImagModal(){
//     var modal = document.getElementById('modal');
//     modal.classList.remove('modal-open');
//     modal.classList.add('modal-close');
//     setTimeout(()=>{ modal.style.display = "none"; }, 550)
// }






// // Task # 2

// para.style.fontSize = "15px";
// function zoomin(){
//     var para = document.getElementById("para");
//     para.style.fontSize = (parseFloat(para.style.fontSize)+10)+"px";
// }

// function zoomout(){
//     var para = document.getElementById("para");
//     para.style.fontSize = (parseFloat(para.style.fontSize)-10)+"px";
// }



// // Task # 12
// // Task # 13
// // Task # 14
