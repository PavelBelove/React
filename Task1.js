// task 1

function loop(times = 0, callback = null){
    
    for (let i = 0; i < times; i++ ){
        callback(i+1);
    };
};

let func = param => {console.log("callback run " +param )};

loop()
//loop(2, func);