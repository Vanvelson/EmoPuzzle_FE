import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./lost_cap.css"

const LostCap = () => {

    const Pages = [
        {
          text: "​Міло, маленький лисеня, прокинувся від прохолодного вітерцю, що пробіг ніркою. Він позіхнув, потягнувся і потягнувся до своєї улюбленої червоної шапочки — але її не було на полиці. Міло моргнув і подивився ще раз. Все одно нічого. Він обнюхав куточки нірки, заглянув під ліжко з листя і навіть перевірив іграшкову скриньку. Порожньо. Він вийшов на вулицю, тягнучи лапи по землі, і сів біля великого каменя. Його вушка опустились, а хвостик обвився навколо нього. Міло мовчки дивився на траву.",
          questions:
            "Питання: Що відчував Міло, коли не знайшов свою червону шапочку?",
          answers: ["Тривога", "Смуток", "Злість", "Розгубленість"],
        },
        {
          text: "Раптом до нього підстрибала Белла, кролиця, з яскравою усмішкою. — Доброго ранку, Міло! — весело мовила вона. Міло не відповів, але Белла нахилила голову і запитала, що сталося. Почувши про зниклу шапочку, вона смикнула носиком. — Ходімо пошукаємо її! — сказала вона. Разом вони обшукали весь ліс — за кущами, на пагорбах і під грибами. Через деякий час очі Белли заблищали. — Подивись вгору! — вигукнула вона. На гілці дерева майоріло щось червоне й знайоме. Міло розплющив очі, радісно стрибнув і зірвав шапочку.",
          questions: "Питання: Що відчував Міло, коли Белла допомогла йому знайти шапочку?",
          answers: ["Радість", "Здивування", "Вдячність", "Полегшення"],
        },
        {
            text: "Щоб подякувати, Міло запросив Беллу на пікнік. Він взяв солодкі ягоди та лісовий чай, а Белла принесла свої улюблені хрусткі морквини. Вони знайшли сонячне місце і розстелили ковдру. Але щойно сіли, як небо вкрили сірі хмари. Грім загримів, і дощ залив усе навколо. Їжа намокла, а ковдра промокла. Ніс Белли зморщився, вона затулила голову вухами й штовхнула шишку лапкою, нічого не кажучи.",
            questions:
              "Питання: Що відчував Міло, коли не знайшов свою червону шапочку?: Що відчував Міло, коли Белла допомогла йому знайти шапочку?",
            answers: ["Розчарування", "Смуток", "Злість", "Зніяковіння"],
          },
        {
          text: "Вони хихотіли, сидячи під деревом, а краплі дощу м’яко стукали по листю над головами. Міло знову відкрив кошик і витяг дві солодкі ягоди, які не намокли. — Дивись, ягоди пережили бурю! — усміхнувся він. Белла взяла одну й радісно захрумтіла. — А з лісовим чаєм — ще смачніше! Вони підняли свої маленькі чашки й легенько цокнулись ними, ніби за тост. — За пікніки під дощем! — засміялася Белла. Хоча ковдра промокла, а їжа була зіпсована, їм було тепло й весело разом.",
          questions: "Питання: Що відчувала Белла, коли Міло назвав її доброю?",
          answers: ["Радість", "Розчарування", "Злість", "Зніяковіння"],
        },
        {
            text: "Коли дощ припинився, небо стало м’яким і золотавим. Сонячні промені пробилися крізь хмари, а крихітні краплі блищали на кожному листочку. Міло й Белла повільно йшли назад до нори, балакаючи й сміючись. Дорогою Белла побачила равлика, який застряг на мокрій стежці. Вона обережно підняла його й поставила на сухий камінець. — Ось і безпечно, — тихо сказала вона. Міло усміхнувся. — Ти завжди комусь допомагаєш. Це дуже добре з твого боку. Белла моргнула, а потім широко усміхнулась. — Дякую, Міло. Мені дуже приємно.",
            questions:
              "Питання: Що відчувала Белла, коли Міло назвав її доброю?",
            answers: ["Вдячність", "Роздратування", "Зніяковіння", "Подив"],
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
            navigate('/bella'); // Navigate to the next page when "Смуток" is clicked
        } else {
            setSelectedEmotion(emotion);
            setShowModal(true); // Show modal for other emotions
        }
    };

    const handleNextClick = () => {
        navigate('/bella'); // Navigate to the next page when "Далі" is clicked
    };


    return (
        <div>
            <nav className="container">
            <img src="./images/logo1.png" alt="" className="logo"/>
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
            <h3>1/5</h3>
                <div className="first_story">
                    <div className="text_block">
                        <p>Міло, маленький лисеня, прокинувся від прохолодного вітерцю, що пробіг ніркою. Він позіхнув, потягнувся і потягнувся до своєї улюбленої червоної шапочки — але її не було на полиці. Міло моргнув і подивився ще раз. Все одно нічого. Він обнюхав куточки нірки, заглянув під ліжко з листя і навіть перевірив іграшкову скриньку. Порожньо.
                            Він вийшов на вулицю, тягнучи лапи по землі, і сів біля великого каменя. Його вушка опустились, а хвостик обвився навколо нього. Міло мовчки дивився на траву.</p>
                    </div>

                    <div>
                        <img src="./images/first_story1.png" className="image_fox"/>
                    </div>
                </div>
                <h2>Питання:  Що відчував Міло, коли не знайшов свою червону шапочку?</h2>

                <div className="variables">
                    <div className="left_variant">
                        <button
                            className={`btn_variant wrong_btn ${selectedEmotion === 'Тривога' ? 'red' : ''}`}
                            onClick={() => handleEmotionClick('Тривога')}
                        >
                            Тривога
                            <img src="./images/anxiety-unscreen.gif" className="image_gif" />
                        </button>
                        <button
                            className={`btn_variant wrong_btn ${selectedEmotion === 'Злість' ? 'red' : ''}`}
                            onClick={() => handleEmotionClick('Злість')}
                        >
                            Злість
                            <img src="./images/anger-unscreen.gif" className="image_gif" />
                        </button>
                    </div>
                    <div className="right_variant">
                        <button
                            className={`btn_variant correct_variant ${selectedEmotion === 'Смуток' ? 'green' : ''}`}
                            onClick={() => handleEmotionClick('Смуток')}
                        >
                            Смуток
                            <img src="./images/sadness-unscreen.gif" className="image_gif" />
                        </button>
                        <button 
                            className={`btn_variant wrong_btn ${selectedEmotion === 'Розгубленість' ? 'red' : ''}`}
                            onClick={() => handleEmotionClick('Розгубленість')}
                        >
                            Розгубленість
                            <img src="./images/confusion-unscreen.gif" className="image_gif" />
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

export default LostCap;