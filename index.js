const ladder = {21:3,15:34,51:33,65:36,58:80,72:94,98:79}
async function play() {
    // console.log("Hello");
    var position = 1;
    for (i = 1; i <= 100; i++) {

        if (document.getElementById("b" + i).style.backgroundColor == "red") {
            position = i;
        }
    }

    console.log("Position : ", position);
    let steps = Math.ceil(Math.random() * 6);

//     document.get
    if (position + steps == 100) {
        console.log("Steps :", steps);
        for (i = position + 1; i <= steps + position; i++) {
            setTimeout(move(i), 1000)
        }

    }
    else if (position + steps > 100) {
        document.getElementById("result1").innerText = "Retry";
    }
    else {
        console.log("Steps :", steps);
        let i;
        for (i = position + 1; i <= steps + position; i++) {
            // setInterval(move(i),1000);
            await sleep(1000)
            move(i);
        }
        await sleep(1000)
        console.log(i-1);
        laddercheck(i-1);
    }

}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }
function laddercheck(step){
    for (const key in ladder) {
        if(step == key){
            document.getElementById("b"+step).style.backgroundColor = "white";
            step = ladder[key];
            document.getElementById("b"+step).style.backgroundColor = "red";
        }
    }
}
function move(i) {
    document.getElementById("b" + (i - 1)).style.backgroundColor = "white";
    document.getElementById("b" + i).style.backgroundColor = "red";
}
