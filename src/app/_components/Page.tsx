import { forwardRef, ReactNode } from 'react';
import Head from 'next/head';

interface PageProps {
  children: ReactNode;
  meta?: ReactNode;
  title?: string;
  suffix?: string;
  separator?: string;
}

export const Page = forwardRef<HTMLDivElement, PageProps>((props, ref) => {
  const {children, title = '', separator = '|', suffix = '', meta, ...other} = props;

  return (
      <>
        <Head>
          <title>{`${title} ${suffix ? separator : ''} ${suffix}`}</title>
          {meta}
        </Head>

        <div ref={ref} {...other}>
          {children}
        </div>
      </>
  )
})
