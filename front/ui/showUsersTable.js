const userTableBody = document.getElementById('user-table-body');
const userTable = document.getElementById('user-table');
const tableSection = document.getElementById('table-section');
export function showUsersTable(users) {
  tableSection.style.display = 'flex';

  userTableBody.innerHTML = ''; 

  if (users) {
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
  } else {
    
  }
}