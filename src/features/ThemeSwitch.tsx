import CkkThemeSwitch from "@/components/CkkThemeSwitch";
import {CkkThemeSwitchProps} from "@/components/CkkThemeSwitch/CkkThemeSwitch";
import {ChangeEvent, useEffect, useState} from 'react'
import {useTheme} from 'next-themes'

export default function ThemeSwitch(props: CkkThemeSwitchProps) {
  const [mounted, setMounted] = useState(false)
  const {theme, setTheme} = useTheme()
  const [checked, setChecked] = useState( theme === 'light');

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const newTheme = checked ? 'light' : 'dark';
    fetch('/api/theme', {
      method: "POST",
      body: JSON.stringify({theme: newTheme})
    });
    setTheme(newTheme);
  },[checked])

  if (!mounted) {
    return null
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <CkkThemeSwitch
      {...props}
      checked={checked}
      onChange={handleChange}
    />
  );
}