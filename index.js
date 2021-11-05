function mySearch() {
    // Kerakli o'zgaruvchilarni chaqirib olish
    let input, filter, ul, li, a, i;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("university");
    li = ul.getElementsByTagName('li');
    
    // oddiy holatda spiska bo'sh turishi
    if(input.value.length == 0){
        ul.style.display = "none";
        return;
    }
    else{
        ul.style.display = "block";
    }

    // Element bo'ylab yurib chiqib (loop) to'gri kelmaydigan so'zlarni hide qilish
    for (i = 0; i < li.length; i++) {
       let a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "block";
        } else {
            li[i].style.display = "none";
        }
    }
}