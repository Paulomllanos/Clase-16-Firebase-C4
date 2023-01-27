import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { auth } from '../Config/Firebase';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
    const [register, setRegister] = useState(false)
    const [redirigir, setRedirigir] = useState(false)


    const handlerSubmit = async(e) => {
        e.preventDefault()

        const email = e.target.email.value
        const password = e.target.password.value

        if(register){
            await createUserWithEmailAndPassword(auth, email, password)
            setRedirigir(true)
        } else {
            await signInWithEmailAndPassword(auth, email, password)
            setRedirigir(true)
        }

        
    }

    if(redirigir === true){
        return <Navigate to='/' />
    }

  return (
    <div>
        <h1>Sign In</h1>
        <Form onSubmit={handlerSubmit}>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' placeholder='Email...' name='email'  />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder='Password...' name='password'  />
            </Form.Group>

            <Button variant='primary' type='submit' onClick={() => redirigir}>
                {register ? 'Registrarse' : 'Iniciar Sesion'}
            </Button>

            <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Button variant='success' className='mt-4 form-control'  onClick={() => setRegister(!register)}>
                {register ? 'Estas Registrado? Inicia Sesion' : 'No estas Registrado? Registrate'}
            </Button>
            </Form.Group>
        </Form>
    </div>
  )
}

export default Login