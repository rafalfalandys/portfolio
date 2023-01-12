// import { useContext, useEffect } from "react";
// import Context from "../store/context";

// function useKey() {
//   const ctx = useContext(Context);

//   useEffect(() => {
//     const arrowHandler = (e) => {
//       if (e.key === "ArrowRight") ctx.nextImg();
//       if (e.key === "ArrowLeft") ctx.prevImg();
//     };

//     const escHandler = (e) => {
//       if (e.key === "Escape" && ctx.isModalVisible) {
//         console.log("escape");
//         ctx.hideModal();
//         document.removeEventListener("keydown", escHandler);
//         document.removeEventListener("keydown", arrowHandler, { once: true });
//       }
//     };
//     document.addEventListener("keydown", escHandler);
//     document.addEventListener("keydown", arrowHandler, { once: true });
//   }, [ctx.curImg]);
// }

// export default useKey;
