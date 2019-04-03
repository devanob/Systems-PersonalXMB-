alert("test");
document.getElementById("search_form_homepage")
.addEventListener("sumbit", (event)=>{
    event.preventDefault();
    console.log("Record Data Of User");
})