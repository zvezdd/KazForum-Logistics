import { useState } from 'react'
import { ContactForm } from './components/ContactForm'
import './App.css'

const PROGRAM_URL: Record<'ru' | 'en' | 'kz', string> = {
  ru: '/RU_Invitation.pdf',
  en: '/ENG_Invitation.pdf',
  kz: '/KAZ_Invitation.pdf',
}

const t = {
  ru: {
    headerSupTitle: 'Первый Казахстанско-Германский транспортно-логистический форум',
    headerTitle: 'Казахстанско-Германский форум',
    headerSlogan: 'Цифровизация, человеческий капитал, транзитные возможности',
    programTitle: 'Программа форума',
    programDesc: 'Скачайте приглашение на форум.',
    downloadBtn: 'Скачать приглашение (RU)',
    registrationTitle: 'Регистрация',
    registrationDesc: 'Для участия в форуме заполните форму регистрации.',
    partnersTitle: 'Партнёры',
    partnersAlt: 'Партнёры форума',
    directionsTitle: 'Схема проезда',
    directionsAddress: 'Satbayev University, Аудитория 343 -Главный Учебный Корпус, ул. Сатпаева, 22, г. Алматы',
    contactsTitle: 'Контакты',
    contactPerson: 'Контактное лицо:',
    secondContactName: 'Жазира Тымбаева',
    tel: 'Тел:',
    whatsapp: 'WhatsApp:',
    email: 'Email:',
  },
  en: {
    headerSupTitle: 'First Kazakhstan-Germany Transport and Logistics Forum',
    headerTitle: 'Kazakhstan–Germany Forum',
    headerSlogan: 'Digitalization, Human Capital, Transit Opportunities',
    programTitle: 'Forum programme',
    programDesc: 'Download the forum invitation.',
    downloadBtn: 'Download invitation (EN)',
    registrationTitle: 'Registration',
    registrationDesc: 'To take part in the forum, please fill in the registration form.',
    partnersTitle: 'Partners',
    partnersAlt: 'Forum partners',
    directionsTitle: 'How to get there',
    directionsAddress: 'Satbayev University, Auditorium 343 -Main Academic Building, 22 Satpayev St., Almaty',
    contactsTitle: 'Contacts',
    contactPerson: 'Contact person:',
    secondContactName: 'Zhazira Tymbayeva',
    tel: 'Phone:',
    whatsapp: 'WhatsApp:',
    email: 'Email:',
  },
  kz: {
    headerSupTitle: 'Алғашқы Қазақстан-Германия көлік және логистика форумы',
    headerTitle: 'Қазақстан-Германия форумы',
    headerSlogan: 'Цифрландыру, адами капитал, транзиттік мүмкіндіктер',
    programTitle: 'Форум бағдарламасы',
    programDesc: 'Форумға шақыруды жүктеп алыңыз.',
    downloadBtn: 'Шақыруды жүктеу (KZ)',
    registrationTitle: 'Тіркелу',
    registrationDesc: 'Форумға қатысу үшін тіркелу нысанын толтырыңыз.',
    partnersTitle: 'Серіктестер',
    partnersAlt: 'Форум серіктестері',
    directionsTitle: 'Жол сызбасы',
    directionsAddress: 'Satbayev University, Аудитория 343- Бас Оқу Ғимараты, Сатпаев к., 22, Алматы қ.',
    contactsTitle: 'Байланыс',
    contactPerson: 'Байланыс тұлғасы:',
    secondContactName: 'Жазира Тымбаева',
    tel: 'Тел:',
    whatsapp: 'WhatsApp:',
    email: 'Email:',
  },
} as const

