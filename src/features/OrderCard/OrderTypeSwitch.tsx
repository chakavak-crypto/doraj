import CkkButtonSwitch from "@/components/CkkButtonSwitch";
import {useCallback, useState} from "react";
import {useRouter} from "next/navigation";
import {useTranslation} from "@/app/i18n/client";

export default function OrderTypeSwitch(props: OrderCardProps){
  const [value, setValue] = useState<0 | 1>(props?.type === 'buy' ? 0 : 1)
  const [t] = useTranslation();
  const router = useRouter();

  const handleChange = useCallback((newVal) => {
    if(value === newVal) return;

    setValue(newVal);

    const type = newVal === 0 ? 'buy' : 'sell';

    if(!Boolean(props.asset)){
      router.push(`/order/${type}`);
      return;
    }

    const asset = props.asset;

    if(!Boolean(props.volume)){
      router.push(`/order/${type}/${asset}`);
      return;
    }

    const volume = props.volume;

    router.push(`/order/${type}/${asset}/${volume}`);

  }, [props]);

  return (
    <CkkButtonSwitch
      value={value}
      onChange={handleChange}
      firstTitle={t('buy')}
      firstButtonProps={{
        color: value === 0 ? 'success' : 'inherit'
      }}
      secondTitle={t('sell')}
      secondButtonProps={{
        color: value === 1 ? 'error' : 'inherit'
      }}
      containerProps={{
        bgcolor: 'background.paper',
        borderRadius: '8px',
        p: 0.5
      }}
    />
  );
}