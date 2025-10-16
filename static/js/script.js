// GET /api/time
function showTime() {
    fetch("/api/time")
        .then(response => response.json())
        .then(data => {
            document.getElementById("time").innerText = data.current_time;
        });
}

// POST /api/greet
function greetUser() {
    const name = document.getElementById("name").value;
    fetch("/api/greet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("greet").innerText = data.message;
    });
}

// POST /update
function updateApp() {
    fetch("/update", { method: "POST" })
    .then(response => response.json())
    .then(data => {
        if(data.status === "success") {
            document.getElementById("updateResult").innerText = "Update Successful:\n" + data.output;
        } else {
            document.getElementById("updateResult").innerText = "Update Failed:\n" + data.message;
        }
    });
}
