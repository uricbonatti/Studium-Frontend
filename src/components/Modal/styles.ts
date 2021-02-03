import { Styles } from 'react-modal';

export const modalStyle: Styles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: 'var(--color-background-modal)',
    color: 'var(--color-text-contrast)',
    borderRadius: '8px',
    width: '736px',
    border: 'none',
  },
  overlay: {
    backgroundColor: '#121214e6',
  },
};
