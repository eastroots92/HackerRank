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

function solve(year){
    // Complete this function
    var date =243
    
    if(year >1918){
        if(year%4 == 0 && year%100 !=0 || year%400 == 0 ){
            date +=1;
        }
    }else if(year == 1918){
        date -=13;
    }
    else{
        if(year%4 == 0){
            date +=1;
        }
    }
    date = 256-date
    
    return date+".09."+year
}

function main() {
    var year = parseInt(readLine());
    var result = solve(year);
    process.stdout.write(""+result+"\n");

}