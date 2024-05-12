var modal = document.getElementById("myModal");
var btn = document.getElementById("openModal");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
document.addEventListener("DOMContentLoaded", function () {
    var localStorageTable = document.getElementById('localStorageData').getElementsByTagName('tbody')[0];
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);
        var row = localStorageTable.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = key;
        cell2.innerHTML = '<a href=' + value + ' class="open">Mở</a>';
        var deleteButton = document.createElement("button");
        deleteButton.setAttribute('class', 'delete');
        deleteButton.innerHTML = "Xóa";
        deleteButton.onclick = function () {
            var row = this.parentNode.parentNode;
            var key = row.cells[0].innerHTML;
            localStorage.removeItem(key);
            row.remove();
        };
        cell3.appendChild(deleteButton);
    }
});
