"use client";

import { FieldValues, UseFormRegister } from "react-hook-form";

interface MessageInputProps {
    placeholder?: string;
    id: string;
    type?: string;
    required?: boolean;
    register: UseFormRegister<FieldValues>;
    errors: any;
}

const MessageInput: React.FC<MessageInputProps> = ({
    placeholder,
    id,
    type,
    required,
    register,
    errors
}) => {
  return (
    <div className="relative w-full">
        <input
            id={id}
            type={type}
            autoComplete={id}
            {...register(id, {required})}
            placeholder={placeholder}
            className="w-full px-4 py-2 font-light text-black rounded-full bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
        />
    </div>
  )
}

export default MessageInput