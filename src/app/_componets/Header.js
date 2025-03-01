import Link from "next/link";

const Header = () => {
  return (
    <div className="HeaderWrapper">
      <div className="logo">
        <img
          style={{ width: 100 }}
          src="https://img.freepik.com/free-vector/ecofood-logo-template_1195-33.jpg?t=st=1740822807~exp=1740826407~hmac=a9364da6a74d7a962e1861a1366abc6ea936da55ced40d5d00dbcded865eb143&w=740"
          alt="logo"
        />
      </div>
      
      <div className="links">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Login/SingUp</Link>
          </li>
          <li>
            <Link href="/">Profile</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
