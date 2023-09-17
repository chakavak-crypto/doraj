'use client';

import * as React from "react";
import {useState} from "react";
import SignupCard from "@/features/SignupCard";
import VerifyCard from "@/features/VerifyCard";
import {ENDPOINTS} from "@/tools/constants";
import {useTranslation} from "@/app/i18n/client";
import {useRouter} from "next/navigation";

export default function CkkSignupType1(){
  const [form, setForm] = useState<'cred' | 'otp'>('cred');
  const [type, setType] = useState<'email' | 'mobile'>('mobile');
  const [username, setUsername] = useState('');
  const [token, setToken] = useState('');
  const [t] = useTranslation();
  const router = useRouter();
  const handleSuccessSignup = (type: 'email' | 'mobile', username: string, token: string) => {
    setType(type);
    setUsername(username);
    setToken(token);
    setForm('otp');
  }
  const handleSuccessVerifyCode = (token) => {
    localStorage.setItem('access_token', token)
    router.push('/')
  }
  return (
    <>
      {form === 'cred' && <SignupCard onSuccess={handleSuccessSignup}/>}
      {form === 'otp' && (
        <VerifyCard
          type={type}
          username={username}
          token={token}
          onEdit={() => setForm('cred')}
          submitEndpoint={ENDPOINTS.VERIFY_SIGNUP_OTP}
          resendEndpoint={ENDPOINTS.RESEND_SIGNUP_OTP}
          submitLabel={t('signup')}
          onSuccess={handleSuccessVerifyCode}
          successMessage={t('signup_success')}
        />
      ) }
    </>
  );
}