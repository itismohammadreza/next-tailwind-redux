'use client';
import { Loading } from "./Loading";
import { Toast } from "./Toast";
import { StoreProvider } from "@redux/StoreProvider";
import { PropsWithChildren } from "react";
import '@locales/i18n';
import "@styles/global.scss";

export const Providers = ({children}: PropsWithChildren) => {
  return (
      <StoreProvider>
        <Loading/>
        <Toast/>
        {children}
      </StoreProvider>
  );
}
