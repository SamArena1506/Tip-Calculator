//function that does the math for calculating tip --- *tipCalculate()*
function tipCalculate() {
    //Initialising variables for fetching data accordingly
    
    	var billAmount = document.getElementById("billAmount").value;
    	var serviceQuality = document.getElementById("serviceQuality").value;
    	var numPeople = document.getElementById("totalPeople").value;
    
    //Check the boundary condition or performing instant validation earlier
    //this will prevent the code to excute any further 
    
    	if(billAmount === "" || serviceQuality == "0" || billAmount == "0"){
        	window.alert("The Fields can't be empty or something is wrong !!");
        	location.reload();
        	return;
    	}
    
    //Figuring out the number of peoples that are dining together or sharing the bill
    
    	if(numPeople === "" || numPeople <= 1){	
        	numPeople = 1;
        	document.getElementById("each").style.display = "none";
    	}else{
        	document.getElementById("each").style.display = "block";
    	}
    	
    //Applying the logic in determining the the tipPerperson
    	var tipPerperson = (billAmount * serviceQuality) / numPeople;
    	var totalAmountperPerson = (billAmount / numPeople) + tipPerperson;
    	tipPerperson = tipPerperson.toFixed(2);
    	totalAmountperPerson = totalAmountperPerson.toFixed(2);
    
    //display the total tip each person has to pay along with their share of the bill 
    	document.getElementById("totalTip").style.display = "block";
    	document.getElementById("tip").innerHTML = tipPerperson;
    
    //display the total Amount that each person has to contribute for the bill
    	document.getElementById("totalAmountperPerson").style.display = "block";
    	document.getElementById("Amount").innerHTML = totalAmountperPerson;

}
//Segment which will trigger the function
document.getElementById("calculate").onclick = function(){	
	//function that will trigger the whole logic and operations
		tipCalculate();
}
