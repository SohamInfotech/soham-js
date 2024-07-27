let number = 0, total = 0;

function add(iteam) {
    number++;

    a = document.querySelector('.name').children;
    b = document.querySelector('.price').children;

    s1 = document.getElementById("card");
    var div = document.createElement("div");
    div.className = "main2"
    let aa = `     
                    <div class="num">
                        ${number}
                    </div>
                    <div class="name1">
                        ${a[iteam].innerHTML}
                    </div>
                    <div class="price1">
                        ${b[iteam].innerHTML}
                    </div>
                    <button class="remove" onclick="this.parentElement.remove()">
                        remove
                    </button>
                `;
    div.innerHTML = aa;
    console.log(div);
    document.getElementById("card").appendChild(div)
    var prise = b[iteam].innerHTML;  // Assuming b is an array and iteam is an index
    // prise="sjkdhf"
    prise = prise.replace("$", "");  // Remove the '$' character from prise
    total += Number(prise);

    console.log(total);  // Output the modified prise
}