'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Button from './Button';

export default function Header() {
  const [user, setUser] = useState(true);
  const [searching, setSearching] = useState(true);
  // const router = useRouter();
  const handleLogin = () => {
    setUser(!user);
  };
  const handleSearching = () => {
    setSearching(!searching);
  };
  return (
    <div className="relative z-10">
      <div className="fixed w-full">
        <div className="mx-auto flex h-[70px] w-full max-w-[1920px] items-center justify-between border-b bg-orange-600 px-5 md:h-[80px] md:px-[30px] xl:h-[100px]">
          <div className="flex items-center gap-5 text-base font-bold text-white">
            <Button
              variant="secondary"
              size="small"
              font="14"
              onClick={handleLogin}
            >
              {user ? '로그인' : '로그아웃'}
            </Button>
            <Link
              href="/"
              className="rounded-xl px-4 py-2 transition duration-300 hover:bg-orange-700"
            >
              <p>모임 찾기</p>
            </Link>
            <Link
              href="/likes"
              className="rounded-xl  px-4 py-2 transition duration-300 hover:bg-orange-700"
            >
              <p>찜한 모임</p>
            </Link>
            <Link
              href="/allreview"
              className="rounded-xl px-4 py-2 transition duration-300 hover:bg-orange-700"
            >
              <p>모든 리뷰</p>
            </Link>
          </div>

          <div className="flex gap-5">
            <button onClick={handleSearching}>
              {searching ? (
                <Image
                  src="/Vector.png"
                  width={20}
                  height={20}
                  alt="검색버튼"
                />
              ) : (
                <Image
                  src="/delete.svg"
                  width={20}
                  height={20}
                  alt="검색닫기버튼"
                />
              )}
            </button>
            {user ? (
              <div className="flex gap-7 text-base font-bold text-white">
                <Link href="/login">
                  <Button
                    variant="primary"
                    size="small"
                    font="14"
                    className=" border border-white"
                  >
                    <p>로그인/회원가입</p>
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="flex text-base font-bold text-white">
                <Link href="/mypage">
                  <p>마이 페이지</p>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}