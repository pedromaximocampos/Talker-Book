export interface RatingModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (review: { user: string; rating: number; comment: string }) => void;
}