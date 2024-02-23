import '@/app/globals.css';
import { Inter as FontSans } from 'next/font/google';

import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

export const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans',
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en' suppressHydrationWarning>
            <head />
            <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
                <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
                    <Toaster />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
