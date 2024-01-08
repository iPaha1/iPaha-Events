import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href='/'>
          <Image 
            src="/assets/images/logo1.svg"
            alt="logo"
            width={50}
            height={28}
          />
        </Link>
        <p className="text-center text-xs text-black"> Terms & Conditions  |  Policies </p>

        <p className="text-center text-xs text-black">&copy; 2024 iPaha Events. All Rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer