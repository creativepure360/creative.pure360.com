import BlockContent from "@sanity/block-content-to-react";
import { urlFor } from "../../../utils/image-url";

import { motion } from "framer-motion";

const CategoryDescription = ({ category }) => {
  const [{ title, description, icon }] = category;

  return (
    <>
      <section className="mb-16">
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-3 mb-8 items-center">
          <motion.div
            animate={{
              x: 0,
              opacity: 1,
            }}
            initial={{
              x: -100,
              opacity: 0,
            }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="col-span-1 mx-auto mb-8 sm:mb-0 bg-contain bg-no-repeat bg-center w-full h-fu"
            style={{
              backgroundImage: `url(${urlFor(icon)})`,
              paddingTop: "100%",
            }}
          ></motion.div>
          <div className="col-span-1 sm:col-span-2">
            <motion.div
              animate={{
                y: 0,
                opacity: 1,
              }}
              initial={{
                y: -10,
                opacity: 0,
              }}
              transition={{ duration: 1, delay: 0 }}
            >
              <h2 className="font-avant-garde-bold text-5xl leading-14 mb-8">
                {title}
              </h2>
              <BlockContent blocks={description} />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryDescription;