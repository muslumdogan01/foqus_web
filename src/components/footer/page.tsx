import { Icon } from "@/components/Icon";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#181818] text-white py-8">
      <div className="container mx-auto flex flex-col items-center space-y-6">
        <div className="flex justify-between  w-full max-w-4xl items-center">
     
          <nav className="flex space-x-6 items-center">
          <div className="md:flex hidden  ">
            <Image src="/footer/logo.png" width={50} height={50} alt="logo" />
          </div>
            <a href="#" className="text-white font-semibold">
              Home
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Features
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Pricing
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Invite
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Contact
            </a>
          </nav>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-400">
              <Icon icon="facebook" size={20} color="white" />
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <Icon icon="twitter" size={20} color="white" />
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <Icon icon="instagram" size={20} color="white" />
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <Icon icon="youtube" size={20} color="white" />
            </a>
          </div>
        </div>
        <div className="w-full max-w-4xl border-t border-gray-600"></div>

        <div className="flex justify-between w-full max-w-4xl text-gray-400 text-sm">
          <p>© 2023 YourPOS. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white">
              Gizlilik Sözleşmesi
            </a>
            <a href="#" className="hover:text-white">
              Kullanım Şartları
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
