//your JS code here. If required.
document.getElementById('change_button').addEventListener('click', function() {
    // Get the input values
    const blockId = document.getElementById('block_id').value;
    const color = document.getElementById('colour_id').value;

    // Reset all grid items to transparent
    const items = document.querySelectorAll('.grid-item');
    items.forEach(item => {
        item.style.backgroundColor = 'transparent';
    });

    // Change the background color of the specified grid item
    const selectedItem = document.getElementById(blockId);
    if (selectedItem) {
        selectedItem.style.backgroundColor = color;
    } else {
        alert('Invalid block ID! Please enter a number between 1 and 9.');
    }
});

// Reset button functionality
document.getElementById('Reset').addEventListener('click', function() {
    const items = document.querySelectorAll('.grid-item');
    items.forEach(item => {
        item.style.backgroundColor = 'transparent';
    });
});