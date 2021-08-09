const Header = () => {
   const toggleTheme = () => {
    const moon = document.querySelector('.fa-moon');
    const root = document.querySelector('#root');
    const header = document.querySelector('header');
    const input = document.querySelector('.searchBar');
    const select = document.querySelector('select');

    moon.addEventListener("click", () => {
        root.classList.toggle("light-theme")
        header.classList.toggle("light-theme")
        input.classList.toggle("light-theme")
        select.classList.toggle("light-theme")
    })
   }
    return (
        <header className="d-flex justify-content-between align-items-center p-3 header">
            <h2>Where in the world?</h2>
            <div>
            <i className="fas fa-moon header-btn" onClick={toggleTheme}></i><button className="btn btn text-white color-switch">Dark Mode</button>
            </div>
        </header>
    );
};

export default Header;
