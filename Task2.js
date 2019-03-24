// task 2

function calculateArea(){
    let a = [].slice.call(arguments, 0); 
    console.log(a[0]);
    if (a[0] == "rectangle") {
        //console.log("123");
        let area = a[1]*a[2]
       return {area: area, figure: a[0], input: a.slice(1)}; 
    }
    if (a[0] == "circle") {
        
        let area = a[1]*a[1]* Math.PI
       return {area: area, figure: a[0], input: a.slice(1)}; 
    } else {
        return "Неизвестная фигура"
    }
}
console.log(calculateArea("rectangle", 1, 2));
console.log(calculateArea("circle", 1));