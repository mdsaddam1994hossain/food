import React,{FC} from 'react';
import { Modal } from 'flowbite-react';


type Props={
    show:boolean;
    onClose: () => void;
    children:React.ReactNode;
    header:string
}

const ModalCustom:FC<Props> = ({show,onClose,children,header}) => {
    return (
        <Modal show={show} onClose={onClose}>
          <Modal.Header>{header}</Modal.Header>
           {children}
        </Modal>
    );
};

export default ModalCustom;