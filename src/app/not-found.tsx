'use client'

import Icons from '@/components/icons'

import { Button } from '@/components/ui'

import { useRouter } from 'next/navigation'

import Link from 'next/link'

import { FC } from 'react'

const NotFound: FC = () => {
    const router = useRouter()

    const handleGoBack = () => {
        router.back()
    }

    return (
        <div className="flex flex-col min-h-svh max-w-[350px] justify-center items-start gap-4 m-auto">
            <p className="text-lg font-semibold">Not Found</p>
            <p className="text-md text-muted-foreground">
                Could not find requested resource
            </p>
            <Button
                variant="link"
                className="font-medium underline underline-offset-4 inline"
                onClick={handleGoBack}
            >
                Return Home <Icons.Back />
            </Button>
        </div>
    )
}
export default NotFound
