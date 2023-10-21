const inputText = document.getElementById("inputText");
const charCount = document.getElementById("charCount");

inputText.addEventListener("input", function () {
  const text = inputText.value;
  const count = text.length;
  charCount.textContent = count;
});
