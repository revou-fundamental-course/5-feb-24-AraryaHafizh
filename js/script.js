function fahrenheitIt(val) {
  var result = (9 / 5) * val + 32;
  document.getElementById("fahrenheitValue").value = result;
  document.getElementById("outputValue").value = `(9/5) * ${val} + 32`;
}

function celciusIt(val) {
  var result = ((val - 32) * 5) / 9;
  document.getElementById("celciusValue").value = result;
  document.getElementById("outputValue").value = `(${val} - 32) * 5/9`;
}

function convertIt() {
  var celciusTextarea = document.getElementById("celciusValue");
  var fahrenheitTextarea = document.getElementById("fahrenheitValue");

  if (!celciusTextarea.readOnly) {
    // console.log("celcius to fahrenehit");
    var value = celciusTextarea.value;
    fahrenheitIt(value);
  } else {
    // console.log("fahrenheit to celcius");
    var value = fahrenheitTextarea.value;
    celciusIt(value);
  }
}

function resetIt() {
  document.getElementById("celciusValue").value = "";
  document.getElementById("fahrenheitValue").value = "";
  document.getElementById("outputValue").value = "";
}

function reverseIt() {
  resetIt();
  var celciusTextarea = document.getElementById("celciusValue");
  var fahrenheitTextarea = document.getElementById("fahrenheitValue");

  if (fahrenheitTextarea.readOnly) {
    fahrenheitTextarea.readOnly = false;
    celciusTextarea.readOnly = true;
    celciusTextarea.placeholder = "Temp in Celcius (°C)";
    fahrenheitTextarea.placeholder = "Enter Temp in Fahrenheit (°F)";
  } else {
    celciusTextarea.readOnly = false;
    fahrenheitTextarea.readOnly = true;
    celciusTextarea.placeholder = "Enter Temp in Celcius (°C)";
    fahrenheitTextarea.placeholder = "Temp in Fahrenheit (°F)";
  }
}
