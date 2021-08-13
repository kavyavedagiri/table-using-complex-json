// List of customers
let customers = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "username": "Antonette",
      "email": "Shanna@melissa.tv",
      "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        "geo": {
          "lat": "-43.9509",
          "lng": "-34.4618"
        }
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist",
        "catchPhrase": "Proactive didactic contingency",
        "bs": "synergize scalable supply-chains"
      }
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "username": "Samantha",
      "email": "Nathan@yesenia.net",
      "address": {
        "street": "Douglas Extension",
        "suite": "Suite 847",
        "city": "McKenziehaven",
        "zipcode": "59590-4157",
        "geo": {
          "lat": "-68.6102",
          "lng": "-47.0653"
        }
      },
      "phone": "1-463-123-4447",
      "website": "ramiro.info",
      "company": {
        "name": "Romaguera-Jacobson",
        "catchPhrase": "Face to face bifurcated interface",
        "bs": "e-enable strategic applications"
      }
    }];

function displaycustomers(customers){
   let table = '<table border="1">';
//    table += `<tr><th>ID</th><th>Name</th><th>Rank</th></tr>`;
//    table += `<tr><th></th><th></th><th colspan="2">ss</th><th colspan="2">ss</th><th colspan="2">ss</th></tr>`;
   customers.forEach((movie, index) => {

       table = table + `<tr>`;
       table = table + `<td> ${movie.id}</td>`;
       table = table + `<td> ${movie.name}</td>`;
       table = table + `<td> ${movie.username}</td>`;
       table = table + `<td> ${movie.email}</td>`;
       table = table + `<td> ${movie.address.street}</td>`;
       table = table + `<td> ${movie.address.suite}</td>`;
       table = table + `<td> ${movie.address.city}</td>`;
       table = table + `<td> ${movie.address.zipcode}</td>`;

       table += `</tr>`;
    });
    table += "</table>";
    document.getElementById("customers-list").innerHTML = table;
}

displaycustomers(customers);
