import React, { useState } from 'react'
import styles from './Formulario.module.css'

const Formulario = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [alerta, setAlerta] = useState('')

    const onSubmit = async (e:React.FormEvent) => {
        e.preventDefault()

        const dados = {username, email, password}

        try {
            const api = await fetch('http://localhost:3000/singUp', {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(dados),
            })

            if (api.ok) {
                setAlerta('Cadastrado')
                setUsername('')
                setEmail('')
                setPassword('')
            } else {
                setAlerta('Erro')
            }
        } catch (error) {
            setAlerta(`Erro: ${error}`)
        }
    }

    return (
        <div>
            <form action="" className={styles.form} onSubmit={onSubmit}>
                <div className={styles.card}>
                    <label htmlFor="text" className={styles.label}> Usuario</label>
                    <input className={styles.input} id="text" type="text" placeholder='Digite seu usuario' onChange={(e) => setUsername(e.target.value)} value={username} required/>
                </div>
                <div className={styles.card}>    
                    <label htmlFor="email" className={styles.label}> Email</label>
                    <input className={styles.input} id="email" type="email" placeholder='Digite seu email' onChange={(e) => setEmail(e.target.value)} value={email} required/>
                </div>
                <div className={styles.card}>  
                    <label htmlFor="password" className={styles.label}> Senha</label>
                    <input className={styles.input} id="password" type="password" placeholder='Digite sua senha' onChange={(e) => setPassword(e.target.value)} value={password} required/>
                </div>
                    <button type="submit" className={styles.btn}>Cadastrar</button>
            </form>
            <div>{alerta}</div>
        </div>
    )
}

export default Formulario