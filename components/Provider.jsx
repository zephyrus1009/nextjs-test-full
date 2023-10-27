// file này hỗ trợ đăng nhập bằng google auth, next-auth
'use client';
// dùng khả năng của browser, cho nên sẽ là client component
import { SessionProvider } from "next-auth/react";

const Provider = ({ children, session }) => (
  <SessionProvider session={session}>
    {children}
  </SessionProvider>
)

export default Provider;
