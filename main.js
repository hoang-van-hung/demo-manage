let  menu=[
    [12,34,45],
    [12,34,82]
]
function display() {
    let str = "<tr>" +
        "<th>Drink Name</th>" +
        "<th>Image</th>" +
        "<th>Price</th>" +
        "<th colspan='2'>Action</th>" +
        "</tr>";
    for (let i = 0; i < menu.length; i++) {
        str += '<tr>' +
            '<td>' + menu[i][0] + '</td>' +
            '<td>' + menu[i][1] + '</td>' +
            '<td>' + menu[i][2] + '</td>' +
            '<td><button onclick="UpdateDrink(' + i + ')">Update</button></td>' +
            '<td><button onclick="DeleteDrink(' + i + ')">Delete</button></td>' +
            '</tr>';
    }
    document.getElementById('menu').innerHTML= str;

}
display();

function AddDrink() {
        let name = document.getElementById('drink-name').value;
        let image = document.getElementById('drink-image').value;
        let price = document.getElementById('drink-price').value;
        if (name != "" && price != "") {
            let drink = [name,image,price];
            menu.push(drink);
            display();
            ResetInput();
        } else {
            alert("Please input name");
        }
    }

    function DeleteDrink(index) {
    menu.splice(index,1);
    display();
}

function UpdateDrink(index) {
    let NewName = prompt("Input new name: ", menu[index][0]);
    let NewPrice = prompt("Input new price: ", menu[index][1]);
    let NewImage = prompt("Input new image: ", menu[index][2]);
    let drink = [NewName, NewPrice, NewImage];
    menu[index] = drink;
    display();
}

function ResetInput() {
    document.getElementById('drink-name').value = "";
    document.getElementById('drink-image').value = "";
    document.getElementById('drink-price').value = "";
}

function LoadData() {
    if (localStorage.hasOwnProperty('drink')) {
        let data = JSON.parse(localStorage.getItem('drink'));
        return data;
    } else {
        return [];
    }
}
