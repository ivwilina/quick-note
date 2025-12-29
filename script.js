/**
 * * displayNotes
 * * Get notes from localstorage and display inside "notes-container" HTML
 * @param none
 */
function displayNotes() {
  let notes = JSON.parse(localStorage.getItem("notes") || "[]");
  if (notes.length === 0) {
    document.getElementById("notes-container").innerHTML =
      '<p>No notes yet. Click "new note" to create one </p>';
  } else {
    notesContainer = document.getElementById("note-container");
    const notesHTML = notes.map((note) => {
      const tasks = note.tasks;
      const taskList = tasks.map((task) => {
        return `<li id=${task.id} class='task ${task.status ? "done" : "false"}'>${
          task.content
        }</li>`;
      });
      return `<ul id=${note.id} class='note-block'>${taskList}</ul>`;
    });
  }
}
