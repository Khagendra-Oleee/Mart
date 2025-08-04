import { useRef, useEffect, useCallback } from 'react';

interface UseFocusManagementProps {
  trapFocus?: boolean;
  autoFocus?: boolean;
  onFocusChange?: (element: HTMLElement | null) => void;
}

export const useFocusManagement = ({
  trapFocus = false,
  autoFocus = false,
  onFocusChange,
}: UseFocusManagementProps = {}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const focusableElementsRef = useRef<HTMLElement[]>([]);

  const getFocusableElements = useCallback(() => {
    if (!containerRef.current) return [];

    const focusableSelectors = [
      'button:not([disabled])',
      'input:not([disabled])',
      'textarea:not([disabled])',
      'select:not([disabled])',
      'a[href]',
      '[tabindex]:not([tabindex="-1"])',
      '[contenteditable="true"]',
    ];

    return Array.from(
      containerRef.current.querySelectorAll<HTMLElement>(focusableSelectors.join(', '))
    ).filter((element) => {
      const style = window.getComputedStyle(element);
      return style.display !== 'none' && style.visibility !== 'hidden';
    });
  }, []);

  const focusFirstElement = useCallback(() => {
    const elements = getFocusableElements();
    if (elements.length > 0) {
      elements[0].focus();
      onFocusChange?.(elements[0]);
    }
  }, [getFocusableElements, onFocusChange]);

  const focusLastElement = useCallback(() => {
    const elements = getFocusableElements();
    if (elements.length > 0) {
      elements[elements.length - 1].focus();
      onFocusChange?.(elements[elements.length - 1]);
    }
  }, [getFocusableElements, onFocusChange]);

  const focusNextElement = useCallback(() => {
    const elements = getFocusableElements();
    const currentIndex = elements.findIndex((el) => el === document.activeElement);
    
    if (currentIndex === -1) {
      focusFirstElement();
    } else if (currentIndex < elements.length - 1) {
      elements[currentIndex + 1].focus();
      onFocusChange?.(elements[currentIndex + 1]);
    } else if (trapFocus) {
      focusFirstElement();
    }
  }, [getFocusableElements, focusFirstElement, trapFocus, onFocusChange]);

  const focusPreviousElement = useCallback(() => {
    const elements = getFocusableElements();
    const currentIndex = elements.findIndex((el) => el === document.activeElement);
    
    if (currentIndex === -1) {
      focusLastElement();
    } else if (currentIndex > 0) {
      elements[currentIndex - 1].focus();
      onFocusChange?.(elements[currentIndex - 1]);
    } else if (trapFocus) {
      focusLastElement();
    }
  }, [getFocusableElements, focusLastElement, trapFocus, onFocusChange]);

  useEffect(() => {
    if (autoFocus) {
      focusFirstElement();
    }
  }, [autoFocus, focusFirstElement]);

  useEffect(() => {
    if (!trapFocus) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        event.preventDefault();
        
        if (event.shiftKey) {
          focusPreviousElement();
        } else {
          focusNextElement();
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('keydown', handleKeyDown);
      return () => container.removeEventListener('keydown', handleKeyDown);
    }
  }, [trapFocus, focusNextElement, focusPreviousElement]);

  return {
    containerRef,
    focusFirstElement,
    focusLastElement,
    focusNextElement,
    focusPreviousElement,
    getFocusableElements,
  };
}; 