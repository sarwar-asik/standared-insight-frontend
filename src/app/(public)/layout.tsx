import React from 'react'

export default function PublicLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>

            {children}
        </div>
    )
}
