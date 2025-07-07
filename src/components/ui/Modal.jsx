// src/components/ui/Modal.jsx
import { Dialog, Transition } from "@headlessui/react";
// …

export default function Modal({ isOpen, onClose, title, children }) {
  return (
    <Transition appear show={isOpen}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto"
        onClose={onClose}
      >
        <div className="fixed inset-0 bg-black/30" />
        <div className="flex items-center justify-center min-h-screen p-4">
          <Dialog.Panel className="relative z-10 w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-card p-6">
            {title && (
              <Dialog.Title className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                {title}
              </Dialog.Title>
            )}
            {children}
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
}
