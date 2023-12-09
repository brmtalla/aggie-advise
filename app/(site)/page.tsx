// page.tsx
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
            py-12
            sm:px-6
            lg:px-8
            bg-yellow-200
            "
        >
            <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
                <h1 style={{ textShadow: '1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000' }} className="head text-3xl font-bold mb-4 text-blue-700">Welcome To Aggie Advise!</h1>
                <h3 style={{ textShadow: '1px 1px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000' }} className="sub-heading text-xl font-semibold mb-4 text-yellow-400">
                  Streamlining academic advising for student success.
                </h3>
                <p className="home-context mb-4">
                  A page meant to make it easier to get advising done. Our page is based
                  on students and advisors not being able to have contact except through
                  email. However with issues like junk mail, initial contact can be
                  difficult to achieve. This is where Aggie Advise comes in. We created
                  this page with the idea of achieving initial contact. We even have
                  other components that can be used in jump starting the advising
                  process.
                </p>
                <div className="animate-bounce">
                  <Image
                      alt="Aggie Advise Logo"
                      height="200"
                      width="200"
                      className="mx-auto w-auto"
                      src="/images/home-image.png"
                  />
                </div>
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