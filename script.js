let row = document.getElementById("row-no");
let col = document.getElementById("col-no");
let matrixContainer = document.getElementById("matrix-container");

function generate() {
  var rowVal = row.value;
  var colVal = col.value;
  if (rowVal > 0 && colVal > 0) {
    document.getElementById("alert-script").innerHTML = "";
    for (let i = 0; i < rowVal; i++) {
      matrixContainer.appendChild(
        Object.assign(document.createElement("div"), {
          className: "row",
          id: "row" + i,
        })
      );
      for (let j = 0; j < colVal; j++) {
        var rowContainer = document.getElementById("row" + i);
        rowContainer.appendChild(
          Object.assign(document.createElement("input"), {
            type: Number,
            className: "col",
            id: "col" + i + j,
          })
        );
      }
    }
  } else {
    document.getElementById("alert-script").innerHTML =
      "Can't Generate Matrix Using thses values";
  }
}

function clearMatrix() {
  while (matrixContainer.firstChild) {
    matrixContainer.removeChild(matrixContainer.firstChild);
  }
}

function calculateMatrix() {
  var rowVal = row.value;
  var colVal = col.value;
  const matrix = [];
  for (let i = 0; i < rowVal; i++) {
    const row = [];
    for (let j = 0; j < colVal; j++) {
      const valueCols = document.getElementById("col" + i + j);
      row.push(parseFloat(valueCols.value));
    }
    matrix.push(row);
  }
  console.log(matrix);
  if(matrix[0][0]===0){
    firstElementisnotZero(matrix);
    console.log("Calling First is Zero");
  }
  console.log(matrix);
  zeroElements(matrix);
}


function firstElementisnotZero(matrix) {
  let flag = 0,temparr=[];
  const rowNum = matrix.length;
  const colNum = matrix[0].length;

  for (let i = 1; i < rowNum; i++) {
    if (matrix[i][0] != 0) {
      flag = 1;
temparr=matrix[0];
matrix[0]=matrix[i];
matrix[i]=temparr;
    }
  }
  if(flag===0){
    alert("it can't solve");
  }
}

function zeroElements(matrix){
  let pivot=0,multiFact=0;
  for(i=0;i<matrix.length;i++){
  pivot=i;
  for(let j=i+1;j<matrix.length;j++){
    if(matrix[j][i]!==0){
      multiFact=matrix[j][i];
      for(let k=i;k<matrix[0].length;k++){
        matrix[j][k]=(matrix[pivot][pivot]*matrix[j][k])-(multiFact*matrix[pivot][k]);
        console.log(matrix);
      }
    }
  }
  }
  console.log(matrix);
}
// function zeroElements(matrix) {
//   for (let i = 0; i < matrix.length; i++) {
//     let pivot = i;
//     for (let j = i + 1; j < matrix.length; j++) {
//       if (matrix[j][i] !== 0) {
//         let multiFact = matrix[j][i];
//         for (let k = i; k < matrix[0].length; k++) {
//           matrix[j][k] = matrix[pivot][pivot] * matrix[j][k] - multiFact * matrix[pivot][k];
//         }
//       }
//     }
//   }
//   console.log(matrix);
// }