let myPromise =  new Promise(()=>{
    let data="this is my data getting from somehere";
    if(data){
        res(data);
    }else{
      rej("data not found")
        }
    
});
console.log(myPromise);
