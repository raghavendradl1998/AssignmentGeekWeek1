const main = document.getElementById('main');  
const form = document.getElementById('form');  
const search = document.getElementById('search'); 

async function fetchData(){
	var table = document.getElementById("table").getElementsByTagName('tbody')[0];
	table.innerHTML = "";
	var input = document.getElementById("inp-search").value;
	var url = "http://universities.hipolabs.com/search?country="+input;
	var heading = document.getElementById("name");
	heading.innerText = input.toUpperCase();
	try{
		var res = await fetch(url);	
        console.log("res",res)
	}catch(err){
		console.log(err);
	}
	var data = await res.json();
	for(var i=0;i<data.length;i++){
		var name = data[i]["name"];
		var newRow = table.insertRow();
		var idCell = newRow.insertCell();
		var newCell = newRow.insertCell();
		var text = document.createTextNode(name);
		var id = document.createTextNode(i+1);
		idCell.appendChild(id);
		newCell.appendChild(text);



        var tr = document.createElement("tr");
        var td = document.createElement("td");
        var as = document.createElement("td");
        var alpha = document.createElement("td");
        var domains = document.createElement("td");
        var country = document.createElement("td");
        var states = document.createElement("td")

        // var td = document.createElement("td");
        td.innerText = data[i].name;
        as.innerText = data[i]["country"];
        alpha.innerText = data[i]["web_pages"];
        country.innerText = data[i]["domains"];
        domains.innerText = data[i]["alpha_two_code"];
        states.innerText = data[i]["state-province"];
        // td.innerText = data[i].country;
        // td.innerText = data[i]['state-province']; 
        // tr.appendChild(td);
        // tr.appendChild(td);
        tr.appendChild(td);
        tr.appendChild(as);
        tr.appendChild(alpha);
        tr.appendChild(domains);
        tr.appendChild(country);
        tr.appendChild(states)
        table.appendChild(tr);
        
	}
}
var btsearch = document.getElementById("search");
btsearch.addEventListener("click",fetchData);
