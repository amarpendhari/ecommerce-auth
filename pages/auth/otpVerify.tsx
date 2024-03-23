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
import InputOTP from "@/components/input/inputOTP";

const OTPVerifyWrapper = styled.div`

`

export default function OTPVerify() {

    const router = useRouter()
    const formOG = {
        code: '',
    }
    const formValidation = {
        code: '',
    }
    const [form, setForm] = useState(formOG)
    const [error, setError] = useState<any>({ formOG })
    const [showError, setShowError] = useState(false)
    const [users, setUsers] = useState<any>([])

    const handleChange = (e: any) => {
        console.log(e)
        // const { name, value } = e?.target
        setForm({
            ...form,
            ['code']: e
        })
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setShowError(true)
        pageFormValidation(true)
    }

    const pageFormValidation = async (call = false) => {
        const result = await validateForm(form, formValidation, [])
        if(result) {
            toast.success('Logged In Successfully')
            router.push('/dashboard')
        } else {
            setError(result)
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
        <OTPVerifyWrapper>
            <FormWrapper>
                <h2>Verify your email</h2>
                <p className="desc">Enter the 8 digit code you have received on 
                <br></br>
                    <span>a***@gmail.com</span>
                </p>
                <form>
                    <InputOTP value={form?.code} label={`Code`} onChange={handleChange} name='code' />
                    <ButtonPrimary>VERIFY</ButtonPrimary>
                </form>
                <div className="divider"></div>
                <div className="form-nav">
                    <p>Dont have an Account? <a>SIGN UP</a></p>
                </div>
            </FormWrapper>
        </OTPVerifyWrapper>
    )
}