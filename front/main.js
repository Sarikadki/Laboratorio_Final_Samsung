import { getUsers} from './services/getUsers.js';
import { signUp } from './services/signUp.js';
import { validateInputFields } from './services/validateInputFields.js';
import { showUsersTable } from './ui/showUsersTable.js';

const form = document.querySelector('form');
const inputFields = document.querySelectorAll('.input-field');

form.addEventListener("submit", event => handleSubmit(event));

if (form) {
  const consultaButton = document.getElementById('consulta-btn');
  const userTable = document.getElementById('user-table');
  
  async function handleClick() {
    const users = await getUsers();
    showUsersTable(users);
  }

  consultaButton.addEventListener('click', handleClick);

}

function handleSubmit(event) {
  event.preventDefault();

  if (validateInputFields(inputFields)) {
    signUp(event);
  }
}