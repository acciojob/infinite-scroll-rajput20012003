//your code here!
document.addEventListener("DOMContentLoaded", function () {
  const infiList = document.getElementById("infi-list");
  let listItemIndex = 10; // Start with 10 list items

  // Function to add new list items
  function addListItem() {
    const listItem = document.createElement("li");
    listItem.textContent = `List item ${listItemIndex + 1}`;
    infiList.appendChild(listItem);
    listItemIndex++;
  }

  // Initial loading of list items
  for (let i = 0; i < 10; i++) {
    addListItem();
  }

  // Function to check if the user has reached the bottom of the list
  function isBottom() {
    return infiList.scrollHeight - infiList.scrollTop === infiList.clientHeight;
  }

  // Function to handle scrolling event
  function handleScroll() {
    if (isBottom()) {
      // If user has reached the bottom, add more list items
      for (let i = 0; i < 2; i++) {
        addListItem();
      }
    }
  }

  // Event listener for scrolling
  infiList.addEventListener("scroll", handleScroll);
});


