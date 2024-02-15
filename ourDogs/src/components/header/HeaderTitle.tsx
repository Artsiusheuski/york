import foto from "../../assets/img/york.svg";

function HeaderLogo() {
  return (
    <div>
      <span>
        <img className="headerLogo_logo" src={foto} alt="logo" />
      </span>
      {/* <h4 className="title_logo">York Island</h4> */}
    </div>
  );
}

export default HeaderLogo;
