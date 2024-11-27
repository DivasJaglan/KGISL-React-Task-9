import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul className="sidebar-menu">
        <li className="dashboard">
          <i class="fa-solid fa-table"></i>
          <span>Dashboard</span>
        </li>
        <li>
          <i class="fa-solid fa-gear"></i>
          <span>Widgets</span>
        </li>
        <li>
          <i class="fa-solid fa-pen-to-square"></i>
          <span>UI Elements</span>
        </li>
        <li>
          <i class="fa-regular fa-image"></i>
          <span>Advanced UI</span>
        </li>
        <li>
          <i class="fa-regular fa-image"></i>
          <span>Form Elements</span>
        </li>
        <li>
          <i class="fa-solid fa-spinner"></i>
          <span>Editors</span>
        </li>
        <li>
          <i class="fa-solid fa-chart-simple"></i>
          <span>Charts</span>
        </li>
        <li>
          <i class="fa-solid fa-table"></i>
          <span>Tables</span>
        </li>
        <li>
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
          <span>Popups</span>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
