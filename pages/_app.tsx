import AppLayout from '@/components/layout/appLayout';
import '@/styles/globals.css'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: any) {

  const router = useRouter()
  const unAuthRoutes = ['/auth/login', '/auth/register', '/auth/otpVerify']
  
  useEffect(() => {
    if (localStorage?.getItem('currentUser')) {
      router.push('/dashboard')
    } else if (!unAuthRoutes.includes(router?.pathname)) {
      router.push('/auth/login')
    }
  }, [])

  return <AppLayout>
    <Component {...pageProps} />
    <ToastContainer autoClose={3000} />
  </AppLayout>
}