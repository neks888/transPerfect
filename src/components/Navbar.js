import { useTranslation } from "react-i18next";
function Navbar() {
  const { t } = useTranslation();
  return (
    <div className="icon-name-container">
      <div className="iconAndName">
        <i className="fa-solid fa-user"></i>

        <h1>{t("name")}</h1>
      </div>
    </div>
  );
}

export default Navbar;
