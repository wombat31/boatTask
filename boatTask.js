//create and array
var boatTimes=["10","10.5","11","11.5","12","12.5","13","13.5","14","14.5","15","15.5","16","16.5","17"];
var boatOne=[00,00,00,00,00,00,00,00,00,00,00,00,00,00,00];
const halfHourCost=12;
const hourCost=20;
var addHalfHour = false;
var timeOut=0;
var timesAvailable=true;



function pushData(){
    //get values from the input boxes
    var bNumber=document.getElementById('boatNumber').value;
    var bOut=document.getElementById('boatOut').value;
    var bIn=document.getElementById('boatIn').value;

    //get amount of time required
    var boatOutIndex = boatTimes.indexOf(bOut);
    var boatInIndex = boatTimes.indexOf(bIn);
    var timeOut = boatInIndex - boatOutIndex;
    //check whether half hour is required
    if (timeOut == 1 || (timeOut%2) != 0){
        addHalfHour=true;
    };
    //check whether boat is available
    /****CODE  REQUIRED HERE****/

    //change array values
    if (boatOutIndex = 1 && addHalfHour){
        boatOne[0] = halfHourCost;//this needs looking at......if timeout ==1 and 
        document.getElementById('pText').innerHTML = "SHould add one lot of half hour hire!";
    };/*
    }else{
    for(i=boatOutIndex;i<(boatOutIndex+timeOut);i++){
        boatOne[i] = (hourCost/2);
    };
    if (addHalfHour){
        boatOne[(boatOutIndex+timeOut)] = halfHourCost;
        }
    };*/
    //update the html table to reflect arrays
    //This seems awfully long!!!
    document.getElementById('11').innerHTML = boatOne[0];
    addHalfHour=false;
}



