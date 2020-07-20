// // Assignment # 38-42

// // Task # 1

// function power(a, b) {
//     var ans = 1;
//     for (var i = 1; i <= b; i++) {
//         ans = ans * a;
//     }
//     return ans;
// }

// alert("3 raise to the power 4 is " + power(3, 4));


// // Task # 2

// function checkLeapYear(year) {
//     if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
//         return "Leap Year";
//     }
//     else {
//         return "not a Leap Year";
//     }
// }

// var year = prompt("Enter the year", "Year hear");
// alert(year + " is " + checkLeapYear(year));


// // Task # 3

// function calcS(a, b, c) {
//     var sum = a + b + c;
//     return sum / 2;

// }
// function calcArea(a, b, c) {
//     var S = calcS(a, b, c);
//     var area = S * (S - a) * (S - b) * (S - c);
//     return area;
// }

// var a = +prompt("Enter value of side a");
// var b = +prompt("Enter value of side b");
// var c = +prompt("Enter value of side c");
// alert("Area of triangle is " + calcArea(a, b, c));


// // Task # 4

// function calcPercentage(m1, m2, m3) {
//     return ((m1 + m2 + m3) * 100) / 300;
// }
// function calcAverage(m1, m2, m3) {
//     return (m1 + m2 + m3) / 3
// }
// function mainFunction(m1, m2, m3) {
//     document.write("<br> Marks of subject 1 =" + m1);
//     document.write(" <br> Marks of subject 2 = " + m2);
//     document.write(" <br> Marks of subject 3 = " + m3);
//     document.write(" <br> Total Marks = " + (m1 + m2 + m3));
//     document.write("<br> Average Marks = " + calcAverage(m1, m2, m3));
//     document.write(" <br> Percentage = " + calcPercentage(m1, m2, m3) + "%");
// }
// var sub1 = +prompt("Enter marks of Subject 1");
// var sub2 = +prompt("Enter marks of Subject 2");
// var sub3 = +prompt("Enter marks of Subject 3");
// mainFunction(sub1, sub2, sub3);


// // Task # 5

// function customIndexOf(word, char) {
//     var index;
//     for (var i = 0; i < word.length; i++) {
//         if (word[i] == char) {
//             index = i;
//             break
//         }
//         else {
//             index = -1
//         }
//     }
//     return index;
// }
// var word = "Pakistani";
// var index = customIndexOf(word, "n");
// document.write("String: " + word);
// document.write("<br>Index of 'n': " + index);


// // Task # 6

// function removeVowels(sen) {
//     for (var i = 0; i < sen.length; i++) {
//         if (sen[i] === 'A' || sen[i] === 'E' || sen[i] === 'e' || sen[i] == 'a' || sen[i] === 'I' || sen[i] === 'i' || sen[i] === 'O' || sen[i] === 'o' || sen[i] === 'U' || sen[i] === 'u') {
//             sen = sen.slice(0, i) + sen.slice(i + 1)
//         }
//     }
//     alert("Now Sentence is " + sen);
// }
// removeVowels(prompt("Enter any sentence"));


// // Task # 7

// function countSuccessiveVowels(sen) {
//     var st = "", cnt = 0;
//     for (var i = 0; i < sen.length; i++) {
//         (sen[i] + sen[i + 1]).toLowerCase();
//         switch (sen[i] + sen[i + 1]) {
//             case 'ae':
//             case 'ai':
//             case 'ao':
//             case 'au':
//             case 'aa':

//             case 'ea':
//             case 'ei':
//             case 'eo':
//             case 'ee':
//             case 'eu':

//             case 'ia':
//             case 'ie':
//             case 'io':
//             case 'iu':
//             case 'ii':
//             case 'oa':
//             case 'oe':
//             case 'oi':
//             case 'ou':
//             case 'oo':

//             case 'ua':
//             case 'ui':
//             case 'uo':
//             case 'uu':
//             case 'ue':
//                 st = st + sen[i] + sen[i + 1] + ",";
//                 cnt++;
//                 break;
//             default:
//                 continue;
//         }
//     }
//     document.write("<br>Sentence = " + sen + "<br>Occurrences are = " + st + "<br>Total number = " + cnt);
// }
// countSuccessiveVowels(" Pleases read this application and give me gratuity ");


// // Task # 8

// function feet(dis) {
//     document.write("<br>Distance in feets = " + (dis * 1000 * 3.2) + "ft");
// }
// function meter(dis) {
//     document.write("<br>Distance in metres = " + (dis * 1000) + "m");
// }
// function cm(dis) {
//     document.write("<br>Distance in centimeters = " + (dis * 1000 * 100) + " cm");
// }
// function inches(dis) {
//     document.write("<br>Distance in inches = " + (dis * 1000 * 39.37) + " inches");
// }
// var distance = +prompt("Enter distance in km","Distance in km");
// feet(distance);
// meter(distance);
// cm(distance);
// inches(distance);


