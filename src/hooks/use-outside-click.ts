import React, { useEffect } from "react";

export const useOutsideClick = (
    ref: React.RefObject<HTMLDivElement>,
    callback: (event: MouseEvent | TouchEvent) => void
) => {
    useEffect(() => {
        const listener = (event: MouseEvent | TouchEvent) => {
            // Pastikan elemen referensi ada, dan abaikan jika klik/touch di dalam elemen
            if (!ref.current || ref.current.contains(event.target as Node)) {
                return;
            }
            callback(event); // Panggil fungsi callback
        };

        // Tambahkan event listener untuk mousedown dan touchstart
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        return () => {
            // Hapus event listener saat komponen unmount
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, callback]);
};
