import { useState } from "react";
import styles from "./FloatingContact.module.css";
import { FaFacebookF, FaPhone } from "react-icons/fa";
import { SiZalo } from "react-icons/si";

function FloatingContact() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={styles.floatingWrapper}>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
        <FaFacebookF size={24} color="#fff" />
      </a>
      <a href="https://zalo.me" target="_blank" rel="noopener noreferrer" className={styles.icon}>
        <SiZalo size={24} color="#fff" />
      </a>
      <div
        className={styles.phoneWrapper}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <a href="tel:0392920348" className={styles.phoneButton}>
          {isHovered && <span className={styles.phoneText}>0392920348</span>}
          <FaPhone size={24} color="#fff" />
        </a>
      </div>
    </div>
  );
}

export default FloatingContact;
