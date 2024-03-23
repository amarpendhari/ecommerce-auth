import Link from "next/link";
import { useEffect, useState } from "react";
import { validateForm } from "@/utils/helper";
import { useRouter } from "next/router";
import { toast } from 'react-toastify';
import styled from "styled-components";
import { FormWrapper } from "@/styles/formStyles";
import TextInput from "@/components/input/inputText";
import PasswordInput from "@/components/input/inputPassword";
import { ButtonPrimary } from "@/components/button/button";

const LoginWrapper = styled.div`

`

export default function Login() {

    const router = useRouter()
    const formOG = {
        email: '',
        password: ''
    }
    const formValidation = {
        email: 'email',
        password: 'password'
    }
    const [form, setForm] = useState(formOG)
    const [error, setError] = useState<any>({ formOG })
    const [showError, setShowError] = useState(false)
    const [users, setUsers] = useState<any>([])

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
        if (result === true && call && !users?.length) {
            toast.error('No User Found. Register to login')
        } else if (result === true && call && users?.length) {
            setError({})
            let newUser = users.findIndex((el: any) => el?.email === form?.email)
            if (newUser !== -1) {
                loginUser(form?.email)
            } else {
                toast.error('No User Found. Register to login')
            }
        } else {
            setError(result)
        }
    }

    const loginUser = (email: string) => {
        let user = users.find((el: any) => el?.email === form?.email)
        if(user) {
            localStorage.setItem("currentUser", JSON.stringify(user));
            router.push('/auth/otpVerify')
        }
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
        <LoginWrapper>
            <FormWrapper>
                <h2>Login</h2>
                <h3>Welcome back to ECOMMERCE</h3>
                <h4>The next gen business marketplace</h4>
                <form>
                    <TextInput value={form?.email} label={`Email`} error={error?.email} onChange={handleChange} name='email' />
                    <PasswordInput value={form?.password} label={`Password`} error={error?.password} onChange={handleChange} name='password' />
                    <ButtonPrimary onClick={handleSubmit}>LOGIN</ButtonPrimary>
                </form>
                <div className="divider"></div>
                <div className="form-nav">
                    <p>Dont have an Account? <Link href={`/auth/register`}>SIGN UP</Link></p>
                </div>
            </FormWrapper>
        </LoginWrapper>
    )
}