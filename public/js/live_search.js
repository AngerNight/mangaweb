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
          searchResults.style.display = "flex";
          var data = JSON.parse(xhr.responseText);   
          searchResults.innerHTML = "";
          if (data.length === 0) { 
            noItems.style.display = "block";
            noItems.textContent = "Aradığınız manga yada yazar bulunamadı..";
          } else {
            noItems.style.display = "none";
            data.forEach(function(item) {
              var div = document.createElement("div");
              var a = document.createElement("a");
              var img = document.createElement("img");
              var span = document.createElement("span");
              a.classList.add("item-3");
              img.classList.add("item-img");
              span.classList.add("item-title");
              a.href = ("/comics/"+item.manga_url)
              img.src = item.manga_image
              span.textContent = item.manga_title
              searchResults.appendChild(div)
              div.appendChild(a)
              a.appendChild(img)
              a.appendChild(span)
            });
          }
        }
      };
      xhr.send();
    }
  }

  // var li = document.createElement("li");
  // var a = document.createElement("a");
  // var img = document.createElement("img");
  // var span = document.createElement("span");
  // a.classList.add("item-3");
  // img.classList.add("item-img");
  // span.classList.add("item-title");
  // a.href = item.manga_url
  // img.src = item.manga_image
  // span.textContent = item.manga_title
  // searchResults.appendChild(li)
  //   li.appendChild(a)
  //   a.appendChild(img)
  //   a.appendChild(span)
 