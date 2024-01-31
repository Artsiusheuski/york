import foto from "../../assets/img/york.svg";

function HeaderLogo() {
  return (
    <div>
      <span>
        <img className="headerLogo_logo" src={foto} alt="logo" />
      </span>
    </div>
  );
}

export default HeaderLogo;
