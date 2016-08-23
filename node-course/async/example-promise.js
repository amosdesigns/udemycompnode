/**
 * Created by Jerome on 8/19/16.
 */
/**
 *
 * @param data
 * @param callBack
 */
function doWork(data, callBack) {
    callBack('done');
}
/**
 *
 * @param data
 * @return {Promise}
 */
function doWorkPromise (data) {
 return new Promise(function (resolve, reject) {
     resolve('everything worked!!');
    // reject({error: 'something'});
 });
}

doWorkPromise('some data')
    .then(function (data) {
        console.log(data);
    }, function (error) {
        console.log(error);
});
