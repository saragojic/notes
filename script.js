/*console.log("Hello World")*/

/*Es gibt für DOMContentLoaded keine entsprechende Objekteigenschaft, dass heißt, eine Überwachung dieses Ereignisses muss immer mit addEventListener erfolgen.
Verwenden Sie DOMContentLoaded anstelle von load, damit Skripte schon geladen werden, bevor alle Bilder und anderen Mediendateien fertig geladen sind. */
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("add");
    button.addEventListener("click", handleClick);

    const input = document.getElementById("text");
    input.addEventListener("keydown", handleKeyDown);
});

function handleClick(/* event */) {
    add();
}

function handleKeyDown(event) {
    if (event.key === "Enter") {
      add();
    }
  }

  function handleClickLIItem(event) {
    const list = document.getElementById("list");
    list.removeChild(event.target);
  }

  function add() {
  const input = document.getElementById("text");
  const note = input.value;
  if (note) {
    const list = document.getElementById("list");
    const item = document.createElement("li");
    item.textContent = note;
    item.addEventListener("click", handleClickLIItem);
    list.appendChild(item);
    input.value = "";
    input.focus();
  }
}