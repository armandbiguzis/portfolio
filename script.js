const toggleSidebarButton = document.querySelector("#toggle-sidebar");
const sidebarElement = document.querySelector("#sidebar");

function isSidebarOpen() {
    return sidebarElement.style.display == "flex";
}

toggleSidebarButton.onclick = () => {
    if (isSidebarOpen()) {
        sidebarElement.style.display = "none";
    } else {
        sidebarElement.style.display = "flex";
    }
};
