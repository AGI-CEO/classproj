document.addEventListener("DOMContentLoaded", () => {
  const usersLink = document.querySelector('a[href="/api/users"]');
  const ordersLink = document.querySelector('a[href="/api/orders"]');
  const table = document.querySelector("table");

  function createTable(data) {
    let headers = Object.keys(data[0]);
    let headerRow = document.createElement("tr");
    headers.forEach((header) => {
      let th = document.createElement("th");
      th.textContent = header;
      headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    data.forEach((item) => {
      let row = document.createElement("tr");
      headers.forEach((header) => {
        let td = document.createElement("td");
        td.textContent = item[header];
        row.appendChild(td);
      });
      table.appendChild(row);
    });
  }

  usersLink.addEventListener("click", (event) => {
    event.preventDefault();
    fetch("/api/users")
      .then((response) => response.json())
      .then((data) => {
        createTable(data);
      })
      .catch((error) => console.error("Error:", error));
  });

  ordersLink.addEventListener("click", (event) => {
    event.preventDefault();
    fetch("/api/orders")
      .then((response) => response.json())
      .then((data) => {
        createTable(data);
      })
      .catch((error) => console.error("Error:", error));
  });
});
