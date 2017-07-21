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

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    
    var pos =0 , neg =0, zero =0
    
    
    for(var a = 0 ; a<n ; a++){
        if(arr[a]>0){
            pos++
        }else if(arr[a]<0){
            neg++
        }else{
            zero++
        }
    }

    console.log((pos/n).toFixed(6))
    console.log((neg/n).toFixed(6))
    console.log((zero/n).toFixed(6))
}
