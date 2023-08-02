
const operators = [
    { userID: "operator1", password: "password1" },{ userID: "operator2", password: "password2" },
    { userID: "operator3", password: "password3" },{ userID: "operator4", password: "password4" },
    { userID: "operator5", password: "password5" },
   
  ];
  function login() {
    const userID = document.getElementById("userid").value;
    const password = document.getElementById("password").value;
    // Check credentials
    const operator = operators.find(op => op.userID === userID && op.password === password);
  
    if (operator) {
        document.getElementById("loginScreen").style.display = "none";
        document.getElementById("dataEntryScreen").style.display = "block";
    } else {
        alert("Invalid credentials! Please try again.");
    }
  }


product_id = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30'];
product_name=['Gillette','Dove','Pantene','Nivea','Chanel','Lauder','Garnier','Olay','Lancome','Avon','Johnsons','Clarins','Natura','Maybelline','Rexona','Gillette','Dove','Pantene','Nivea','Chanel','Lauder','Garnier','Olay','Lancome','Avon','Johnsons','Clarins','Natura','Maybelline','Rexona'];
product_price=[24,38,40,64,52,61,37,88,19,101,99,45,53,37,44,32,51,65,89,33,43,54,66,47,39,72,88,112,75,31];
var tot=0;
function check(){
for(var i=0;i<5;i++){
    var id=document.getElementsByClassName("pro_id")[i].value;
       var quan=Number(document.getElementsByClassName("quantity")[i].value);
    if(id!=0 && quan!=0){
        document.getElementsByClassName("name")[i].innerHTML = product_name[id-1];
        document.getElementsByClassName("price")[i].innerHTML = product_price[id-1];
        document.getElementsByClassName("total")[i].innerHTML = quan * product_price[id-1]+".00";
    }
}
}
function calculatebill(){
    tot=0;
    for(var i=0;i<5;i++){
        var id=Number(document.getElementsByClassName("pro_id")[i].value);
        var quan=Number(document.getElementsByClassName("quantity")[i].value);
        if(id!=0 && quan!=0){
            tot+=quan * product_price[id-1];
        document.getElementById("total").innerHTML = "Grand Total:"+tot+".00";
        }
    }
}

var billnumber=Math.floor(Math.random()*10000000);
var date = new Date();

function billGenerate(){ 
order_pid=[];
order_quantity=[];
    newWin = window.open("billing.html","","top=100,left=300,height=600,width=800,align=center");
newWin.focus();
tot=0
    for(var i=0;i<5;i++){
        var id=Number(document.getElementsByClassName("pro_id")[i].value);
           var quan=Number(document.getElementsByClassName("quantity")[i].value);
        if(id>0 && quan>0){
                tot+=quan * product_price[id-1];
            document.getElementById("total").innerHTML = "Grand Total:"+tot+".00";
            order_pid.push(id);
            order_quantity.push(quan);             
        }
    }
    console.log(order_pid);
    console.log(order_pid.length)

    newWin.document.write(`<p>${date}</p><center><h2>Bill Details</h2><br><br><h3><p><b><i>Bill Number</i></b></h3><u>${billnumber}</u></p>
    <table><tr><th>Product Code</th><th>Product Name</th><th>Unit Price</th><th>Quantity</th><th>Product Total</th></tr>`);

    for(var i=0;i<order_pid.length;i++){
        newWin.document.write(`
        <tr>
        <center><td id="tab">${order_pid[i]}</td></center>
        <center><td id="tab">${product_name[order_pid[i]-1]}</td></center>
        <center><td>${product_price[order_pid[i]-1]}</td></center>
        <center><td>${order_quantity[i]}</td></center>
        <center><td>${product_price[order_pid[i]-1] * order_quantity[i]}</td></center>
        </tr>
        `);
    }

    newWin.document.write(`</table><center>`);
    newWin.document.write(`<br><center><h3>Total Bill:${tot}.00</h3></center>`);
    newWin.document.write(` <b>SGST: </b>${tot*0.15} `);
    newWin.document.write(` <b>CGST:</b> ${20} `);
    newWin.document.write(` <p><h1>Net Total: ${tot+tot*0.15+20}</h1></p>`);
    var net=tot+tot*0.15+20;
    newWin.document.write(`<p style="font-size:20px;"> <b>${numbertowords(net) } Rupees Only</b></p>`);

 

}
function numbertowords(number){

    const ones=['','One','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Eleven','Twelve','Thirteen','Fourteen','Fifteen','Sixteen','Seventeen','Eighteen','Nineteen'];

    const tens=['','','Twenty','Thirty','Fourty','Fifty','Sixty','Seventy','Eighty','Ninety'];

    if(number==0) return 'zero';

    function convert(num){

        if(num<20) return ones[num];

        if(num<100) return tens[Math.floor(num/10)]+" "+ones[num%10];

        if(num<1000) return ones[Math.floor(num/100)]+' Hundred and '+convert(num%100);

        if(num<1000000) return convert(Math.floor(num/1000))+' Thousand '+convert(num%1000);

 

    }

    return convert(number).trim();

}
