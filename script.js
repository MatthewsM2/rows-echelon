let row = document.getElementById('row-no');
let col  = document.getElementById('col-no');
let matrixContainer =document.getElementById('matrix-container');

function generate() {
   var rowVal=row.value;
   var colVal=col.value;
   if(rowVal>0 && colVal>0){
    document.getElementById('alert-script').innerHTML=""
    for(let i=0; i<rowVal; i++ ){
        matrixContainer.appendChild(Object.assign(document.createElement("div"), { className: "row", id: "row" + i }));
        for(let j=0; j<colVal; j++){
            var rowContainer=document.getElementById("row"+i);
            rowContainer.appendChild(Object.assign(document.createElement("input"),{type:Text,className:"col"}));
        }
    }
   }else{
    document.getElementById('alert-script').innerHTML="Can't Generate Matrix Using thses values"
   }
}

function clearMatrix() {
    while(matrixContainer.firstChild){
        matrixContainer.removeChild(matrixContainer.firstChild);
    }
}