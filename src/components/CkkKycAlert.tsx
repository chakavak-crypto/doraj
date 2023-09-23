'use client';

import CkkWarningAlertType1 from "@/components/CkkWarningAlertType1";
import {useTranslation} from "@/app/i18n/client";

export default function CkkKycAlert(){
  const [t] = useTranslation();

  return (
    <CkkWarningAlertType1 severity={'warning'}>{t('kyc_message')}</CkkWarningAlertType1>
  );
}