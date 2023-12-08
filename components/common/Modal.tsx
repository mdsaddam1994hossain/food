import React,{FC} from 'react';
import { Modal } from 'flowbite-react';


type Props={
    show:boolean;
    onClose: () => void;
    children:React.ReactNode;
}

const ModalCustom:FC<Props> = ({show,onClose,children}) => {
    return (
        <Modal show={show} onClose={onClose}>
           {children}
        </Modal>
    );
};

export default ModalCustom;