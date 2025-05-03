// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import Menu from "../../icons/Menu";
import { useMobileMenuContext } from "../../../contexts/MobileMenuContext";

export default function MobileMenuIcon() {
  const { mobileMenuOpened, setMobileMenuOpened } = useMobileMenuContext();
  return (
    <motion.button
      initial="closed"
      animate={{ rotate: mobileMenuOpened ? 90 : 0 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="hidden items-center justify-center hover:cursor-pointer max-lg:flex"
      onClick={() => setMobileMenuOpened(true)}
    >
      <Menu className="stroke-primary-50 h-7 w-7" width={2} />
    </motion.button>
  );
}
