function toggleMenu() {
    document.querySelector(".menu").classList.toggle("active");
}
fetch('/layout/header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header-placeholder').innerHTML = data;
    })
    .catch(error => console.error('Error loading header:', error));

fetch('/layout/sidebar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('sidebar-placeholder').innerHTML = data;

        highlightActiveMenu();
    })
    .catch(error => console.error('Error loading sidebar:', error));

// Fungsi untuk menandai menu aktif
function highlightActiveMenu() {
    const currentPage = window.location.pathname.split("/").pop();
    const menuItems = document.querySelectorAll(".list-group-item");

    menuItems.forEach(item => {
        if (item.getAttribute("href") === currentPage) {
            item.classList.add("active");
        }
    });
}

fetch('/layout/top-navbar.html')
    .then(response => response.text())
    .then(data => {
        document.querySelector('.top-navbar').innerHTML = data;
    })
    .catch(error => console.error('Error loading top navbar:', error));

fetch('/layout/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
    })
    .catch(error => console.error('Error loading footer:', error));