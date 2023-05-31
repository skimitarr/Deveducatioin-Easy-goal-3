import { Outlet, Link } from "react-router-dom";
function Header() {
  return (
    <>
      <header>
        <nav className="header">
          <Link to='/' className="header-link">
            <span className="header-logo-1">SHARETRADE</span>
            <span className="header-logo-2">.COM</span>
          </Link>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
export default Header;