function App() {
  const [lang, setLang] = useState<'ru' | 'en' | 'kz'>('ru')
  const text = t[lang]

  return (
    <div className="app">
      <header className="header">
        <nav className="header-nav">
          <div className="header-logos">
            <img src="/logo-bvl.png" alt="BVL Chapter Eurasia" className="header-logo header-logo--bvl" />
            <img src="/logo-german-cooperation.png" alt="German Cooperation" className="header-logo header-logo--gc" />
            <img src="/logo-satbayev.png" alt="Satbayev University" className="header-logo header-logo--satbayev" />
          </div>
          <div className="lang-tabs lang-tabs--header">
            <button type="button" className={lang === 'ru' ? 'lang-tab active' : 'lang-tab'} onClick={() => setLang('ru')}>RU</button>
            <button type="button" className={lang === 'en' ? 'lang-tab active' : 'lang-tab'} onClick={() => setLang('en')}>EN</button>
            <button type="button" className={lang === 'kz' ? 'lang-tab active' : 'lang-tab'} onClick={() => setLang('kz')}>KZ</button>
          </div>
        </nav>
        <div className="header-hero">
          <div className="header-accent" />
          <h1 className="header-title">{text.headerSupTitle}</h1>
          <p className="header-slogan">{text.headerSlogan}</p>
          <div className="header-date-badge">
            {lang === 'ru' && '14 мая 2026 · Алматы, Satbayev University'}
            {lang === 'en' && '14 May 2026 · Almaty, Satbayev University'}
            {lang === 'kz' && '2026 жылғы 14 мамыр · Алматы, Satbayev University'}
          </div>
        </div>
      </header>

      <section className="block block-info" id="info">
        <div className="block-inner">
          {lang === 'ru' && (
            <div className="info-content">
              <p>Уважаемые дамы и господа! <br/>
              Satbayev University (Казахстан) совместно с Bundesvereinigung Logistic (BVL, Германия) и Германским обществом по международному сотрудничеству (Deutsche Gesellschaft für Internationale Zusammenarbeit GmbH, GIZ) приглашает Вас принять участие в <strong>Первом Казахстанско-Германском транспортно-логистическом форуме «Цифровизация, человеческий капитал, транзитные возможности»</strong>, который состоится <strong>14 мая 2026 года</strong> в г. Алматы, Республика Казахстан, на базе Satbayev University по адресу: ул. Сатпаева, 22. <strong>Аудитория 343 -Главный Учебный Корпус.</strong>
              </p>
            </div>
          )}
          {lang === 'en' && (
            <div className="info-content">
              <p>Dear Ladies and Gentlemen, <br/> Satbayev University (Kazakhstan), in cooperation with Federal Association of Logistics (BVL Bundesvereinigung Logistik, Germany) and the Deutsche Gesellschaft für internationale Zusammenarbeit (giz), cordially invites you to participate in the <strong>1st Kazakh-German Transport and Logistics Forum “Digitalization, Human Capital, Transit Opportunities,”</strong> which will take place on <strong>May 14, 2026</strong>, in Almaty, Republic of Kazakhstan, at Satbayev University, 22 Satpayev Street. <strong>Auditorium 343 -Main Academic Building.</strong>
              </p>
            </div>
          )}
          {lang === 'kz' && (
            <div className="info-content">
              <p>Құрметті ханымдар мен мырзалар! <br/>
                  Satbayev University (Қазақстан) және Bundesvereinigung Logistik (BVL, Германия) Сіздерді <strong>2026 жылғы 14 мамырда</strong> Қазақстан Республикасы, Алматы қаласында, Satbayev University базасында (мекенжайы: Сәтбаев көшесі, 22. <strong>Аудитория 343- Бас Оқу Ғимараты</strong> ) өтетін «Цифрландыру, адами капитал, транзиттік мүмкіндіктер» тақырыбындағы <strong>Бірінші Қазақстан-Германия көлік-логистика форумына</strong> қатысуға шақырады.
</p>
            </div>
          )}
        </div>
      </section>

      <section className="block block-download" id="download">
        <div className="block-inner">
          <h2 className="block-title">{text.programTitle}</h2>
          <p className="block-desc">{text.programDesc}</p>
          <div className="program-banner">
            <img
              src={`/banner-${lang}.png`}
              alt={text.programTitle}
              className="program-banner-img"
            />
          </div>
          <div className="download-buttons">
            <a href={PROGRAM_URL[lang]} className="btn btn-download" download>
              <span className="btn-icon">↓</span> {text.downloadBtn}
            </a>
          </div>
        </div>
      </section>

      <section className="block block-registration" id="registration">
        <div className="block-inner">
          <h2 className="block-title">{text.registrationTitle}</h2>
          <p className="block-desc">{text.registrationDesc}</p>
          <div className="registration-card">
            <ContactForm lang={lang} />
          </div>
        </div>
      </section>

      <section className="block block-partners" id="partners">
        <div className="block-inner">
          <h2 className="block-title">{text.partnersTitle}</h2>
          <div className="partners-row">
            <img src="/logo-bvl.png" alt="BVL Bundesvereinigung Logistik" className="partner-logo" />
            <img src="/logo-kidi.png" alt="Kazakhstan Industry Development Institute" className="partner-logo" />
            <img src="/logo-german-cooperation.png" alt="German Cooperation" className="partner-logo" />
            {/* <img src="/logo-giz.png" alt="GIZ" className="partner-logo" /> */}
            <img src="/logo-satbayev.png" alt="Satbayev University" className="partner-logo" />
          </div>
        </div>
      </section>

      <section className="block block-directions" id="directions">
        <div className="block-inner">
          <h2 className="block-title">{text.directionsTitle}</h2>
          <p className="block-desc block-desc--multiline">{text.directionsAddress}</p>
          <div className="directions-map">
            {lang === 'ru' && <img src="/map-ru.svg" alt="Схема проезда" className="directions-map-img" />}
            {lang === 'en' && <img src="/map-en.svg" alt="How to get there" className="directions-map-img" />}
            {lang === 'kz' && <img src="/map-ru.svg" alt="Жол сызбасы" className="directions-map-img" />}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <h2 className="footer-title">{text.contactsTitle}</h2>
          <p className="footer-contact"><strong>{text.contactPerson}</strong> Салтанат Болатқызы</p>
          <p className="footer-contact"><strong>{text.tel}</strong> <a href="tel:+77057696077">+7 705 769 6077</a></p>
          <p className="footer-contact"><strong>{text.whatsapp}</strong> <a href="https://wa.me/77057696077">+7 705 769 6077</a></p>
          <p className="footer-contact"><strong>{text.email}</strong> <a href="mailto:s.bolatkyzy@satbayev.university">s.bolatkyzy@satbayev.university</a></p>
          <p className="footer-contact"><strong>{text.contactPerson}</strong> {text.secondContactName}</p>
          <p className="footer-contact"><strong>{text.tel}</strong> <a href="tel:+77017867603">+7 701 786 7603</a></p>
          <p className="footer-contact"><strong>{text.whatsapp}</strong> <a href="https://wa.me/77017867603">+7 701 786 7603</a></p>
          <p className="footer-contact"><strong>{text.email}</strong> <a href="mailto:z.tymbayeva@satbayev.university">z.tymbayeva@satbayev.university</a></p>
        </div>
      </footer>
    </div>
  )
}

export default App
