import { FC, useEffect, useState } from 'react';
import { List } from './components/List/List';
import { Container } from './components/Container/Container';
import { ButtonCreateCard } from './components/ButtonCreateCard/ButtonCreateCard';
import { Modal } from './components/Modal/Modal';
import { addNoScroll, removeNoScroll } from './utils/controllScroll';
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const App: FC = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  useEffect(() => {
    if (isOpenModal) {
      addNoScroll()
    } else {
      removeNoScroll()
    }

    return () => {
      removeNoScroll();
    }
  }, [isOpenModal]);

  return (
    <>
      <Container>
        <List />
        <ButtonCreateCard setIsOpenModal={setIsOpenModal} />
        <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
      </Container>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme="colored"
        transition={Slide}
      />
    </>
  );
}
