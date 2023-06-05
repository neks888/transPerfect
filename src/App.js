import { Suspense, useState } from "react";
import i18n from "i18next";
import { useTranslation, initReactI18next, Trans } from "react-i18next";

import Navbar from "./components/Navbar";
import Education from "./components/Education";
import { data } from "./data/WorkExperienceData";
import "./App.scss";
import WorkExperience from "./components/WorkExperience";

const translationsEn = {
  ime: "Nemanja Djoric!",
  "sample-text": "Sample <bold><italic>text</italic></bold>.",
  changed: "You have changed the language {{count}} time",
  changed_plural: "You have changed the language {{count}} times",
};

const translationsFr = {
  ime: "Немања Ђорић",
  "sample-text": "Exemple de <bold><italic>texte</italic></bold>.",
  changed: "Vous avez changé la langue {{count}} fois",
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: { translation: translationsEn },
      fr: { translation: translationsFr },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

function App() {
  const [count, setCount] = useState(0);
  const { t } = useTranslation();

  const onChange = (event) => {
    i18n.changeLanguage(event.target.value);
    setCount((previousCount) => previousCount + 1);
  };
  return (
    <Suspense fallback={"Loading..."}>
      <div className="App">
        <select onChange={onChange}>
          <option value="fr">SR</option>
          <option value="en">EN</option>
        </select>
        {t("ime")}
        <Navbar />
        <Education />
        <div className="fl" style={{}}>
          {data.map((job, index) => (
            <WorkExperience key={index} job={job} />
          ))}
        </div>
      </div>
    </Suspense>
  );
}

export default App;
