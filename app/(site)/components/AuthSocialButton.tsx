import React from 'react'
import { IconType } from 'react-icons'

interface AuthSocialButtonProps {
    icon: IconType;
    onClick: () => void;
}

const AuthSocialButton: React.FC<AuthSocialButtonProps>= ({
    icon: Icon,
    onClick
}) => {
  return (
    <button
        onClick={onClick}
        type="button"
        className="
            inline-flex
            w-full
            justify-center
            rounded-md
            bg-white
            px-4
            py-2
            text-blue-600
            shadow-sm
            hover:bg-gray-50
            ring-1
            ring-inset
            ring-gray-300
            focus:outline-offset-0

        "
    >
        <Icon />
    </button>
  )
}

export default AuthSocialButton