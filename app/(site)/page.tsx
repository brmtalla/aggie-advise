import Image from 'next/image'
import AuthForm from './components/AuthForm'

export default function Home() {
    return (
      <div
        className="
            flex
            min-h-full
            flex-col
            justify-center
            [y-12
            sm:px-6
            lg:px-8
            bg-yellow-200
            "
        >
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <Image
                    alt="Aggie Advise Logo"
                    height="200"
                    width="200"
                    className="mx-auto w-auto"
                    src="/images/home-image.png"
                />
                <h2
                    className="
                        mt-6
                        text-center
                        text-3xl
                        font-bold
                        tracking-tight
                        text-gray-900
                    "
                >
                    Sign into Aggie Advise.
                </h2>
            </div>  
            <AuthForm />
      </div>
    )
  }
  