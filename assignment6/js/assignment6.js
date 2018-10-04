/* 
** File index.html
** Date: 2018/04/05
** Author: Dmitrii Korolevskii
*/
// set a global httpRequest object

var httpRequest;
		
// when the page (window) has loaded, make a
// request for page 1

window.onload=function(){
	makeRequest(1);
}

function makeRequest(pageNum) {
	
    // create a variable "url" to store the request to 
	// the current pageNum
	var url = "https://reqres.in/api/users?page=";
	url += pageNum;

	// make an HTTP request object
	
	httpRequest = new XMLHttpRequest();

	// execute the "showContents" function when
	// the httprequest.onreadystatechange event is fired
	
	httpRequest.onreadystatechange = showContents;
	
	// open a asynchronous HTTP (GET) request with the specified url
	
	httpRequest.open('GET', url, true);
	
	// send the request
	
	httpRequest.send();
}

// the function that handles the server response

function showContents() {

//  check for response state
//  0      The request is not initialized
//  1      The request has been set up
//  2      The request has been sent
//  3      The request is in process
//  4      The request is complete

	if (httpRequest.readyState === 4) {
		// check the response code
		if (httpRequest.status === 200) { // The request has succeeded
		// Javascript function JSON.parse to parse JSON data
			var jsData = JSON.parse(httpRequest.responseText);
			
			// use the jsData object to populate the correct
			// table cells
			var begin = true;
			for(var i=0; i<3; i++){
				
			var temp = document.getElementById('data');
			var id = jsData.data[i].id;
			var fName = jsData.data[i].first_name;
			var lName = jsData.data[i].last_name;
			var avatar = jsData.data[i].avatar;
			var tr = document.createElement("tr");
			
			var id_ = document.createTextNode(id);
			var fName_ = document.createTextNode(fName);
			var lName_ = document.createTextNode(lName);
			var avatar_ = document.createElement("img");
			avatar_.setAttribute("src", avatar);
			
			var tdId = document.createElement("td");
			var tdLName = document.createElement("td");
			var tdFName = document.createElement("td");
			var tdAvatar = document.createElement("td");
			
			
			tdId.appendChild(id_);
			tdLName.appendChild(fName_);
			tdFName.appendChild(lName_);
			tdAvatar.appendChild(avatar_);
			
			tr.appendChild(tdId);
			tr.appendChild(tdLName);
			tr.appendChild(tdFName);
			tr.appendChild(tdAvatar);
			
			if(begin){
				temp.removeChild(temp.firstChild);
			}
			temp.appendChild(tr);
		}
			
			// remove the class "active" from all elements with the class "pgbtn"
			//
			for(var j=1; j<5; j++){
				curClassName = "pgbtn" + j;
				var part = document.getElementById(curClassName);
				part.classList.remove("active");
				curClassName = "pgbtn1";
			}

			// add the class "active" to the button corresponding to the active page, ie:
			//
			var curPage = "pgbtn" + jsData.page;
			part = document.getElementById(curPage);
			part.classList.add("active");

		} else {
			console.log('There was a problem with the request.');
		}
	}
}	