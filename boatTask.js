//create and array
var boatTimes=["10","10.5","11","11.5","12","12.5","13","13.5","14","14.5","15","15.5","16","16.5","17"];
var boatOne=["","","","","","","","","","","","","","",""];
const halfHourCost=12;
const hourCost=20;



function pushData(){
    //get values from the input boxes
    var bNumber=document.getElementById('boatNumber').value;
    var bOut=document.getElementById('boatOut').value;
    var bIn=document.getElementById('boatIn').value;

    //get amount of time required
    var timeOut = boatTimes.indexOf(bIn) - boatTimes.indexOf(bOut);

    // append data to the array
    //boatOne.push(inputText);
    //var pval="";
    //for (i = 0; i <myArr.length; i++){
        //pval=pval + myArr[i] + "<br/>";
    //}

    //display array data
    document.getElementById('pText').innerHTML = timeOut;
    console.log(timeOut,bOut,bIn);
}

