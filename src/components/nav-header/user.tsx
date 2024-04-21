import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui'

import React, { Fragment, type FC } from 'react'

export const User: FC = () => {
    return (
        <Fragment>
            <Avatar>
                <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </Fragment>
    )
}
export default User
