import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./third_p_all.css";// Стилі для цього компоненту

const Third_p_3 = () => {
    const Pages = [
        {
          text: "Ліла, маленька кролиця, дуже хвилювалася. Сьогодні — лісовий концерт талантів, і вона мала грати на флейті перед усіма! Вона тижнями тренувалась і вже могла грати улюблену мелодію навіть із заплющеними очима. Але коли нарешті настала її черга, лапки стали вологими. Вона вийшла на дерев’яну сцену. Усі звірі дивилися на неї. Ліла підняла флейту, вдихнула... і чхнула! — АПЧХИ! Звук луною прокотився через галявину. Кілька звірят захихотіли. Ліла почервоніла, її вушка опустились. Вона глянула вниз і тихо сказала: — Ой...",
          questions:
            "Питання: Що відчувала Ліла, коли чхнула на сцені?",
          answers: ["Зніяковіння", "Злість", "Смуток", "Сонливість"],
        },
        {
          text: "Вона знову глибоко вдихнула і спробувала ще раз. Цього разу вона заграла всю мелодію чудово. Звуки легко летіли між деревами. Коли вона закінчила, звірята захлопали в долоньки й копитця. Сови навіть загукали. Серце Ліли калатало, але тепер було легке. Вона з усмішкою зістрибнула зі сцени.",
          questions: "Питання: Що відчувала Ліла після того, як гарно зіграла свою мелодію?",
          answers: ["Гордість", "Страх", "Розгубленість", "Зніяковіння"],
        },
        {
          text: "Пізніше Ліла та її друг Бенні, ведмедик, гралися за сценою. Раптом вони почули гучне шарудіння в кущах. — Що це було? — прошепотів Бенні. Ліла завмерла. Її вушка насторожено піднялися. Лапки не рухались. — Це... монстр? — прошепотіла вона.",
          questions: "Питання: Що відчувала Ліла, коли почула звук у кущах?",
          answers: ["Страх", "Зніяковіння", "Вдячність", "Гордість"],
        },
        {
            text: "Раптом з кущів вискочив білченя, тримаючи в лапках шишку. — Вибач! Я не хотів нікого лякати! — засміявся він. Ліла й Бенні переглянулися — а потім засміялися разом. — Ніяких монстрів, — усміхнувся Бенні. — Лише дуже галасливе білченя, — сказала Ліла. Вона відчула, що стала сміливішою. Це був великий день — і вона пишалася собою.",
            questions:
              "Питання: Що відчувала Ліла, коли зрозуміла, що це не монстр?",
            answers: ["Полегшення", "Злість", "Зніяковіння", "Провину"],
          },
        {
          text: "Коли сонце сховалося за верхівки дерев, Ліла, Бенні та білченя сиділи разом на колоді, ласували хрусткими морквинками й тепло усміхалися. Концерт талантів завершився, а ліс знову став тихим. Ліла поглянула на зірки, що почали з’являтися в небі. — Сьогодні було страшно… але водночас чудово, — прошепотіла вона. Бенні кивнув. — Ти була молодець. У грудях Ліли розлилось спокійне, горде відчуття. Вона подолала страх, заграла свою мелодію і створила нові спогади. Вона знала — цей день запам’ятається надовго.",
          questions:
            "Питання: Що відчувала Ліла, згадуючи свій день?",
          answers: ["Гордість", "Смуток", "Злість", "Подив"],
        },
      ];
    const translations = {
        ua: {
            navHowItWorks: "Як це працює?",
            navPhone: "Мобільний застосунок",
            navStartLearning: "Почати навчання",
            howItWorks: "Як це працює?",
            howItWorksText:
                "Наша система допомагає дітям із аутизмом, синдромом Дауна та іншими особливостями розвитку навчитися розпізнавати та виражати емоції у відповідних ситуаціях. Ми використовуємо три інтерактивні модулі навчання:",
            mobileApp: "Мобільний додаток",
            startLearning: "Почати навчання",
            helpingChildren: "Допомагаємо дітям відчувати світ серцем",
            readingWithVisualization: "Читання з візуалізацією",
            readingDescription:
                "дитина читає текст по абзацах, а система генерує зображення до кожного фрагмента. Після прочитання проходить тест на визначення емоцій, представлених у тексті.",
            expressingEmotions: "Вираження емоцій",
            expressingDescription:
                "дитина отримує ситуацію для аналізу та повинна зобразити відповідну емоцію за допомогою камери (наприклад, посміхнутися, висловити здивування чи смуток).",
            decisionMaking: "Прийняття рішень",
            decisionDescription:
                "після прочитання історії дитина обирає, як би вона вчинила в цій ситуації. Це допомагає зрозуміти, як правильно реагувати у повсякденному житті.",
            resultText:
                "У результаті дитина навчається розпізнавати емоції, реагувати на них та взаємодіяти з оточенням впевнено та природно.",
            mobileTitle: "Мобільний застосунок",
            mobileDescription:
                "Навчайтеся зручно будь-де! Наша система доступна як у веб-версії на сайті, так і в мобільному застосунку для смартфонів та планшетів.",
            footerText1: "© 2025 EmoPuzzle. Усі права захищено.",
            footerText2: "Допомагаємо дітям відчувати світ серцем.",
            contactUs:
                "Зв'яжіться з нами: [email@example.com] | [Телефон: +380 ХХХ ХХХ ХХХХ]",
        },
        en: {
            navHowItWorks: "How does it work?",
            navPhone: "Mobile application",
            navStartLearning: "Start learning",
            howItWorks: "How does it work?",
            howItWorksText:
                "Our system helps children with autism, Down syndrome, and other special needs learn to recognize and express emotions in appropriate situations. We use three interactive learning modules:",
            mobileApp: "Mobile application",
            startLearning: "Start learning",
            helpingChildren: "Helping children feel the world with their hearts",
            readingWithVisualization: "Reading with visualization",
            readingDescription:
                "The child reads the text paragraph by paragraph, and the system generates images for each fragment. After reading, the child takes a test to identify the emotions presented in the text.",
            expressingEmotions: "Expressing emotions",
            expressingDescription:
                "The child is given a situation to analyze and has to depict the appropriate emotion using the camera (for example, smile, express surprise or sadness).",
            decisionMaking: "Decision-making",
            decisionDescription:
                "After reading the story, the child chooses what he or she would do in this situation. This helps to understand how to react in everyday life.",
            resultText:
                "As a result, the child learns to recognize emotions, respond to them, and interact with the environment confidently and naturally.",
            mobileTitle: "Mobile application",
            mobileDescription:
                "Study conveniently from anywhere! Our system is available both in a web version on the website and in a mobile application for smartphones and tablets.",
            footerText1: "© 2025 EmoPuzzle. All rights reserved.",
            footerText2: "We help children feel the world with their hearts.",
            contactUs:
                "Contact us: [email@example.com] | [Phone: +380 XXX XXX XXX XXX]",
        },
    };
    const navigate = useNavigate();
    const [language, setLanguage] = useState("en");



    const handleLanguageChange = (e) => setLanguage(e.target.value);

    const [selectedEmotion, setSelectedEmotion] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleEmotionClick = (emotion) => {
        if (emotion === 'Смуток') {
            setSelectedEmotion('Смуток');
            navigate('/third_p_4'); // Navigate to the next page when "Смуток" is clicked
        } else {
            setSelectedEmotion(emotion);
            setShowModal(true); // Show modal for other emotions
        }
    };

    const handleNextClick = () => {
        navigate('/third_p_4'); // Navigate to the next page when "Далі" is clicked
    };

    return (
        <div className="container">
            <nav className="container">
            <img src="./images/logo1.png" alt="" className="logo" onClick={() => navigate("/")}/>
                <ul>
                    <li>{translations[language].navHowItWorks}</li>
                    <li>{translations[language].navPhone}</li>
                    <li>{translations[language].navStartLearning}</li>
                </ul>
                <select className="change-lang" onChange={handleLanguageChange}>
                    <option value="ua">UA</option>
                    <option value="en">EN</option>
                </select>
            </nav>

            <main className="container">
            <button className="back-button" onClick={() => navigate(-1)}>
          ← 
        </button>
                <h3>3/5</h3>
                <div className="first_story">
                    <div className="text_block">
                        <p>Пізніше Ліла та її друг Бенні, ведмедик, гралися за сценою. Раптом вони почули гучне шарудіння в кущах.
                            — Що це було? — прошепотів Бенні.
                            Ліла завмерла. Її вушка насторожено піднялися. Лапки не рухались.
                            — Це... монстр? — прошепотіла вона.
                        </p>
                    </div>

                    <div>
                        <img src="./images/fox_3_3.png" className="image_fox image_fox3_3" />
                    </div>
                </div>
                <h2>Питання: Що відчувала Ліла, коли почула звук у кущах?</h2>

                <div className="variables">
                    <div className="left_variant">
                        <button
                            className={`btn_variant wrong_btn ${selectedEmotion === 'Злість' ? 'red' : ''}`}
                            onClick={() => handleEmotionClick('Злість')}
                        >
                            Гордість
                        </button>
                        <button
                            className={`btn_variant wrong_btn ${selectedEmotion === 'Злість' ? 'red' : ''}`}
                            onClick={() => handleEmotionClick('Злість')}
                        >
                            Вдячність
                        </button>
                    </div>
                    <div className="right_variant">
                        <button
                            className={`btn_variant wrong_btn ${selectedEmotion === 'Злість' ? 'red' : ''}`}
                            onClick={() => handleEmotionClick('Злість')}
                        >
                            Зніяковіння
                        </button>
                        <button
                            className={`btn_variant correct_variant ${selectedEmotion === 'Смуток' ? 'green' : ''}`}
                            onClick={() => handleEmotionClick('Смуток')}
                        >
                            Страх
                        </button>
                    </div>
                    <div className="variables_btn">
                        <button type="submit" className="btn btn_next btn-primary" onClick={() => handleEmotionClick('Смуток')}
                        >
                            Далі
                        </button>
                    </div>


                    {showModal && (
                        <div className="modal">
                            <div className="modal-content">
                                <div className="bg"></div>
                                <div className="inmodal">
                                    <div className="mb-3-3">
                                        <h3 className="modal_h3">Чому має бути саме ця відповідь?</h3>

                                        <p>Міло відчуває смуток, бо він дуже любив свою червону шапочку, а тепер не може її знайти. Він шукав її всюди – на полиці, під ліжком і навіть у скриньці з іграшками, але вона зникла. Через це він засмутився і вийшов надвір, опустивши вушка й хвостик. Коли ми втрачаємо щось важливе для нас, це може зробити нас сумними, так само, як сталося з Міло.</p>
                                    </div>
                                    <button className="close_btn" onClick={() => setShowModal(false)}>Закрити</button>

                                </div>
                            </div>
                        </div>

                    )}
                    <div className="variables_btn">
                    </div>
                </div>
            </main>


            <footer className="container footer">
                <div className="footer_text">
                    <p>{translations[language].footerText1}</p>
                    <p>{translations[language].footerText2}</p>
                    <p>{translations[language].contactUs}</p>
                </div>
                <p className="background_text">EmoPuzzle</p>
            </footer>
        </div>
    );
};

export default Third_p_3;
