// function getTempCallback(location,callback){
//     callback(undefined,78);
//     callback('city not found')
// }

// getTempCallback('Lopburi',function(err,temp){
//     if(err){
//         console.log('error',err);
//     }else{
//         console.log('success',temp);
//     }
// })

// function getTempPromise (location){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve(80);
//             reject('City not found');
//         },1000)
//     })
// }

// getTempPromise('Lopburi').then(function(temp){
//     console.log('promise success',temp);
// },function(err){
//     console.log('promise error',err);
// })

//Challenge Area
function addPromise (a,b){
return new Promise(function(resolve,reject){
        if(typeof a ==='number' & typeof b ==='number'){
            resolve(a+b);
        }else{
            reject('wrong need to be number')
        }
    })
}

addPromise(2,6).then(function(total){
    console.log('success',total)
},function(err){
    console.log('error',err)
})

addPromise('pao',6).then(function(sum){
    console.log('notshow',sum)
},function(err){
    console.log('error',err)
})