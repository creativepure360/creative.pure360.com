import Link from "next/link";
import { motion } from "framer-motion";
import { childrenVariants } from "../variants/variants";

const Contact = () => {
  return (
    <>
      <div className="bg-[#f3e400]">
        <section className="max-w-[1200px] mx-auto py-[50px] px-[30px] text-center">
          <motion.article variants={childrenVariants}>
            <h1 className="font-greycliff text-[#002a4d] text-[34px] sm:text-[40px] leading-[1.1] font-bold mb-[30px]">Get in touch</h1>
            <p className="font-opensans text-[18px]leading-6 text-[#002a4d] mb-[30px]">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
            <Link className="font-opensans text-[18px] leading-[28.8px] font-bold duration-300 ease-in-out text-white hover:text-[#002a4d] bg-[#002a4d] hover:bg-white rounded-3xl inline-block select-none px-[25px] py-[9px]" href="https://spotler.com/get-in-touch" scroll={false}>
              Contact us
            </Link>
          </motion.article>
        </section>
      </div>
    </>
  );
};

export default Contact;
