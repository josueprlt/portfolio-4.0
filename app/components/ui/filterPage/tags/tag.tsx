import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap, Power2 } from 'gsap';
import { SearchIcon } from '@/app/components/ui/icons';

interface TagProps {
    name: string;
}

const Tag: React.FC<TagProps> = ({ name }) => {

    return (
        <button>
            {name}
        </button>
    );
};

export default Tag;