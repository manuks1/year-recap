// Timeline Click Action
function showMonth(month) {
    alert("Showing details for " + month);
    // Add functionality to display monthly highlights
}

// Photo Gallery Click Action
function openPhoto(month) {
    if(month === 'Pratibha') {
        alert("Looks very calm, but totally opposite. But very lovely and beautiful!");
    } else if (month === 'Manu') {
        alert("Looks very angry, but totally opposite. Except few times");
    } else {
        alert("Together we are fire-ice, key-lock, pieces of puzzle");
    }
    
    // Add functionality to open a lightbox with photos for the selected month
}

// Milestone Click Action
function showMilestone(milestone) {
    alert("Showing details for " + milestone);
    // Add functionality to display detailed description of the milestone
}

// Add Sticky Note to Memory Wall
function addStickyNote() {
    var note = document.getElementById('noteInput').value;
    if (note) {
        var wall = document.getElementById('wall');
        var stickyNote = document.createElement('div');
        stickyNote.className = 'sticky-note';
        stickyNote.textContent = note;
        wall.appendChild(stickyNote);
        document.getElementById('noteInput').value = ''; // Clear the input field
    }
}

// Submit Suggestion for Next Year
function submitSuggestion() {
    var suggestion = document.getElementById('nextYearInput').value;
    alert("Thank you for your suggestion: " + suggestion);
    document.getElementById('nextYearInput').value = ''; // Clear the input field
}
