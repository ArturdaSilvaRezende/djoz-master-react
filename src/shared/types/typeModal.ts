export type Modal = {
  isModal: boolean;
  setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
  modalRef: React.Ref<HTMLDivElement | null>;
  modalVideoRef?: React.Ref<HTMLVideoElement | null>;
};
