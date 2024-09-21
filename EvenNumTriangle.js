// Enter No.of rows:4
// 2 
// 4 10 
// 6 12 16 
// 8 14 18 20 

let rows=+prompt("Enter No.of rows:");
// let rows=4;
for(i=1;i<=rows;i++){
    let res="";
    let num=i*2;
    let dec=rows;
    for(j=1;j<=i;j++){
        res=res+num+" ";
        dec=dec-2;
        num=num+rows+dec;

    }
    console.log(res);
}