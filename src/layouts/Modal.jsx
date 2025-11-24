const Modal = ({ id, children, className }) => {
  return (
    <dialog id={id} className="modal">
      <div className={`modal-box max-w-fit ${className}`}>{children}</div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default Modal;
