import React from 'react'
import { Link } from 'react-router-dom'
import s from './NotFoundPage.module.css'

export default function NotFoundPage() {
  return (
    <div className={`${s.notFoundPage}`}>
      <img className={`${s.img}`} src='https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=740&t=st=1700495776~exp=1700496376~hmac=d5a2abee7cdc57e0f86743fba6769a9441df20cc2d570fd5fa4194799c3ae71d' />
      <Link className={`${s.link}`} to='/products'>To main page</Link>
    </div>
  )
}
