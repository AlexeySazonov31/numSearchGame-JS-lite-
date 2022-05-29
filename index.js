let field = document.querySelector("#field");

start(2);

function start(size) {
  activate(build(field, prepare(size)), size);
}

function activate(cells, size) {
  let counter = 1;

  for (let cell of cells) {
    cell.addEventListener("click", function () {
      if (this.innerHTML == counter) {
        this.classList.add("active");
        if (counter == size * size) {
          start(++size);
        }
        counter++;
      }
    });
  }
}

function build(field, arr) {
  field.innerHTML = "";
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let tr = document.createElement("tr");
    for (let k = 0; k < arr[i].length; k++) {
      let td = document.createElement("td");
      td.innerHTML = arr[i][k];
      result.push(td);
      tr.appendChild(td);
    }
    field.appendChild(tr);
  }
  return result;
}

function prepare(size) {
  let arr = [];

  arr = range(size * size);
  arr = shuffle(arr);
  arr = chunk(arr, size);

  return arr;
}

//-----------------------------------------------
function range(count) {
  let arr = [];
  for (let i = 1; i <= count; i++) {
    arr.push(i);
  }
  return arr;
}
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
function chunk(arr, n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    let subArr = arr.splice(0, n);
    result.push(subArr);
  }
  return result;
}
