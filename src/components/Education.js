import React from "react";
import { useTranslation } from "react-i18next";

function Education() {
  const { t } = useTranslation();
  return (
    <div>
      <h2>{t("Education1")}</h2>
      <p> {t("Education")}.</p>
    </div>
  );
}

export default Education;
