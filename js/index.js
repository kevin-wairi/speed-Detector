// assign all the elements to variables
const txt1 = document.getElementById("txt1");
const checkBtn = document.getElementById("checkBtn");
const txt2 = document.getElementById("txt2");

// create an event listener to the submit button and calls the speedDetector function
checkBtn.addEventListener('click',speedDetector);

// function is invoked by button
function speedDetector(val){

    // nested if statement
    if (val < 70 && val !=0) {
        return 'Okey';
    }
    else if(val > 69){
        // used math.trunc method to remove any fractional digits from the calculation
       let pts=(Math.trunc((val-70)/5));
        if (pts<12) {
            return pts +" " + 'points';
        } else if(pts>11){
            return 'License suspended';
        }
    }else if(val ==0 || val == " "){
        return 'No Input';
    } 
    // assign speed to the input value from HTML
 const speed= txt1.value;
//  assign the output from the function
txt2.innerHTML  = speedDetector(speed);
    }