/**
 * Created by Jerome on 8/17/16.
 */
function doWork() {
    throw  new Error("Unable to do work!");

}

try {
    doWork();
} catch (e) {
    console.log(e.message);
} finally {
    console.log('Finnally block excuted!!');
}
console.log('try catch ended.');
