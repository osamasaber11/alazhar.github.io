// side menu toggle
function mobileNavHide() {
    let Mnav = document.getElementById('mobileNav');
    if (Mnav.classList.contains('activate')) {
    Mnav.classList.remove( 'activate' );
    } else {
        Mnav.classList.add("activate");
    }
}
function viewSearch() {
    let searchBar = document.getElementById('searchBar');
    if (searchBar.classList.contains('searchView')) {
        searchBar.classList.remove('searchView');
    } else {
        searchBar.classList.add('searchView');
    }
}
