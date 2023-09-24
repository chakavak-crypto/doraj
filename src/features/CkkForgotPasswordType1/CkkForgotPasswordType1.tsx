'use client';

import * as React from "react";
import {useState} from "react";
import VerifyCard from "@/features/VerifyCard";
import {ENDPOINTS} from "@/tools/constants";
import {useTranslation} from "@/app/i18n/client";
import {useRouter} from "next/navigation";
import ForgotCard from "@/features/ForgotCard";
import NewPasswordCard from "@/features/NewPasswordCard";

export default function CkkForgotPasswordType1(){
  const [form, setForm] = useState<'cred' | 'otp' | 'pass'>('cred');
  const [type, setType] = useState<'email' | 'mobile'>('mobile');
  const [username, setUsername] = useState('');
  const [token, setToken] = useState('');
  const [resetToken, setResetToken] = useState('')
  const [t] = useTranslation();
  const router = useRouter();
  const handleSendResetPasswordToken = (type: 'email' | 'mobile', username: string, token: string) => {
    setType(type);
    setUsername(username);
    setToken(token);
    setForm('otp');
  }
  const handleSuccessVerifyCode = (token) => {
    setResetToken(token)
    setForm('pass');
  }
  const handleNewPasswordSuccess = () => {
    setTimeout(() => {
      router.push('/login')
    }, 2000)
  }
  return (
    <>
      {form === 'cred' && <ForgotCard onSuccess={handleSendResetPasswordToken}/>}
      {form === 'otp' && (
        <VerifyCard
          type={type}
          username={username}
          token={token}
          onEdit={() => setForm('cred')}
          submitEndpoint={ENDPOINTS.VERIFY_FORGOT_OTP}
          resendEndpoint={ENDPOINTS.RESEND_FORGOT_OTP}
          submitLabel={t('continue')}
          onSuccess={handleSuccessVerifyCode}
        />
      ) }
      {form === 'pass' && (
        <NewPasswordCard
          token={resetToken}
          onSuccess={handleNewPasswordSuccess}
        />
      )}
    </>
  );
}