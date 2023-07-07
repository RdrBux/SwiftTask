import { MouseEventHandler, useEffect, useRef } from 'react';

interface Props {
  children: JSX.Element;
  open: boolean;
  onClose: any;
}

export default function Modal({ children, open, onClose }: Props) {
  const modal = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (open && modal.current) {
      modal.current.showModal();
    } else {
      if (modal.current) modal.current.close();
    }
  }, [open]);

  function onClick(e: React.MouseEvent<HTMLDialogElement>) {
    const { current: el } = modal;
    if (e.target === el) onClose();
  }

  return (
    <dialog onClick={onClick} onClose={onClose} ref={modal}>
      {children}
    </dialog>
  );
}
