fetch('https://api.escuelajs.co/api/v1/users')
  .then(response => response.json())
  .then(users => {
    const tableBody = document.getElementById('usersTableBody');

    users.forEach(user => {
      const row = document.createElement('tr');

      const emailCell = document.createElement('td');
      emailCell.textContent = user.email;
      row.appendChild(emailCell);

      const passwordCell = document.createElement('td');
      passwordCell.textContent = user.password;
      row.appendChild(passwordCell);

      const nameCell = document.createElement('td');
      nameCell.textContent = user.name;
      row.appendChild(nameCell);

      const avatarCell = document.createElement('td');
      const avatar = document.createElement('img');
      avatar.src = user.avatar;
      avatar.style.maxHeight = '100px';
      avatarCell.appendChild(avatar);
      row.appendChild(avatarCell);

      tableBody.appendChild(row);
    });
  })
  .catch(error => console.error(error));
