const userTable = document.getElementById('user-table');
const userTableBody = document.getElementById('user-table-body');

export function getUsers() {
  fetch('/src/getUsers.php')
    .then(response => response.json())
    .then(users => {
      console.log(users);
      showTable(users);
      userTable.style.display = 'block';
    })
    .catch(error => console.error('Error:', error));
}

function showTable(users) {
  userTableBody.innerHTML = ''; 

  for (let user of users) {
    let row = document.createElement('tr');
    
    let nameCell = document.createElement('td');
    nameCell.textContent = user.name;
    row.appendChild(nameCell);

    let firstSurnameCell = document.createElement('td');
    firstSurnameCell.textContent = user.first_surname;
    row.appendChild(firstSurnameCell);
    
    let secondSurnameCell = document.createElement('td');
    secondSurnameCell.textContent = user.second_surname;
    row.appendChild(secondSurnameCell);

    let emailCell = document.createElement('td');
    emailCell.textContent = user.email;
    row.appendChild(emailCell);

    userTableBody.appendChild(row);
  }
}