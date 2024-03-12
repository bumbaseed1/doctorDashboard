document.addEventListener("DOMContentLoaded", () => {
    const appointments = [
        {
            name: "John Doe",
            date: "2024-03-12",
            time: "10:00 AM",
            status: "Confirmed",
            actions: "View/Cancel",
        },
        {
            name: "Jane Smith",
            date: "2024-03-12",
            time: "11:00 AM",
            status: "Pending",
            actions: "Confirm/Cancel",
        },
        // Add more appointments as needed
    ];

    const appointmentsTableBody = document.querySelector("#appointments tbody");

    appointments.forEach((appointment) => {
        const row = document.createElement("tr");

        Object.values(appointment).forEach((value) => {
            // Ensuring 'value' is defined
            const cell = document.createElement("td");
            cell.textContent = value; // Using 'value' here
            row.appendChild(cell);
        });

        appointmentsTableBody.appendChild(row);
    });

    const patients = [
        {
            name: "Alice Johnson",
            age: 29,
            lastVisit: "2024-02-15",
            actions: "View/Update",
        },
        {
            name: "Bob Brown",
            age: 34,
            lastVisit: "2024-01-20",
            actions: "View/Update",
        },
        {
            name: "Charlie Davis",
            age: 25,
            lastVisit: "2024-03-01",
            actions: "View/Update",
        },
        {
            name: "David Lee",
            age: 42,
            lastVisit: "2024-02-28",
            actions: "View/Update",
        },
        {
            name: "Eve Wilson",
            age: 31,
            lastVisit: "2024-03-10",
            actions: "View/Update",
        },
        // Add more patients as needed
    ];

    const patientsTableBody = document.querySelector("#patients tbody");

    patients.forEach((patient) => {
        const row = document.createElement("tr");

        Object.values(patient).forEach((value) => {
            // Ensuring 'value' is defined
            const cell = document.createElement("td");
            cell.textContent = value; // Using 'value' here
            row.appendChild(cell);
        });

        patientsTableBody.appendChild(row);
    });

    const messages = [
        "Urgent: Please review patient records.",
        "Reminder: Staff meeting at 3pm.",
        "New patient appointment scheduled.",
    ];

    const messagesList = document.querySelector(".message-list");

    messages.forEach((messages) => {
        // Use 'message' or another variable that's correctly defined in this context
        const item = document.createElement("li");
        item.textContent = messages; // Make sure to use the same variable here
        messagesList.appendChild(item);
    });
});
