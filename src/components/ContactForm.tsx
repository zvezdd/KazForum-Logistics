import { useState } from 'react'
import type { FormEvent } from 'react'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'

type Lang = 'ru' | 'en'

const copy = {
  ru: {
    title: 'Регистрация на форум',
    name: 'ФИО',
    org: 'Организация',
    country: 'Страна',
    email: 'Электронная почта',
    phone: 'Номер телефона',
    submit: 'Зарегистрироваться',
    submitting: 'Отправка…',
    required: 'Пожалуйста, заполните все поля.',
    success: 'Заявка успешно отправлена.',
    error: 'Произошла ошибка. Попробуйте позже.',
    phName: 'Иванов Иван Иванович',
    phOrg: 'Название организации',
    phCountry: 'Казахстан',
    phEmail: 'example@mail.com',
    phPhone: '+7 705 000 00 00',
  },
  en: {
    title: 'Forum registration',
    name: 'Full name',
    org: 'Organization',
    country: 'Country',
    email: 'Email',
    phone: 'Phone number',
    submit: 'Register',
    submitting: 'Submitting…',
    required: 'Please fill in all fields.',
    success: 'Registration submitted successfully.',
    error: 'Something went wrong. Please try again later.',
    phName: 'John Smith',
    phOrg: 'Company / Organization',
    phCountry: 'Kazakhstan',
    phEmail: 'example@mail.com',
    phPhone: '+7 705 000 00 00',
  },
} as const

export function ContactForm({ lang = 'ru' }: { lang?: Lang }) {
  const t = copy[lang]
  const [name, setName] = useState('')
  const [organization, setOrganization] = useState('')
  const [country, setCountry] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const trimmedName = name.trim()
    const trimmedOrganization = organization.trim()
    const trimmedCountry = country.trim()
    const trimmedEmail = email.trim()
    const trimmedPhone = phone.trim()
    if (!trimmedName || !trimmedOrganization || !trimmedCountry || !trimmedEmail || !trimmedPhone) {
      setMessage({ type: 'error', text: t.required })
      return
    }
    setMessage(null)
    setLoading(true)
    try {
      await addDoc(collection(db, 'registrations'), {
        name: trimmedName,
        organization: trimmedOrganization,
        country: trimmedCountry,
        email: trimmedEmail,
        phone: trimmedPhone,
        lang,
        createdAt: serverTimestamp(),
      })
      setMessage({ type: 'success', text: t.success })
      setName('')
      setOrganization('')
      setCountry('')
      setEmail('')
      setPhone('')
    } catch (err) {
      setMessage({
        type: 'error',
        text: err instanceof Error ? err.message : t.error,
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="registration-form" aria-label={t.title}>
      <div className="form-group">
        <label htmlFor="name">{t.name} *</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          disabled={loading}
          autoComplete="name"
          placeholder={t.phName}
        />
      </div>
      <div className="form-group">
        <label htmlFor="organization">{t.org} *</label>
        <input
          id="organization"
          type="text"
          value={organization}
          onChange={(e) => setOrganization(e.target.value)}
          required
          disabled={loading}
          placeholder={t.phOrg}
        />
      </div>
      <div className="form-group">
        <label htmlFor="country">{t.country} *</label>
        <input
          id="country"
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
          disabled={loading}
          placeholder={t.phCountry}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">{t.email} *</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={loading}
          autoComplete="email"
          placeholder={t.phEmail}
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">{t.phone} *</label>
        <input
          id="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          disabled={loading}
          autoComplete="tel"
          placeholder={t.phPhone}
        />
      </div>
      {message && (
        <p className={`form-message form-message--${message.type}`} role="alert">
          {message.text}
        </p>
      )}
      <button type="submit" disabled={loading} className="registration-submit">
        {loading ? t.submitting : t.submit}
      </button>
    </form>
  )
}
