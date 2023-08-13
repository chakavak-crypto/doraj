'use client';

import * as React from "react";
import { Provider } from 'react-redux';
import { store } from './store';

export default function StoreRegistry({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}