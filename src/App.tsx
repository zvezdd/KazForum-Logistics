import { useState } from 'react'
import { ContactForm } from './components/ContactForm'
import './App.css'

const PROGRAM_URL: Record<'ru' | 'en' | 'kz', string> = {
  ru: '/program-ru.pptx',
  en: '/program-en.pptx',
  kz: '/program-kz.pptx',
}

const t = {
  ru: {
    headerTitle: 'Казахстанско-Германский форум',
    headerSlogan: 'Цифровизация, человеческий потенциал, транзитные возможности',
    programTitle: 'Программа форума',
    programDesc: 'Скачайте приглашение на форум.',
    downloadBtn: 'Скачать приглашение (RU)',
    registrationTitle: 'Регистрация',
    registrationDesc: 'Для участия в форуме заполните форму регистрации.',
    partnersTitle: 'Партнёры',
    partnersAlt: 'Партнёры форума',
    directionsTitle: 'Схема проезда',
    directionsAddress: 'Satbayev University, конференц-зал, ул. Сатпаева, 22, г. Алматы',
    contactsTitle: 'Контакты',
    contactPerson: 'Контактное лицо:',
    tel: 'Тел:',
    whatsapp: 'WhatsApp:',
    email: 'Email:',
  },
  en: {
    headerTitle: 'Kazakhstan–Germany Forum',
    headerSlogan: 'Digitalization, human potential, transit opportunities',
    programTitle: 'Forum programme',
    programDesc: 'Download the forum invitation.',
    downloadBtn: 'Download invitation (EN)',
    registrationTitle: 'Registration',
    registrationDesc: 'To take part in the forum, please fill in the registration form.',
    partnersTitle: 'Partners',
    partnersAlt: 'Forum partners',
    directionsTitle: 'How to get there',
    directionsAddress: 'Satbayev University, conference hall, 22 Satpayev St., Almaty',
    contactsTitle: 'Contacts',
    contactPerson: 'Contact person:',
    tel: 'Phone:',
    whatsapp: 'WhatsApp:',
    email: 'Email:',
  },
  kz: {
    headerTitle: 'Қазақстан-Германия форумы',
    headerSlogan: 'Цифрландыру, адами әлеует, транзиттік мүмкіндіктер',
    programTitle: 'Форум бағдарламасы',
    programDesc: 'Форумға шақыруды жүктеп алыңыз.',
    downloadBtn: 'Шақыруды жүктеу (KZ)',
    registrationTitle: 'Тіркелу',
    registrationDesc: 'Форумға қатысу үшін тіркелу нысанын толтырыңыз.',
    partnersTitle: 'Серіктестер',
    partnersAlt: 'Форум серіктестері',
    directionsTitle: 'Жол сызбасы',
    directionsAddress: 'Satbayev University, конференц-зал, Сатпаев к., 22, Алматы қ.',
    contactsTitle: 'Байланыс',
    contactPerson: 'Байланыс тұлғасы:',
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
          <h1 className="header-title">{text.headerTitle}</h1>
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
              <p>Уважаемые коллеги! Приглашаем Вас принять участие в Казахстанско-Германском транспортно-логистическом форуме «Цифровизация, человеческий потенциал, транзитные возможности».</p>
              <p>Форум состоится <strong>14 мая 2026 года</strong> в г. Алматы на базе <strong>Satbayev University</strong> (ул. Сатпаева, 22). Форум объединит представителей министерств, вузов и компаний транспортно-логистической отрасли Казахстана, отраслевых экспертов Германии и организаций стран Центральной Азии.</p>
              <p>Мероприятие направлено на обсуждение цифровизации логистических систем, развития человеческого капитала и транзитного потенциала, а также на укрепление партнёрства между наукой, образованием и бизнесом.</p>
            </div>
          )}
          {lang === 'en' && (
            <div className="info-content">
              <p>Dear colleagues! We invite you to take part in the Kazakhstan–Germany Transport and Logistics Forum "Digitalization, Human Potential, Transit Opportunities".</p>
              <p>The Forum will be held on <strong>14 May 2026</strong> in Almaty at <strong>Satbayev University</strong> (22 Satpayev Street). It will bring together representatives of ministries, universities and transport and logistics companies from Kazakhstan, sector experts from Germany, and organizations from Central Asian countries.</p>
              <p>The event will focus on digitalization of logistics systems, development of human capital and transit potential, and strengthening partnership between science, education and business.</p>
            </div>
          )}
          {lang === 'kz' && (
            <div className="info-content">
              <p>Құрметті әріптестер! Сізді «Цифрландыру, адами әлеует, транзиттік мүмкіндіктер» тақырыбындағы Қазақстан-Германия көлік-логистика форумына қатысуға шақырамыз.</p>
              <p>Форум <strong>2026 жылдың 14 мамырында</strong> Алматы қаласында <strong>Satbayev University</strong> базасында (Сатпаев к., 22) өтеді. Форум Қазақстанның министрліктері, жоғары оқу орындары мен көлік-логистика саласының компаниялары өкілдерін, Германияның салалық сарапшылары мен Орталық Азия елдерінің ұйымдарын біріктіреді.</p>
              <p>Іс-шара логистикалық жүйелерді цифрландыруды, адами капитал мен транзиттік әлеуетті дамытуды, сондай-ақ ғылым, білім және бизнес арасындағы серіктестікті нығайтуға бағытталған.</p>
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
            <img src="/logo-ministry.png" alt="Министерство транспорта РК" className="partner-logo" />
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
          <p className="block-desc">{text.directionsAddress}</p>
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
          <p className="footer-contact"><strong>{text.contactPerson}</strong> Болатқызы Салтанат</p>
          <p className="footer-contact"><strong>{text.tel}</strong> <a href="tel:+77057696077">+7 705 769 6077</a></p>
          <p className="footer-contact"><strong>{text.whatsapp}</strong> <a href="https://wa.me/77057696077">+7 705 769 6077</a></p>
          <p className="footer-contact"><strong>{text.email}</strong> <a href="mailto:s.bolatkyzy@satbayev.university">s.bolatkyzy@satbayev.university</a></p>
        </div>
      </footer>
    </div>
  )
}

export default App
