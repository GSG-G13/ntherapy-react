import { ChangeEventHandler } from 'react';

interface Props {
    value: string | number | undefined;
    dataType: 'fullName' | 'hourlyRate' | 'major';
    onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    isEditable: boolean
}
export default Props;
