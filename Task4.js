let promises = [];

function get(url) {
        return new Promise((resolve, reject) => {
      
      let req = new XMLHttpRequest();
      req.open('GET', url);
  
      req.onload = () => {        
        if (req.status == 200) {         
          resolve(req.response);
        }
        else {          
          reject(Error(req.statusText));
        }
      };

      req.onerror = () => {
        reject(Error("Network Error"));
      };
  
      req.send();
    });
  }

 for (let i = 1; i <= 10; i++){
   let url = "https://jsonplaceholder.typicode.com/users/" + i;
   promises.push(get(url));
 };
 

Promise.all(promises).then(response => {
  let result = []
  for (let i in response) {
    result[i] = JSON.parse(response[i]);    
  };
  return result;
}).then(response => {
  console.log(response)
});
  