import React from "react";
import {motion} from "framer-motion";

function ImageGrid({setSelectedImg}) {
  const {docs} = [{id: "0", photo: ""},];
  console.log(docs)

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            layout
            whileHover={{opacity: 1}}
            className="img-wrap"
            key={doc.id}
            onClick={() => setSelectedImg(doc.url)}
          >
            <motion.img
              src={doc.url}
              alt="uploadded pic"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{delay: 1}}
            />
          </motion.div>
        ))}
    </div>
  );
}

export default ImageGrid;
