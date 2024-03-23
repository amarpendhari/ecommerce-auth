import Link from "next/link";
import { useEffect, useState } from "react";
import { validateForm } from "@/utils/helper";
import { useRouter } from "next/navigation";
import { toast } from 'react-toastify';
import { FormWrapper } from "@/styles/formStyles";
import TextInput from "@/components/input/inputText";
import PasswordInput from "@/components/input/inputPassword";
import { ButtonPrimary } from "@/components/button/button";
import styled from "styled-components";

const RegisterWrapper = styled.div`

`

export default function Register() {

    const router = useRouter()
    const formOG = {
        name: '',
        email: '',
        password: ''
    }
    const formValidation = {
        name: '',
        email: 'email',
        password: 'password'
    }
    const [form, setForm] = useState(formOG)
    const [error, setError] = useState<any>({ formOG })
    const [showError, setShowError] = useState(false)
    const [users, setUsers] = useState([])

    const handleChange = (e: any) => {
        const { name, value } = e?.target
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setShowError(true)
        pageFormValidation(true)
    }

    const pageFormValidation = async (call = false) => {
        const result = await validateForm(form, formValidation, [])
        console.log('result', result)
        if (result === true && call) {
            setError({})
            let newUser = users.findIndex((el: any) => el?.email == form?.email)
            if (newUser === -1) {
                registerUser(form)
            } else {
                toast.error('User Already Registered !!!')
            }
        } else {
            setError(result)
        }
    }

    const registerUser = (user: any) => {
        let userArr = [...users, user]
        toast.success('Registered & Logged in Successfully')
        localStorage.setItem("users", JSON.stringify(userArr));
        localStorage.setItem("currentUser", JSON.stringify(user));
        router.push('/dashboard')
    }

    const getUsers = () => {
        let userArr = JSON.parse(localStorage.getItem('users') || '')
        setUsers(userArr || [])
    }

    useEffect(() => {
        if(localStorage.getItem('users')) getUsers()
    }, [])

    useEffect(() => {
        if (showError) pageFormValidation(false)
    }, [form])

    return (
        <RegisterWrapper>
            <FormWrapper>
                <h2>Create your account</h2>
                <form>
                    <TextInput value={form?.name} error={error?.name} label={`Name`} onChange={handleChange} name='name' />
                    <TextInput value={form?.email} error={error?.email} label={`Email`} onChange={handleChange} name='email' />
                    <PasswordInput value={form?.password} error={error?.password} label={`Password`} onChange={handleChange} name='password' />
                    <ButtonPrimary onClick={handleSubmit}>CREATE ACCOUNT</ButtonPrimary>
                </form>
                <div className="divider"></div>
                <div className="form-nav">
                    <p>Have an Account? <Link href={`/auth/login`}>LOGIN</Link></p>
                </div>
            </FormWrapper>
        </RegisterWrapper>
    )
}