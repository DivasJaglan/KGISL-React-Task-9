import "./Navbar.css";
function Navbar() {
  return (
    <nav>
      {/* Group-1 */}
      <div className="group g-1">
        <div className="logo">
          <img src="logo.png" alt="Logo" />
        </div>
        <h2>Skydash</h2>
      </div>

      {/* Group-2 */}
      <div className="group g-2">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="Search now" />
      </div>

      {/* Group-3 */}
      <div className="group g-3">
        <i class="fa-regular fa-bell"></i>
        <img className="user" src="user.png" alt="User" />
        <i class="fa-solid fa-ellipsis"></i>
      </div>
    </nav>
  );
}

export default Navbar;
