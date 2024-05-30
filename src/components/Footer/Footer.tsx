import Image from "next/image";
import styles from "./Footer.module.css";

export default async function Footer() {
  return (
    <footer className={styles.footer}>
      <Image
        src={"/assets/images/dogs-footer.svg"}
        alt="footer"
        width={28}
        height={22}
      />
      <p>Dogs. Alguns direitos reservados. </p>
    </footer>
  );
}
