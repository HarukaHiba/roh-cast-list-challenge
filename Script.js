// JavaScript Document

let roh_performance_list;


function getJSON() {
  let request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if(request.readyState == 4 && request.status == 200){ 
      //alert(request.responseText);		          // 
	  
	  roh_performance_list = request.responseText;


    } else
	    if(request.readyState == 4 && request.status == 404){ 
    		  alert("URL　Not found!");		          // 

		}
		
  };
 
  request.open("GET", "https://www.roh.org.uk/api/event-details?slug=turandot-by-andrei-serban", false); // 
  
  request.send(null);					    // 
}

/**/
function for_local_debug(){
	
}

async function getMembers() {
  const response = await fetch(
    "https://www.roh.org.uk/api/event-details?slug=turandot-by-andrei-serban"  // jsonファイルの場所
  );
  const members = await response.json();
  console.log(members);
  return members;
}



/** /
function getJsonLocalFile(){
	alert("IN");
	fetch('./event-details.json')
	  .then(response => return response.json(); )
	  //.then(data => { roh_performance_list = data;});
	  .then(data => console.log(data));
	  
	  //roh_performance_list = data;
	
	//alert(data);
}
/**/

/* ------------------------
	two-dimensional array
*/
	function MakeDim( x, y )
	{
		let i;
		let myArray = new Array( y );
		for ( i=0 ; i<y; i++ ) myArray[i] = new Array(x);
		return myArray;
	}


