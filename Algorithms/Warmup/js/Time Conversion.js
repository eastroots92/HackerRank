process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function timeConversion(s) {
    // Complete this function
    var time;
    if(s.substr(8,10) == "PM"){
            
            if(s.substr(0,2) != "12"){
                time = (parseInt(s.substr(0,2))+12).toString() +":" + s.substr(3,2) +":" +s.substr(6,2)
            }else{
                time = (parseInt(s.substr(0,2))).toString() +":" + s.substr(3,2) +":" +s.substr(6,2)
            }
    }else{
        
        if(s.substr(0,2) != "12"){
            time = s.substr(0,2) + ":" + s.substr(3,2) +":" +s.substr(6,2)
        }else{
            time=  "00:" + s.substr(3,2) +":" +s.substr(6,2)
        }
        
    }    
    
    return  time;
}

function main() {
    var s = readLine();
    var result = timeConversion(s);
    process.stdout.write("" + result + "\n");

}