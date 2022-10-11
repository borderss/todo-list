// clearing tasks
const clearAllButton = document.getElementById("clearAll")

// adding tasks
const taskTextField = document.getElementById("taskText")
const addTaskButton = document.getElementById("addTask")
const taskCounter = document.getElementById("task-counter")
const contentFrame = document.getElementsByClassName("content")[0]

function createTask(parent, text) {
  const taskDiv = document.createElement("div")

  taskDiv.className = "task-card"

  taskDiv.innerHTML = `
    <span>${text}</span>
    <img src="./src/graphics/checkmark.svg" alt="✔">
    `

  parent.appendChild(taskDiv)

  taskDiv.addEventListener("click", () => {
    removeTask(taskDiv)
  })

  updateCount()
}

function removeTask(element) {
  element.remove()
  updateCount()
}

function updateCount() {
  const count = document.getElementsByClassName("task-card").length

  if (count == 0) {
    taskCounter.innerHTML = `Jums nav aktīvu uzdevumu`
  } else if (count.toString()[count.toString().length - 1] == 1 && count != 11) {
    taskCounter.innerHTML = `Jums ir ${count} aktīvs uzdevumi`
  } else {
    taskCounter.innerHTML = `Jums ir ${count} aktīvi uzdevumi`
  }
}

addTaskButton.addEventListener("click", () => {
  var text = taskTextField.value
  if (text != "") {
    taskTextField.value = ""
    createTask(contentFrame, text)
  }
})

taskTextField.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    var text = taskTextField.value
    if (text != "") {
      taskTextField.value = ""
      createTask(contentFrame, text)
    }
  }
})

document.querySelectorAll(".task-card").forEach((element) => {
  console.log(element)
  element.addEventListener("click", () => {
    removeTask(element)
  })
})

clearAllButton.addEventListener("click", (e) => {
  const cards = document.getElementsByClassName("task-card")

  Array.from(cards).forEach((element) => {
    removeTask(element)
  })
  updateCount()
})

window.addEventListener("load", () => {
  updateCount()
})
















async function postData(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data)
  })
  return response.json()
}

async function getData(url = '') {
  const response = await fetch(url, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  })
  return response.json()
}

postData('https://reqres.in/api/users', {
  "name": "lietotajs1",
  "job": "programmetajs"
}).then((data) => {
  console.log("POST: ", data)
})

getData('https://reqres.in/api/users/2').then((data) => {
  console.log("GET: ", data)
})