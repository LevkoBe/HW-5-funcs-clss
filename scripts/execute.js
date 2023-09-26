function executeCode() {
  try {
    const jsCode = document.getElementById("jsCode").value;
    const result = eval(jsCode);
    document.getElementById("output").textContent = String(result);
  } catch (error) {
    document.getElementById("output").textContent = "Error: " + error.message;
  }
}

document.getElementById("executeButton").addEventListener("click", executeCode);
