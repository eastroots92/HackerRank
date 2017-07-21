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

function sockMerchant(n, ar) {
    ar.sort(); // 배열을 오름차순 정렬
    var count = [0,1]; // 0은 값 1은 그 값의 카운트
    var answer =0;
    
    for (i in ar){
        if(i ==0){
            count[0] = ar[i];
        }else if( count[0] != ar[i]){
            count[0] = ar[i];
            count[1] = 1;
        }else{
            count[1]++;
            if(count[1]%2 == 0){
                answer++;
            }
        }  
    }
    
    return answer;

}

function main() {
    var n = parseInt(readLine());
    ar = readLine().split(' ');
    ar = ar.map(Number);
    var result = sockMerchant(n, ar);
    process.stdout.write("" + result + "\n");

}