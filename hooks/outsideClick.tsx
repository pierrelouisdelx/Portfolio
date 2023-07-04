import { useEffect } from 'react';

interface OutsideClickProps {
    ref: any;
    callback: () => void;
}

export function useOutsideClick({ ref, callback }: OutsideClickProps) {
    useEffect(() => {
        function handleClickOutside(event: any) {
            if (ref.current && !ref.current.contains(event.target)) {
                callback();
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);
}
