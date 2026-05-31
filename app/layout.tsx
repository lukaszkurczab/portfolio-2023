"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ParticlesComponent } from "../src/particles/index";
import Footer from "../src/footer/index";
import styles from "./layout.module.scss";
import "../src/styles/global.scss";
import Navigation from "../src/navigation/index";

import logo from "../public/logo.png";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isTotPage = pathname === "/tot";

  return (
    <html lang="en">
      <body className={styles.layout}>
        {!isTotPage && (
          <>
            <ParticlesComponent />
            <Image src={logo} alt="" className={styles.layout__logo} />
            <Navigation />
          </>
        )}
        <div
          className={`${styles.pageWrapper} ${
            isTotPage ? styles.pageWrapperTot : ""
          }`}
        >
          {children}
        </div>
        {!isTotPage && <Footer />}
      </body>
    </html>
  );
}
