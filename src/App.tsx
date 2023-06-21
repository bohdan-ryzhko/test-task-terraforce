import { FC, useEffect, useState } from 'react';
import { List } from './components/List/List';
import { Container } from './components/Container/Container';
import { ButtonCreateCard } from './components/ButtonCreateCard/ButtonCreateCard';
import { Modal } from './components/Modal/Modal';
import { addNoScroll, removeNoScroll } from './utils/controllScroll';
import { ToastNotification } from './components/ToastNotification/ToastNotification';
import { FormCreateCard } from './components/FormCreateCard/FormCreateCard';
import { FormUpdateCard } from './components/FormUpdateCard/FormUpdateCard';

export const App: FC = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isOpenModalUpdate, setIsOpenModalUpdate] = useState<boolean>(false);
  const [updatedIndex, setUpdatedIndex] = useState<number>(0);

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
        <List setIsOpenModal={setIsOpenModalUpdate} setUpdatedIndex={setUpdatedIndex} />
        <ButtonCreateCard setIsOpenModal={setIsOpenModal} />
        <Modal
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
          component={<FormCreateCard />}
        />
        <Modal
          isOpenModal={isOpenModalUpdate}
          setIsOpenModal={setIsOpenModalUpdate}
          component={<FormUpdateCard updatedIndex={updatedIndex} />}
        />
      </Container>
      <ToastNotification />
    </>
  );
}
