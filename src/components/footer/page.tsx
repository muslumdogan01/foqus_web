import Image from "next/image";
import SocialIcon from "./socialIcon";

export default function Footer() {
  return (
    <footer className="bg-[#181818] text-white py-8">
      <div className="container mx-auto flex flex-col items-center  space-y-6">
        <div className="flex  md:justify-between flex-col md:flex-row  w-full max-w-4xl items-center">
          <nav className="flex space-x-6 items-center font-semibold text-base">
            <div className="md:flex hidden  ">
              <Image src="/footer/logo.png" width={50} height={50} alt="logo" />
            </div>
            <a href="#" className="text-[#FFFFFF4D] hover:text-white">
              Home
            </a>
            <a href="#" className="text-[#FFFFFF4D] hover:text-white">
              Features
            </a>
            <a href="#" className="text-[#FFFFFF4D] hover:text-white">
              Pricing
            </a>
            <a href="#" className="text-[#FFFFFF4D] hover:text-white">
              Invite
            </a>
            <a href="#" className="text-[#FFFFFF4D] hover:text-white">
              Contact
            </a>
          </nav>
          <div className="flex space-x-4 pt-4 md:pt-0">
            <a href="#" >
            <SocialIcon type="facebook" />
            </a>
            <a href="#" >
            <SocialIcon type="twitter" />
            </a>
            <a href="#" >
            <SocialIcon type="instagram" />
            </a>
            <a href="#" >
            <SocialIcon type="youtube" />
            </a>
          </div>
        </div>
        <div className="w-full max-w-4xl border-t border-gray-600"></div>

        <div className="flex text-center md:text-left justify-between flex-col md:flex-row w-full max-w-4xl text-[#FFFFFF80] font-medium text-sm leading-[1.3]">
          <p>© 2023 YourPOS. All rights reserved.</p>
          <div className="flex space-x-6 justify-center pt-4 md:pt-0">
            <a
              href="#"
              className="hover:text-white font-medium text-sm leading-[1.3] "
            >
              Gizlilik Sözleşmesi
            </a>
            <a
              href="#"
              className="hover:text-white font-medium text-sm leading-[1.3]"
            >
              Kullanım Şartları
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
