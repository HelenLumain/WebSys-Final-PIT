// Add event listeners to the "Read More" buttons (this is a placeholder - you'll need to implement actual navigation)
const readMoreButtons = document.querySelectorAll('.read-more');
readMoreButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert('Read More functionality not yet implemented.'); // Replace with actual navigation
  });
});


// Add event listeners to category buttons (this is a placeholder - you'll need to implement filtering)
const categoryButtons = document.querySelectorAll('.category-button');
categoryButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.category;
    alert(`Filtering by category: ${category} (not yet implemented).`); // Replace with filtering logic
  });
});