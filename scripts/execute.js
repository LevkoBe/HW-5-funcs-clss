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
let input = document.getElementById("jsCode");
let suggestions = document.getElementById("suggestions");

input.addEventListener("focus", () => {
  suggestions.style.display = "block";
});
input.addEventListener("blur", () => {
  setTimeout(() => {
    suggestions.style.display = "none";
  }, 200);
});

suggestions.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    input.value = e.target.textContent;
    suggestions.style.display = "none";
  }
});
