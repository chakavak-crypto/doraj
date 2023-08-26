import {Roboto} from 'next/font/google';
import localFont from 'next/font/local';

export const IRANSansX = localFont({
  variable: '--iransans',
  preload: false,
  src: [
    {
      path: '../assets/fonts/woff2/IRANSansX-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../assets/fonts/woff2/IRANSansX-UltraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../assets/fonts/woff2/IRANSansX-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/woff2/IRANSansX-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/woff2/IRANSansX-DemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../assets/fonts/woff2/IRANSansX-Black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../assets/fonts/woff2/IRANSansX-Medium.woff2',
      weight: 'bold',
      style: 'normal',
    },
    {
      path: '../assets/fonts/woff2/IRANSansX-UltraLight.woff2',
      weight: 'normal',
      style: 'normal',
    },
  ]
});

export const IRANSansXFaNum = localFont({
  variable: '--iransansfanum',
  src: [
    {
      path: '../assets/fonts/woff2/IRANSansXFaNum-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../assets/fonts/woff2/IRANSansXFaNum-UltraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../assets/fonts/woff2/IRANSansXFaNum-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/woff2/IRANSansXFaNum-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/woff2/IRANSansXFaNum-DemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../assets/fonts/woff2/IRANSansXFaNum-Black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../assets/fonts/woff2/IRANSansXFaNum-Medium.woff2',
      weight: 'bold',
      style: 'normal',
    },
    {
      path: '../assets/fonts/woff2/IRANSansXFaNum-UltraLight.woff2',
      weight: 'normal',
      style: 'normal',
    },
  ]
});

export const roboto = Roboto({
  variable: '--roboto',
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});