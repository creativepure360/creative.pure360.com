import Contact from "../components/Contact";
import Link from "next/link";
import groq from "groq";
import client from "../client-config";
import BlockContent from "@sanity/block-content-to-react";
import { urlFor } from "utils/image-url";
import { motion } from "framer-motion";
import { childrenVariants, parentVariants } from "../variants/variants";

const Index = ({ productGroups }) => {
  return (
    <motion.div initial="hidden" animate="visible" variants={parentVariants}>
      <div className="bg-[#23afe6]">
        <section className="max-w-[1200px] mx-auto py-[50px] px-[30px] grid grid-cols-1 sm:grid-cols-12 gap-[30px] sm:gap-[60px] items-center">
          <motion.article className="col-span-1 sm:col-span-8" variants={childrenVariants}>
            <h1 className="font-greycliff text-white text-[34px] sm:text-[40px] leading-[1.1] font-bold mb-[30px]">Lorem ipsum dolor sit amet</h1>
            <p className="font-opensans text-[18px]leading-6 text-white mb-[30px]">
              orem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
            </p>
          </motion.article>
          <motion.article className="col-span-1 sm:col-span-4 hidden sm:block" variants={childrenVariants}>
            <img src="https://cdn.sanity.io/images/tgvb7jy1/production/e24255bf306541fbae4670d6387fde657a3d5853-512x512.png?w=2000&fit=max&auto=format" />
          </motion.article>
        </section>
      </div>
      <div className="bg-[#e6f6fc]">
        {productGroups.map(({ id, name, description, products }) => (
          <section key={id} className="max-w-[1200px] mx-auto pt-[50px] pb-[50px] px-[30px] grid grid-cols-1 sm:grid-cols-12 gap-[30px] items-center">
            <motion.article className="col-span-1 sm:col-span-12 text-center" variants={childrenVariants}>
              <h2 className="font-greycliff text-[#002a4d] text-[30px] sm:text-[36px] leading-[1.1] font-bold mb-[30px]">{name}</h2>
              <div className="font-opensans text-[18px]leading-6 text-[#002a4d] mb-[20px]">
                <BlockContent blocks={description} />
              </div>
            </motion.article>
            {products.map(({ id, name, exerpt, image, slug }) => (
              <motion.article key={id} className="col-span-1 sm:col-span-6" variants={childrenVariants}>
                <Link href={`/product/${slug}`} scroll={false}>
                  <div className="bg-white p-[30px] text-center hover:translate-y-[-10px] transition duration-300">
                    <img className="mx-auto max-w-[150px] mb-[15px]" src={urlFor(image)} />
                    <h3 className="font-greycliff text-[#002a4d] text-[24px] leading-[1.1] font-bold mb-[10px]">{name}</h3>
                    <div className="font-opensans text-[18px] leading-6 text-[#002a4d] mb-[30px]">
                      <BlockContent blocks={exerpt} />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </section>
        ))}
      </div>
      <Contact />
    </motion.div>
  );
};

export const getStaticProps = async () => {
  const productGroups = await client.fetch(
    groq`*[_type == "category"] | order(name asc) {
      "id": _id,
      name,
      description,
      "products": *[_type == "product" && references(^._id)] | order(name asc) {
            "id": _id,
            image,
            name, 
            exerpt,
            "slug": slug.current,
        }
    }`
  );
  return {
    props: { productGroups },
    revalidate: 1,
  };
};

export default Index;
