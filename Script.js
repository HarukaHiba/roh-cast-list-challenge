// JavaScript Document

let roh_performance_list;


function getJSON() {
  let request = new XMLHttpRequest();		  // XMLHttpRequest object
  request.onreadystatechange = function() {		  // XMLHttpRequest event handler if the object changed
    if(request.readyState == 4 && request.status == 200){ // server response ok
      alert(request.responseText);		          // show JSON data
	  
	  roh_performance_list = request.responseText;

	








    }
  };

  request.open("GET", "https://www.roh.org.uk/api/event-details?slug=turandot-by-andrei-serban", false); // HTTP method and server URL

  
  request.send(null);					    // send request to server
}

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

	let p_creatives = MakeDim(5,p_creatives_count);		// Creative member information
	let p_cast = MakeDim(5,p_cast_count);				// Cast member information 

