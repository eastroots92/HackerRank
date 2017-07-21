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

function migratoryBirds(n, ar) {
    var result = [0,0,0,0,0,0];
    var answer = [0,0];
    for( var i in ar){
        result[ar[i]]++;
    }
    
    for(var i = 1 ; i<=5 ; i ++){
        if(result[i] > answer[0]){
            answer[0] = answer[i];
            answer[1] = i;
        }
    }
    
    return answer[1]+1;
    
}
function main() {
    var n = parseInt(readLine());
    ar = readLine().split(' ');
    ar = ar.map(Number);
    var result = migratoryBirds(n, ar);
    process.stdout.write("" + result + "\n");

}
