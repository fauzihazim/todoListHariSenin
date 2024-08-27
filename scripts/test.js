function GetIndex(src)
{
    var table = document.getElementById("table1");
    var rows = table.getElementsByTagName("tr");
    for (i = 0; i < rows.length; i++) {
    var currentRow = table.rows[i];
    var createClickHandler = function(row) {
        return function() {
        var cell = row.getElementsByTagName("td")[0];
        var id = cell.innerHTML;
        console.log("HERE " + id  );

        localStorage.setItem("ID", id);

        
        };
        
    };

    currentRow.onclick = createClickHandler(currentRow);
    AddNextTable(src);
    }

}

function AddNextTable(src)
{

    var table1 = document.getElementById("table1"),
    table2 = document.getElementById("table2");
    

                var table = document.getElementById("table1");
                var rows = table.getElementsByTagName("tr");
                for (i = 0; i < rows.length; i++) {
                var currentRow = table.rows[i];
                var createClickHandler = function(row) {
                    return function() {
                    var cell = row.getElementsByTagName("td")[0];
                    var id = cell.innerHTML;


                var Counter= 0;
                Counter++;
                var InputSelect= src;
                console.log(InputSelect);
                var NewText= document.getElementById(InputSelect).value;
                var newRow = table2.insertRow(table2.length),
                    cell1 = newRow.insertCell(0),
                    cell2 = newRow.insertCell(1),
                    cell3 = newRow.insertCell(2),
                    cell4 = newRow.insertCell(3);

                cell1.innerHTML = table1.rows[id].cells[0].innerHTML;
                cell2.innerHTML = table1.rows[id].cells[1].innerHTML;
                cell3.innerHTML = table1.rows[id].cells[2].innerHTML;
                cell4.innerHTML = "<input type='checkbox' name='check-tab2'>";

                cell3.innerHTML= "<input type='text' value="+ NewText+ ">"

     
                    
                var index = table1.rows[1].rowIndex;

                    };
                    
                };

                currentRow.onclick = createClickHandler(currentRow);
            
                }

}


function tab2_To_tab1()
{
    var table1 = document.getElementById("table1"),
        table2 = document.getElementById("table2"),
        checkboxes = document.getElementsByName("check-tab2");
console.log("Val1 = " + checkboxes.length);
     for(var i = 0; i < checkboxes.length; i++)
         if(checkboxes[i].checked)
            {
                // create new row and cells
                var newRow = table1.insertRow(table1.length),
                    cell1 = newRow.insertCell(0),
                    cell2 = newRow.insertCell(1),
                    cell3 = newRow.insertCell(2),
                    cell4 = newRow.insertCell(3);
                // add values to the cells
                cell1.innerHTML = table2.rows[i+1].cells[0].innerHTML;
                cell2.innerHTML = table2.rows[i+1].cells[1].innerHTML;
                cell3.innerHTML = table2.rows[i+1].cells[2].innerHTML;
                cell4.innerHTML = "<input type='checkbox' name='check-tab1'>";
               
                // remove the transfered rows from the second table [table2]
                var index = table2.rows[i+1].rowIndex;
                table2.deleteRow(index);
                // we have deleted some rows so the checkboxes.length have changed
                // so we have to decrement the value of i
                i--;
               console.log(checkboxes.length);
            }
}