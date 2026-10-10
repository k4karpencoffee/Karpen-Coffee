import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return <div className={twMerge('mx-auto w-full max-w-site px-5 md:px-8', className)}>{children}</div>;
}