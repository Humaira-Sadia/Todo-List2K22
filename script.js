// document.getElementById('failed').style.display = "none";
//theme toggle..

// document.querySelector('#theme-toggle').addEventListener('click',()=>{
//     document.body.classList.toggle('dark');
//     const isDark = document.querySelector.body.classList.contains('dark');
//     localStorage.setItem('darkmode',isDark);
// })



window.addEventListener('load', () => {
    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const listEle = document.querySelector('#tasks');

    const success = document.getElementById("msg-success");
    const failed = document.getElementById("msg-failed");

    // theme toggle....


    var icon = document.getElementById("sun-icon");
    icon.onclick = function () {
        document.body.classList.toggle('purple-mode');
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;

        //search button working 
        let searchBtn = document.querySelector('#search');
        searchBtn.onclick = function () {
            let url = 'https://www.google.com/search?q=' + task;
            window.open(url);
            return;
        }

        if (!task) {
            failed.innerHTML = "Please fill out the task bar deatils."
            setTimeout(function () {
                failed.innerHTML = ""
            }, 2000);
        }
        else {
            success.innerHTML = "Task added successfully.."
            setTimeout(function () {
                success.innerHTML = ""
            }, 2000);





            const taskEle = document.createElement("div");
            taskEle.classList.add("task");

            const task_content = document.createElement("div");
            task_content.classList.add("content");
            task_content.innerText = task;

            taskEle.appendChild(task_content);

            const task_input_el = document.createElement("input");
            task_input_el.classList.add("text");
            task_input_el.type = "text";
            task_input_el.value = task;
            task_input_el.setAttribute("readonly", "readonly");

            const task_actions = document.createElement("div");
            task_actions.classList.add("actions");

            const task_delete = document.createElement("button");
            task_delete.classList.add("delete");
            task_delete.innerHTML = "Delete";

            // const task_edit = document.createElement("button");
            // task_edit.classList.add("edit");
            // task_edit.innerHTML = "Edit";

            // task_actions.appendChild(task_edit);
            task_actions.appendChild(task_delete);

            taskEle.appendChild(task_actions);

            listEle.appendChild(taskEle);

            input.value = ""

            // task_edit.addEventListener('click',()=>{
            //     if(task_edit.innerText == "Edit"){
            //         task_input_el.removeAttribute("readonly");
            //         task_input_el.focus();
            //         task_edit.innerText = "Save";
            //     }
            //     else{
            //         task_input_el.setAttribute("readonly","readonly");
            //         task_edit.innerText = "Edit";
            //     }
            // })

            task_delete.addEventListener('click', () => {
                listEle.removeChild(taskEle)
            })
        }
    })
});