// Simulate login/signup
function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    
    if (user && pass) {
        location.href = 'teacher-dashboard.html';
    } else {
        alert("Please enter valid credentials.");
    }
}

function signup() {
    alert('Sign-up successful! Proceed to login.');
}

// Function to generate attendance report
function showReport() {
    const date = document.getElementById("attendanceDate").value;
    if (!date) {
        alert("Please select a date.");
        return;
    }

    let students = [];
    for (let i = 1; i <= 50; i++) {
        let status = Math.random() > 0.2 ? "✅ Present" : "❌ Absent";
        students.push(`<tr><td>Student ${i}</td><td>${status}</td></tr>`);
    }

    document.getElementById("reportContainer").innerHTML = `
        <h3>Attendance Report for ${date}</h3>
        <table>
            <tr><th>Student Name</th><th>Status</th></tr>
            ${students.join("")}
        </table>
    `;
}
