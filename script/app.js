// selecting html elements
const input = document.querySelectorAll('#text')[0];
const btn = document.querySelectorAll('button')[0];
const ul = document.querySelectorAll('ul')[0];

// Add button functionality
function addToList(event) {
	// creating html elements virtually
	const li = document.createElement('li'); // <li> </li>
	const deleteBtn = document.createElement('button'); // <button> </button>

	deleteBtn.className = 'delete-btn'; // <button class="delete-btn"></button>
	deleteBtn.innerText = 'delete'; //<button class="delete-btn">delete</button>
	li.innerText = input.value;

	// Testing if text field is not empty
	if (input.value.length > 0) {
		li.appendChild(deleteBtn);
		ul.appendChild(li);
		input.value = '';
	}
	event.preventDefault();
	// Delete button functionality
	function deleteList(event) {
		li.remove();
	}

	// Click Event listener to execute the deleteList function
	deleteBtn.addEventListener('click', deleteList);
	function toggleList(event) {
		// Done list
		li.classList.toggle = 'done';
	}

	// Click Event listener to execute the toggleList function
	li.addEventListener('click', toggleList);
}

// Click Event listener to execute the addToList function
btn.addEventListener('click', addToList);
