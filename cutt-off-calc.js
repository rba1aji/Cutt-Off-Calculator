function eng(){
    let x=parseFloat(document.getElementById("maths").value);
    let y=parseFloat(document.getElementById("chemistry").value);
    let z=parseFloat(document.getElementById("physics").value);
    let result= (x + y/2 + z/2);  
    document.getElementById("result").value=result;
    if(!x || !y || !z){
      alert ("Pls fill all the marks");
      return;
      }
    else if(x>100 || y>100 || z>100){
      alert("Marks should be < 100");
      return;
      }
  }

function med1(){
    let x=parseFloat(document.getElementById("biology").value);
    let y=parseFloat(document.getElementById("chemistry").value);
    let z=parseFloat(document.getElementById("physics").value);
    const result= (x + y/2 + z/2);
    document.getElementById("result").value=result;
    if(!x || !y || !z){
      alert("Pls fill all the marks");
      return;
      }
    else if(x>100 || y>100 || z>100){
      alert("Marks should be < 100");
      return;
      }
  }
  
function med2(){
    let a=parseFloat(document.getElementById("botany").value);
    let b=parseFloat(document.getElementById("zoolagy").value);
    let c=parseFloat(document.getElementById("chemistry").value);
    let d=parseFloat(document.getElementById("physics").value);
    const result= (a/2 + b/2 + c/2 + d/2);
    document.getElementById("result").value=eval(result);
    if(!a || !b || !c || !d){
      alert("Pls fill all the marks");
      return;
      }
    else if(a>100 || b>100 || c>100 || d>100){
      alert("Marks should be < 100");
      return;
      }

  }

function agri(){
    let a=parseFloat(document.getElementById("biology").value);
    let b=parseFloat(document.getElementById("maths").value);
    let c=parseFloat(document.getElementById("chemistry").value);
    let d=parseFloat(document.getElementById("physics").value);
    const result= (a/2 + b/2 + c/2 + d/2);
    document.getElementById("result").value=eval(result);
    if(!a || !b || !c || !d){
      alert("Pls fill all the marks");
      return;
      }
    else if(a>100 || b>100 || c>100 || d>100){
      alert("Marks should be < 100");
      return;
      }
      
  }