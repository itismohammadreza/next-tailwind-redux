'use client';
import { Loading } from "./Loading";
import { Toast } from "./Toast";
import { StoreProvider } from "@redux/StoreProvider";
import { PropsWithChildren } from "react";
import { PrimeReactProvider } from "primereact/api";
import '@locales/i18n';
import "@styles/global.scss";

export const Providers = ({children}: PropsWithChildren) => {
  return (
      <StoreProvider>
        <PrimeReactProvider value={{ripple: true}}>
          <Loading/>
          <Toast/>
          {children}
        </PrimeReactProvider>
      </StoreProvider>
  );
}
