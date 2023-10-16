"use client";
// vì nav sẽ là client component, hay nói cách khác là nó sẽ phải dùng hook của react, nên ta phải biến nó thành client component
import Link from "next/link";
// dùng để navigate giữa các page khác nhau
import Image from "next/image";
// giúp tối ưu ảnh một cách tự động
import { useState, useEffect } from "react";
// để sử dụng react hook
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
// hỗ trợ việc signIn, signout

const Nav = () => {
  const isUserLoggedIn = true; // Khai báo biến để quản lý trạng thái đăng nhập của user. Vì trước và sau khi đăng nhập thì giao diện web sẽ khác nhau, nên cần quản lý trạng thái này để hiển thị tương ứng. Khi còn đang code thì ta sẽ để biến này true hoặc false tuỳ theo ta đang muốn code hiển thị cho trạng thái nào.
  
  // đoạn code dưới đây hỗ trợ signin bằng google và next-auth
  const [providers, setProviders] = useState(null);
useEffect(() => {
  const setProviders = async () => {
    const response = await getProviders();
    setProviders(response);
  }
  setProviders();
},[])

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="Promptopia logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Promptopia</p>
      </Link>
      {/* toàn bộ đoạn link này để khi kích vào logo thì sẽ về trang chủ (root) */}

      {/* đoạn này giúp hỗ trợ desktop navigation, tức nó sẽ hiển thị trên thiết bị kích thước từ small trở lên */}
      {/* desktop navigation */}
      <div className="invisible sm:flex sm:visible">
        {/* Lưu ý: tailwind, bootstrap và các css framework khác đều là mobile first design. Do đó, các class không có variant theo sau sẽ được áp vào cho smaller screen first, sau đó mới áp đến class với variant cho bigger screen. Do đó, ở trên hiểu là mặc định là invisible, cho đến khi screen tăng đến kích thước small thì mới visible và có kiểu flex. Bình thường có thể viết là hidden sm: flex. Nhưng đang bị lỗi, chỉ sửa thành như trên mới chạy, còn không thì luôn bị hidden. */}
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Post
            </Link>
            <button type="button" onClick={signOut} className="outline_btn">Sign Out</button>
            <Link href='/profile'>
              <Image src='/assets/images/user.svg' width={37} height={37} className="rounded-full" alt="profile"/>
            </Link>
          </div>
          // nếu người dùng đã đăng nhập thì hiện ra các nút tạo post, signout
        ) : (
          <>
          {providers && Object.values(providers).map((provider) => (
            <button type="button" key={provider.name} onClick={() => signIn(provider.id)} className="black_btn">Sign In</button>
            // nếu người dùng chưa login thì hiện nút Sign In
          ) 
          )}
          </>
        )}
      </div>

      {/* đoạn này giúp hỗ trợ mobile navigation, tức nó sẽ chỉ hiển thị trên thiết bị kích thước bé hơn small */}
      <div className="sm:hidden flex relative">
      {isUserLoggedIn ? (
          <div className="flex">
            <Image src='/assets/images/user.svg' width={37} height={37} className="rounded-full" alt="profile" onClick={() => {}}/>
          </div>
          // nếu người dùng đã đăng nhập thì hiện ảnh user có thể bấm vào được để ra các options, vì đây là thiết kế thường gặp trên mobile.
        ) : (
          <>
          {providers && Object.values(providers).map((provider) => (
            <button type="button" key={provider.name} onClick={() => signIn(provider.id)} className="black_btn">Sign In</button>
            // nếu người dùng chưa đăng nhập thì hiện nút Sign In.
          ) 
          )}
          </>
        )}
      </div>

    </nav>
  );
};

export default Nav;
