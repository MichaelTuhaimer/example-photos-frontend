export function Header() {
  return (
    <header className="">
      <nav className="bg-gray-400 p-1">
        <a className="hover:bg-gray-300 rounded-sm" href="#">
          Home
        </a>{" "}
        |{" "}
        <a className="hover:bg-gray-300 rounded-sm" href="#">
          Link
        </a>
      </nav>
    </header>
  );
}
