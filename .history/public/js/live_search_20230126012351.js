function search() {
    var searchValue = document.getElementById("search-input").value;
    var searchResults = document.getElementById("search-results");
    var noItems = document.getElementById("no-items");
    if (searchValue === "") {
     searchResults.style.display = "none";
     noItems.style.display = "none";
    }else {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", `/api/D3H6G1J7K2M8/${searchValue}`);
      xhr.onload = function() {
        if (xhr.status === 200) {
          searchResults.style.display = "block";
          var data = JSON.parse(xhr.responseText);   
          searchResults.innerHTML = "";
          if (data.length === 0) { 
            noItems.style.display = "block";
            noItems.textContent = "Item bulunmadı";
          } else {
            noItems.style.display = "none";
            data.forEach(function(item) {
            var li = document.createElement("li");    
              li.textContent = item.manga_title;
              searchResults.appendChild(li);
            });
          }
        }
      };
      xhr.send();
    }
  }