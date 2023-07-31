"use client";

import { AiOutlineMenu } from "react-icons/ai";
import { useCallback, useState } from "react";
import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/types";

import Avatar from "../Avatar";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => {
            if (currentUser) {
            }
            if (!currentUser) {
              loginModal.onOpen();
            }
          }}
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
        >
          {currentUser?.name || "로그인하고 시작하세요"}
        </div>
        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 border-[1px] border-t-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem onClick={() => {}} label="여행 기록" />
                <MenuItem onClick={() => {}} label="즐겨찾기" />
                <MenuItem onClick={() => {}} label="예약 목록" />
                <MenuItem onClick={() => {}} label="즐겨찾기" />
                <MenuItem onClick={() => {}} label="마이페이지" />
                <hr />
                <MenuItem onClick={() => signOut()} label="로그아웃" />
              </>
            ) : (
              <>
                <MenuItem onClick={loginModal.onOpen} label="로그인" />
                <MenuItem onClick={registerModal.onOpen} label="회원가입" />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
