import { FC, useEffect, useState } from 'react';
import { ShowList } from './components/ShowList/ShowList';
import { Container } from './components/Container/Container';
import { ButtonCreateCard } from './components/ButtonCreateCard/ButtonCreateCard';
import { Modal } from './components/Modal/Modal';
import { addNoScroll, removeNoScroll } from './utils/controllScroll';

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
    <Container>
      <ShowList />
      <ButtonCreateCard setIsOpenModal={setIsOpenModal} />
      <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
    </Container>
  );
}
