import React from "react";
import Image from "next/image";
import { logoutAccount } from "@/lib/actions/user.actions";
import { useRouter } from "next/navigation";

const Footer = ({ user, type = "desktop" }: FooterProps) => {
  const router = useRouter();
  const handleLogOut = async () => {
    try {
      const loggedOut = await logoutAccount();
      if (loggedOut) {
        router.push("/sign-in");
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("An error occurred during logout", error);
    }
  };

  return (
    <footer className="footer">
      <div className={type === "mobile" ? "footer_name-mobile" : "footer_name"}>
        <p className=" text-slate-500 font-bold text-lg">
          {user?.firstName[0]}
        </p>
      </div>

      <div
        className={type === "mobile" ? "footer_email-mobile" : "footer_email"}
      >
        <h1 className="text-sm truncate text-slate-600 font-semibold">
          {user?.firstName}
        </h1>

        <p className="text-xs truncate font-normal text-slate-500">
          {user?.email}
        </p>
      </div>

      <div className="footer_image" onClick={handleLogOut}>
        <Image src="icons/logout.svg" fill alt="ckk" />
      </div>
    </footer>
  );
};

export default Footer;