// // Task # 9

// function calcOvertimePay(tHours) {
//     if (tHours > 40) {
//         var overTime = tHours - 40;
//         var overTimePay = overTime * 12;
//         document.write("<br> Overtime pay is " + overTimePay + " RS");
//     }
//     else {
//         document.write("<br> No Overtime pay");
//     }
// }
// var totalHours = +prompt("Enter total worked hours");
// calcOvertimePay(totalHours);


// // Task # 10

// var cash = +prompt("Enter amount to be withdrawn");
// var hundred = 0, fifty = 0, ten = 0;
// if (cash < 10) {
//     alert("Cash is less than 10");
// }
// else {
//     for (var i = 0; cash >= 10; i++) {
//         if (cash >= 100) {
//             hundred++;
//             cash = cash - 100;
//         }
//         else if (cash >= 50) {
//             fifty++;
//             cash = cash - 50;
//         }
//         else if (cash >= 10) {
//             ten++;
//             cash = cash - 10;
//         }
//     }
// }
// document.write("<br>You will have " + hundred + " Hundred notes " + fifty + " fifty notes and " + ten + " ten notes");



// // Assignment # 43-48


// // Task # 1

// function welcome(){
//     alert("Welcome!");
// }


// // Task # 2

// function phone() {
//     alert("Thanks for purchasing phone from us!");
// }


// // Task # 3

// function std_delete(std) {
//     var row = std.parentNode.parentNode.rowIndex;
//     document.getElementById("table").deleteRow(row);
// }



// // Task # 4

// In index.html File


// // Task # 5

// var count = 0;
// function counter_increase() {
//     count++;
//     document.getElementById('counter').innerHTML = count;
// }
// function counter_decrease() {
//     count--;
//     document.getElementById('counter').innerHTML = count;
// }



// // Assignment # 49-52

// // Task # 1

// function submit() {
//     var fname = document.getElementById('fname').value;
//     var lname = document.getElementById('lname').value;
//     var email = document.getElementById('email').value;
//     document.write("Full Name: " + fname + " " + lname);
//     document.write("<br>Email: " + email);
// }


// // Task # 2

// function readMore() {
//     var text ="<h1>Details</h1>"
//     +"<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro similique voluptate tempora rem maxime,"
//     +"    provident commodi asperiores mollitia, impedit eligendi exercitationem aut quaerat dolorem molestias"
//     +"    excepturi! Consequuntur culpa odit sint. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro similique voluptate tempora rem maxime, provident commodi asperiores mollitia, impedit eligendi exercitationem aut quaerat dolorem molestias excepturi! Consequuntur culpa odit sint.</p>";
//     var item = document.getElementById('item');
//     item.innerHTML = text;
// }


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
// function del(cell) {
//     var row = cell.parentNode.parentNode;
//     row.parentNode.removeChild(row);

// }
// function edit(cell) {
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
//     modal.style.display = "block";
//     document.getElementById("modal-img").src = path.src;
//     console.log(path);
// }
// function onClosedImagModal() {
//     var modal = document.getElementById('modal');
//     modal.classList.remove('modal-open');
//     modal.classList.add('modal-close');
//     setTimeout(() => { modal.style.display = "none"; }, 550)
// }


// // Task # 2

// para.style.fontSize = "15px";
// function zoomin() {
//     var para = document.getElementById("para");
//     para.style.fontSize = (parseFloat(para.style.fontSize) + 10) + "px";
// }

// function zoomout() {
//     var para = document.getElementById("para");
//     para.style.fontSize = (parseFloat(para.style.fontSize) - 10) + "px";
// }



// // Assignment # 58-67


// // Task # 1

// // i
// main = document.getElementById('main-content');

// // ii
// var node = document.getElementById('main-content').childNodes;
// console.log(node);

// // iii
// var render = document.getElementsByClassName('render');
// for (var i = 0; i < render.length; i++) {
//     console.log(render[i].innerHTML);
// }

// // iv
// document.getElementById('first-name').value = "Jones";

// // v
// document.getElementById('last-name').value = 'Mark';
// document.getElementById('email').value = 'jmk@gmail.com';


// // Task # 2

// // i
// document.write(document.getElementById('form-content').nodeType);

// ii
// document.write(document.getElementById('last-name').nodeType);
// var cNodes = document.getElementById('last-name').childNodes;
// for(var i =0; i<cNodes.length;i++){
//     document.write(cNodes[i].nodeType);
// }

// // iii
// var cn = document.getElementById('last-name');
// cn.childNodes= 'p';

// // iv 
// document.write(document.getElementById('main-content').firstChild);
// document.write(document.getElementById('main-content').lastChild);

// // v
// document.write(document.getElementById('last-name').nextSibling);
// document.write(document.getElementById('last-name').previousSibling);

// // vi
// document.write(document.getElementById('email').parentNode);
// document.write(document.getElementById('email').nodeType);
