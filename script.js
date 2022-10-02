// Model
const notes = [
    // "Note 1",
    // "Note 2",
    // "Note 3"
    // ...
  ];
  
  // View
  // see HTML
  function buildLIItem(note) {
    const item = document.createElement("li");
    item.textContent = note;
    item.addEventListener("click", handleClickLIItem);
    return item;
  }
  
  // Controller
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
        const item = buildLIItem(note);
        list.appendChild(item);
        notes.push(note);
        input.value = "";
        input.focus();
    }
}