function searchCourses() {

let input = document.getElementById("searchInput").value.toLowerCase();
let courses = document.getElementsByClassName("course-card");

for (let i = 0; i < courses.length; i++) {

let title = courses[i].getElementsByTagName("h3")[0];
let text = title.textContent.toLowerCase();

if (text.includes(input)) {
courses[i].style.display = "";
} else {
courses[i].style.display = "none";
}

}

}

let buttons = document.querySelectorAll(".enroll-btn");

buttons.forEach(function(button){

button.addEventListener("click", function(){

let price = this.getAttribute("data-price");

if(price === "free"){
alert("You have successfully enrolled in this free course!");
this.innerText = "Enrolled ✓";
this.style.backgroundColor = "green";

}else{

let confirmEnroll = confirm("This course costs ₹" + price + ". Do you want to enroll?");

if(confirmEnroll){
alert("Payment successful! You are now enrolled.");
this.innerText = "Enrolled ✓";
this.style.backgroundColor = "green";
}

}

});

});
