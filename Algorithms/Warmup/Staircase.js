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
    
    var print_word = "";

    for(var i =0 ; i < n ; i++){
        for(var j =0 ; j < n-1-i ; j++){
            print_word += " "
        }
        for(var j =0 ; j < i+1 ; j++){
            print_word += "#"
        }
        console.log(print_word);
        print_word =""
    }
    

}
