import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./second_4.css";

const Second_4 = () => {
    const Pages = [
        {
          text: "Ніко, маленький білченя, мчав лісом. Його лапки майже не торкались землі. Сьогодні він мав мету: знайти найбільший і найхрусткіший горіх у всьому лісі. Він перестрибнув коріння, обнюхав купи листя — і нарешті побачив його! Горіх лежав під кущем, ніби справжній скарб. — Є! — вигукнув Ніко. Він поклав горіх у сумку й побіг до свого улюбленого каменя. Ніко міцно тримав горіх і спробував його покрутити. Нічого. Він трохи надкусив — знову нічого. Він вдарив ним об камінь — один раз, другий, п’ятий — але шкаралупа не тріскалась. Його вушка опустилися. Він надув щоки, підкинув горіх угору, спіймав і знову спробував. — Уф! Ну чому ж? — роздратовано сказав він. Після ще кількох спроб Ніко сів на землю, склав лапки і нахмурився.",
          questions:
            "Питання: Що відчував Ніко, коли не міг розколоти горіх?",
          answers: ["Роздратування", "Радість", "Страх", "Сонливість"],
        },
        {
          text: "У цей момент повз проходила Тора, черепаха. — Ти виглядаєш...розгублено, — сказала вона. Ніко показав на горіх. — Він не відкривається! Я вже все пробував. Тора глянула, покотила горіх під корінь дерева і натисла панциром.Трісь! Горіх розколовся навпіл.Очі Ніко стали круглі. — Ого... Це було круто! — сказав він і глибоко зітхнув.Нарешті можна поїсти.",
          questions: "Питання: Що відчував Ніко, коли Тора допомогла йому відкрити горіх?",
          answers: ["Полегшення", "Злість", "Смуток", "Зніяковіння"],
        },
        {
          text: "Ніко простягнув другу половинку Торі. — Хочеш трохи? Ти мене врятувала. Тора усміхнулась і зробила маленький укус. — Хрумке, — сказала вона. Ніко засміявся. — Добре, що ти була поруч. Дякую!",
          questions:
            "Питання: Що відчував Ніко, коли поділився горіхом із Торою?",
          answers: ["Вдячність", "Роздратування", "Злість", "Зніяковіння"],
        },
        {
          text: "Ніко й Тора доїли свою хрумку смакоту й вирішили пограти в хованки. Ніко побіг уперед, очі в нього блищали від захоплення — він шукав ідеальне місце, щоб сховатися. Він помітив кущ із густим листям і тихенько заповз під нього, намагаючись не засміятись. Минали хвилини, а Тори все не було. Ніко визирнув з-за листя. Все ще нікого. Його хвилювання почало згасати. І раптом він почув тихий голос Тори за сусіднім деревом: — Знайшла тебе! Вибач, що так довго — я не дуже швидка, — сором’язливо усміхнулась вона. Ніко у відповідь посміхнувся — він відчув полегшення і радість, що подруга таки прийшла.",
          questions: "Питання: Що відчував Ніко, коли Тора нарешті його знайшла?",
          answers: ["Радість", "Злість", "Смуток", "Сонливість"],
        },
        {
          text: "Коли сонце почало сідати, золотисте світло заливало ліс. Ніко й Тора тихенько сиділи на колоді, спостерігаючи, як небо змінює кольори — рожевий, помаранчевий і ніжно-фіолетовий. Раптом над ними пролетіла сім’я птахів у формі літери V. — Ого... — прошепотів Ніко. Його очі засяяли, поки він проводжав їх поглядом. — Вони ніби танцюють у небі! Тора відкинулась назад і посміхнулася. — Природа — справді дивовижна, правда? Ніко повільно кивнув, відчуваючи себе маленьким, щасливим і зачарованим одночасно.",
          questions:
            "Питання: Що відчував Ніко, коли дивився на птахів у небі?",
          answers: ["Захоплення", "Смуток", "Сонливість", "Злість"],
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
            navigate('/second_5'); // Navigate to the next page when "Смуток" is clicked
        } else {
            setSelectedEmotion(emotion);
            setShowModal(true); // Show modal for other emotions
        }
    };

    const handleNextClick = () => {
        navigate('/second_5'); // Navigate to the next page when "Далі" is clicked
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
                <h3>4/5</h3>
                <div className="first_story">
                    <div className="text_block">
                        <p>Ніко й Тора доїли свою хрумку смакоту й вирішили пограти в хованки. Ніко побіг уперед, очі в нього блищали від захоплення — він шукав ідеальне місце, щоб сховатися. Він помітив кущ із густим листям і тихенько заповз під нього, намагаючись не засміятись. Минали хвилини, а Тори все не було. Ніко визирнув з-за листя. Все ще нікого. Його хвилювання почало згасати. І раптом він почув тихий голос Тори за сусіднім деревом:
                            — Знайшла тебе! Вибач, що так довго — я не дуже швидка, — сором’язливо усміхнулась вона.
                            Ніко у відповідь посміхнувся — він відчув полегшення і радість, що подруга таки прийшла.
                        </p>
                    </div>

                    <div>
                        <img src="./images/fox_2_4.png" className="image_fox image_fox_2_4" />
                    </div>
                </div>
                <h2>Питання: Що відчував Ніко, коли Тора нарешті його знайшла?</h2>

                <div className="variables">
                    <div className="left_variant">
                        <button
                            className={`btn_variant wrong_btn ${selectedEmotion === 'Злість' ? 'red' : ''}`}
                            onClick={() => handleEmotionClick('Злість')}
                        >
                            Злість
                            <img src="./images/gif/module_2/fourth2_level/Anger4-unscreen.gif" className="image_gif" />
                        </button>
                        <button
                            className={`btn_variant correct_variant ${selectedEmotion === 'Смуток' ? 'green' : ''}`}
                            onClick={() => handleEmotionClick('Смуток')}
                        >
                            Радість
                            <img src="./images/gif/module_2/fourth2_level/Joy4-unscreen.gif" className="image_gif" />
                        </button>
                    </div>
                    <div className="right_variant">
                        <button
                            className={`btn_variant wrong_btn ${selectedEmotion === 'Злість' ? 'red' : ''}`}
                            onClick={() => handleEmotionClick('Злість')}
                        >
                            Смуток
                            <img src="./images/gif/module_2/fourth2_level/Sadness4-unscreen.gif" className="image_gif" />
                        </button>
                        <button
                            className={`btn_variant wrong_btn ${selectedEmotion === 'Злість' ? 'red' : ''}`}
                            onClick={() => handleEmotionClick('Злість')}
                        >
                            Сонливість
                            <img src="./images/gif/module_2/fourth2_level/Drowsiness4-unscreen.gif" className="image_gif" />
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

export default Second_4;