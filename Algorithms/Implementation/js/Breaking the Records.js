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

function getRecord(s){
    var score = [s[0],s[0]];
    var count = [0,0];
    for(var i =0; i <s.length ; i++ ){
        if(s[i]>score[0]){
            score[0] = s[i]
            count[0]++;
        }else if (s[i] <score[1]){
            score[1] = s[i]
            count[1]++;
        }
    }
    
    return count;
}

function main() {
    var n = parseInt(readLine());
    s = readLine().split(' ');
    s = s.map(Number);
    var result = getRecord(s);
    console.log(result.join(" "));

}
