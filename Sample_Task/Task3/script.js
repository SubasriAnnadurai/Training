// Array to store events
const events = [];

// Add an event
function addEvent() {
    const title = document.getElementById('event-title').value.trim();
    const date = document.getElementById('event-date').value;

    if (title && date) {
        const eventDate = new Date(date);
        const today = new Date();
        const status = eventDate >= today ? 'Upcoming' : 'Past';
        
        events.push({ title, date, status });
        document.getElementById('event-title').value = '';
        document.getElementById('event-date').value = '';
        renderEvents();
    } else {
        alert('Please fill out all fields with valid values.');
    }
}

// Edit an event
function editEvent(index) {
    const event = events[index];
    const newTitle = prompt('Edit Event Title:', event.title);
    const newDate = prompt('Edit Event Date (YYYY-MM-DD):', event.date);
    
    if (newTitle && newDate) {
        const updatedDate = new Date(newDate);
        if (!isNaN(updatedDate)) {
            event.title = newTitle.trim();
            event.date = newDate;
            event.status = updatedDate >= new Date() ? 'Upcoming' : 'Past';
            renderEvents();
        } else {
            alert('Invalid date format. Please try again.');
        }
    }
}

// Delete an event
function deleteEvent(index) {
    events.splice(index, 1);
    renderEvents();
}

// Filter events by status
function filterEvents(filter) {
    let filteredEvents = events;
    if (filter === 'upcoming') {
        filteredEvents = events.filter(event => event.status === 'Upcoming');
    } else if (filter === 'past') {
        filteredEvents = events.filter(event => event.status === 'Past');
    }
    renderEvents(filteredEvents);
}

// Render events to the page
function renderEvents(filtered = events) {
    const eventList = document.getElementById('event-list');
    eventList.innerHTML = ''; // Clear existing list

    filtered.forEach((event, index) => {
        const eventItem = document.createElement('li');
        eventItem.className = 'event-item';
        eventItem.innerHTML = `
            <span><strong>${event.title}</strong> - ${event.date} (${event.status})</span>
            <div>
                <button class="edit-btn" data-index="${index}">Edit</button>
                <button class="delete-btn" data-index="${index}">Delete</button>
            </div>
        `;
        eventList.appendChild(eventItem);
    });

    // Attach event listeners to Edit and Delete buttons
    document.querySelectorAll('.edit-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const index = e.target.dataset.index;
            editEvent(index);
        });
    });

    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const index = e.target.dataset.index;
            deleteEvent(index);
        });
    });
}
