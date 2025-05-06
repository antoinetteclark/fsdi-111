function saveTask(){
    console.log("button clicked")

    // Get values from form fields
    const title = $("#txtTitle").val();
    const description = $("#txtDescription").val();
    const color = $("#selColor").val();
    const date = $("#selDate").val();
    const status = $("#selStatus").val();
    const budget = $("#numBudget").val();

    // Create a new task
    let task = new Task(title, description, color, date, status, budget,);
    console.log(task);
    displayTask(task);
}

function displayTask(task){
    let syntax = `
        <div class="task-container" style="border-color:${task.color}">
            <div class="task">
                <div class="task-information">
                    <h5>${task.title}</h5>
                    <p>${task.description}</p>
                </div>

                <div class="task-status">${task.status}</div>

                <div class="task-date-budget">
                    <span>${task.date}</span>
                    <span>${task.budget}</span>
                </div>
            </div>
        </div>
    `

    $("#list").append(syntax);
}

function init() {
//load data

// hook events
$("#btnSave").click(saveTask);
}

window.onload = init;
// 