"use client"
import { PropsWithChildren, useState } from 'react';
import { useUser } from "@hooks/useUser";
import { usePathname } from "next/navigation";
import { useConfig } from "@hooks/useConfig";
import { useTranslation } from "react-i18next";

const drawerWidth = 240;

export const Navbar = (props: PropsWithChildren) => {
  const {t} = useTranslation();
  const currentUser = useUser();
  const [{paletteMode, rtl, locale}, updateConfig] = useConfig();
  const pathname = usePathname();
  const {children} = props;
  const [open, setOpen] = useState(false);
  const navItems = [
    {text: t('home'), href: '/', icon: undefined},
    {text: t('login'), href: '/auth/login', icon: undefined},
    {text: t('protected'), href: '/protected', icon: undefined},
  ];

  const handleLocaleToggle = () => {
    updateConfig({locale: locale === 'faIR' ? 'enUS' : 'faIR'});
  }

  const handleDirectionToggle = () => {
    updateConfig({rtl: !rtl});
  }

  const handleThemeToggle = () => {
    updateConfig({paletteMode: paletteMode == "light" ? "dark" : "light"});
  }

  const handleDrawerToggle = () => {
    setOpen(prev => !prev);
  };

  const drawer = (
      <div>Drawer</div>
  );

  return (
      <>
        <div>Navbar</div>
        {children}
      </>
  );
}
