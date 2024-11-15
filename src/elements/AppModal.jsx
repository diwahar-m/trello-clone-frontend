import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";

export default function AppModal({
  isOpen,
  onClose,
  children,
  title,
  edit = false,
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>

        {edit && (
          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={() => onClose()}>
              Cancel
            </Button>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );
}
