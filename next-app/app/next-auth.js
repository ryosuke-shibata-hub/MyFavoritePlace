import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Providers.Credentials({
      // 認証プロバイダーの設定
    }),
  ],
  session: {
    // セッションに含めたいユーザー情報を指定
    user: {
      id: 'user.id', // ユーザーIDなど必要な情報
      email: 'user.email',
      login_id: 'user.login_id',
      // 他の情報も追加できます
    },
  },
  // ...
});
