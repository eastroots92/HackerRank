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
    arr = readLine().split(' ');
    arr = arr.map(Number);
    
    var total = 0;
    var total_arr = [];
    for(var a = 0; a <arr.length ; a++){
        total += arr[a]
    }
    
    for(var a = 0 ; a < arr.length ; a++){
        total_arr.push(total-arr[a])
    }
    var answer = [Math.min.apply(null, total_arr) ,Math.max.apply(null, total_arr) ]
    console.log(answer[0]+" "+answer[1])

}