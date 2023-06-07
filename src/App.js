import { Suspense, useState } from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Navbar from "./components/Navbar";
import Education from "./components/Education";
import { data } from "./data/WorkExperienceData";
import "./App.scss";
import WorkExperience from "./components/WorkExperience";
import { translationsFr, translationsEn } from "./translations/translations";
import Form from "./components/Form";

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

  const onChange = (event) => {
    i18n.changeLanguage(event.target.value);
    setCount((previousCount) => previousCount + 1);
  };

  return (
    <>
      <Suspense fallback={"Loading..."}>
        <div className="App">
          <div className="header">
            <Navbar />
            <select
              onChange={onChange}
              style={{
                fontFamily: "FontAwesome",
              }}
            >
              <option value="fr">SR</option>
              <option value="en">EN</option>
            </select>
          </div>
          <Education />
          <div className="fl">
            {data.map((job, index) => (
              <WorkExperience key={index} />
            ))}
          </div>
          <Form />
        </div>
      </Suspense>
    </>
  );
}

export default App;
