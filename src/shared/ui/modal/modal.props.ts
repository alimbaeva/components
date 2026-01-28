import type { ReactNode } from 'react';

type Props = {
  isOpen: boolean;
  className?: string;
  onClose: () => void;
  children: ReactNode;
};

export type { Props };
