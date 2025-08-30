// import { useState } from "react";
// import { IoMdClose } from "react-icons/io";
// import PropTypes from "prop-types";

// const ProductModal = ({ imgSrc }) => {
//     const [open, setOpen] = useState(false);
//     return (
//         <>
//             {open && (
//                 <div className="product-modal">
//                     <div className="product-modal__wrapper">
//                         <button onClick={() => setOpen(false)}>
//                             <IoMdClose size={24} />
//                         </button>
//                         <div className="product-modal__content">
//                             <img src={imgSrc} alt="" />
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// };

// ProductModal.propTypes = {
//     imgSrc: PropTypes.string.isRequired,
//     onClose: PropTypes.func.isRequired,
// };

// export default ProductModal;

import { IoMdClose } from "react-icons/io";
import PropTypes from "prop-types";

const ProductModal = ({ imgSrc, onClose }) => {
    if (!imgSrc) return null; // если нет картинки, модалки нет

    return (
        <div className="product-modal" onClick={onClose}>
            <div
                className="product-modal__wrapper"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="product-modal__close">
                    <button onClick={onClose}>
                        <IoMdClose size={24} />
                    </button>
                </div>
                <div className="product-modal__content">
                    <img src={imgSrc} alt="" />
                </div>
            </div>
        </div>
    );
};

ProductModal.propTypes = {
    imgSrc: PropTypes.string,
    onClose: PropTypes.func.isRequired,
};

export default ProductModal;
